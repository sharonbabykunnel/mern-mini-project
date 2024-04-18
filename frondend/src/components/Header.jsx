import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const {userInfo} = useSelector((store)=>store.auth);
  return (
    <div className='bg-black h-28 flex items-center text-white justify-between'>
      <p className=' mx-10 '>MERN Stack Mini Project</p>
      {userInfo ? (
        <>
         <div className="relative inline-block text-left">
  <button className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="username" aria-haspopup="true" aria-expanded="true">
    {userInfo.name}
    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5zm-1 1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5z" clipRule="evenodd" />
    </svg>
  </button>

  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="username">
    <div className="py-1" role="none">
      <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Profile</a>
      <button onClick={logoutHandler} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</button>
    </div>
  </div>
</div>

        </>
      ):(
        <>
         <button className='mx-10'>Sign In</button>
        </>
      )}
    </div>
  )
}

export default Header