import { query,collection, doc, onSnapshot,orderBy,setDoc } from "firebase/firestore";
import { auth,db } from "../config/firebase.config";

export const getUserDetail = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userCred) => {
            if (userCred) {
                
                // Log providerData
                   const userData=userCred.providerData[0];   
                   console.log(userData)
                //DB INTERACTION
                const unsubscribe=onSnapshot(
                    doc(db,"users",userData?.uid),
                    (_doc)=>{
                        if(_doc.exists()){
                            resolve(_doc.data());
                        }
                        else{
                            setDoc(doc(db,"users",userData?.uid),userData).then(()=>{
                                resolve(userData);
                            })
                        }
                    }
                )
return unsubscribe;
            
            } else {
                // no data
                reject(new Error('User is not authenticated'));
            }

            // Unsubscribe to prevent memory leak
            unsubscribe();
        });
    });
};
export const getTemplates=()=>{
    return new Promise((resolve,reject)=>{
        const templateQuery=query(
            collection(db,"templates"),
            orderBy("timestamp","asc")
        );

        const unsubscribe=onSnapshot(templateQuery,(querySnap)=>{
            const templates=querySnap.docs.map((doc)=>doc.data())
resolve(templates)
        });
    return  unsubscribe;
    })
}