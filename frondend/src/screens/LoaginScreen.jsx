import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify';
import { useLoginMutation } from '../utils/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const LoaginScreen = () => {
    const email = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login,{isLoading}] = useLoginMutation();
    const {userInfo} = useSelector((state)=>state.auth);
    useEffect(()=>{
      if(userInfo){
        navigate('/')
      }
    },[navigate,userInfo]);
    const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        const res = await login({email,password}).unwrap();
        dispatch(setCredentials({...res}));
        navigate('/');
      } catch (error) {
        toast.error(err?.data?.message || err.error);
      }
    }
  return (
    <div className='m-4 flex justify-center items-center h-96 '>
      <div className=' border border-slate-400 w-[50%]'>
        {isLoading }
        <h1 className='text-2xl flex justify-center p-4'>Sign In</h1>
        <form onSubmit={handleSubmit} className='p-4 flex flex-col'>
            <div>
            <label className='p-4' >Email</label>
            <input className='rounded block w-full border border-black  p-4 outline-0 font-[0.95em]' type='email' ref={email} />
            </div>
            <div className='my-4'>
            <label className='p-4'>Password</label>
            <input  type='password' className='border border-black w-full h-9 rounded text-gray-800 p-4 ' ref={password}/>
            </div >
            <button type='submit' className='mx-auto border rounded px-4 py-2 bg-green-600'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default LoaginScreen