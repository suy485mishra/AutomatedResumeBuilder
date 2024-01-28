import React from 'react'
import {FaChevronRight} from 'react-icons/fa6'

//importing different auths
import {GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'


const AuthButton = ({Icon, label,provider}) => {

  const googleAuthProvider=new GoogleAuthProvider();
  const githAuthProvider=new GithubAuthProvider();

const handleClick=async()=>{
 
  switch(provider){
    case "GoogleAuthProvider":
      console.log('Inside Google');
      break;
  

    case "GithubAuthProvider":
      console.log('Inside Github');
      break;
  
  default:
    console.log('Inside gooogle auth');
    break;
}
}

  return (
        <div onClick={handleClick} 
        className=' w-full px-2 py-3 rounded-md border-2 border-blue-700 
        flex items-center justify-between cursor-pointer group hover:bg-blue-800 
        active:scale-75 duration-150 hover: shadow-md'>

        <Icon className='text-txtPrimary text-xl group-hover:text-white  '/>

<p className='text-txtPrimary text-xl group-hover:text-white  '>{label}</p>

<FaChevronRight className='text-txtPrimary text-lg group-hover:text-white'/>
  
  
    </div>
  )
}

export default AuthButton