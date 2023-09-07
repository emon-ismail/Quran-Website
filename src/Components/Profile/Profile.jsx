import React, { useContext } from 'react'


// import avatarImg from '../assets/avatar.jpeg'
import { AuthContext } from '../../Providers/AuthProvider'

import { Link, useNavigate } from 'react-router-dom'
import profile from "../../assets/icon/profile1.png";


// import profile from "../../../../../../src/assets/icon/profile.png";


const Profile = () => {
  const { user,logOut} = useContext(AuthContext)
//   const { user } = useContext
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";
                                
const handleLogOut = () => {
    logOut()
        .then(() => {})
        .catch(error => console.log(error));
        navigate(from, { replace: true });
};                     

  return (
    <div className='flex justify-center mt-28 profile-body'>
      <div className='md:w-[600px] w-[400px] p-8 sm:flex sm:space-x-6 bg-gray-100 text-gray-900 mb-8'>
        <div className='flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-wrap gap-x-2 gap-y-2'>
              <div className='relative flex-shrink-0'>
                <span className='absolute bottom-1 right-1 w-4 h-4 bg-green-600 border rounded-full text-gray-100 border-gray-900'></span>
                
                
                <img 
  src={user?.photoURL ? user.photoURL : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."}
  alt="Profile"
  className='w-20 h-20 border md:w-28 md:h-28 rounded-full bg-gray-500 border-gray-700 image'

  onError={(e) => {
    e.target.onerror = null;
e.target.src = profile;
  }}
/>


{/* <img className=' w-20 h-20 border md:w-28 md:h-28 rounded-full bg-gray-500 border-gray-700 image'

src={user?.photoURL ? user.photoURL : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."}  
alt='No Image'
  
/> */}




              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-4'>
          <div>
            <h2 className='text-2xl font-semibold'>
              {user?.displayName ? user.displayName : 'Name Not Available'}
            </h2>
          </div>
          <div className='space-y-1'>
            <span className='flex items-center space-x-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                aria-label='Email address'
                className='w-4 h-4'
              >
                <path
                  fill='currentColor'
                  d='M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z'
                ></path>
              </svg>
              <span className='text-gray-700 text-xs md:text-base'>{user?.email}</span>
            </span>
            <span className='flex items-center space-x-2 w-full'>
              {/* <span className='text-gray-400 text-small'>
                Email Status:{' '}
                {user?.emailVerified ? (
                  <span className='text-green-400'>Verified</span>
                ) : (
                  <span className='text-red-400'>Not Verified</span>
                )}
              </span> */}
            </span>
            <span className='flex items-center space-x-2 w-full'>
              <span className='text-gray-400 text-xs'>
                {' '}
                ID: {user?.uid}
              </span>
            </span>

            <div className="">
                            {user ? (
                                <div className="flex items-center justify-end mb-4">
                                 
                               
                                   <div className='mx-auto mt-8'>
                                   <button className="btn hover:bg-red-600 bg-green-500 text-white  " onClick={handleLogOut}>
        LogOut
      </button>
                                   </div>

                                    
                                </div>
                            ) : (
                                <Link to="/login" >
                                    Login
                                </Link>

                                
                            )}
                           
                        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile