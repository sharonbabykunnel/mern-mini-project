import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <div className='p-4 flex-row'>
        <h1 className='p-4 justify-center'>MERN Authentication</h1>
        <p className='m-4'>
          This is a boilerplate for MERN authentication that stores a JWT in an
          HTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap
          library
        </p>
        <div className='m-4 p-4'>
            <Link className='p-4' to={"/login"}>
                <button className='bg-green-600 border rounded-lg px-4 py-2' >Sign In</button>
            </Link>
            <Link to={"/register"}>
                <button className='bg-yellow-400 border rounded-lg px-4 py-2'>Register</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero