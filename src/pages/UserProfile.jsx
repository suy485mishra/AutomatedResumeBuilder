import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "../config/firebase.config";
import { Fade } from 'react-awesome-reveal'; // Importing Fade animation

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className="bg-blue-200 h-full p-4 rounded-md">
      <div className="p-4 rounded-md border border-blue-500 bg-white text-blue-800">
        {currentUser && (
          <Fade direction="up" triggerOnce>
            <div>
              <p className="text-center font-bold text-3xl">User Details</p>
              <br/>
              <br/>
              <br/>
              <br/>
              <img
                src={currentUser.photoURL}
                alt="avatar"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-center font-semibold">{currentUser.displayName}</p>
              <p className="text-center text-gray-500">{currentUser.email}</p>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
