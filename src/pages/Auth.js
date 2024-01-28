import { logDOM } from '@testing-library/react'
import React from 'react'
import Logo from '../assets/img/logo.jpg'
import { Footer } from '../containers'
import { AuthButton } from '../components'
import {FaGoogle, FaGithub} from 'react-icons/fa6'

const Auth = () => {
  return( 
  <div className='auth-section'>

   {/* top-part */}
   <img src={Logo} alt='logo' className='w-10 h-auto object-contain' />


   {/* main-part */}
   <div className='w-full flex flex-1 flex-col items-center justify-center gap-6'>
  <h1 className='text-3xl lg:text-4xl text-blue-700'>Welcome to Talentforge</h1>
  <p className='text-2xl text-gray-600'>Crafting Resumes, Building Futures</p>
  <h2 className='text-2xl text-gray-600'>Authenticate</h2>

  <div className=' flex flex-col w-full lg:w-96  items-center justify-start gap-6 rounded-md bg-red-100 p-2'>
<AuthButton Icon={FaGoogle} label={'SignIn with Google'} provider={'GoogleAuthProvider'}/>
<AuthButton Icon={FaGithub} label={'SignIn with Github'} provider={'GithubAuthProvider'}/>
  </div>
   </div>


   {/* footer */}
   <Footer/>

   </div>
   )
  
}

export default Auth