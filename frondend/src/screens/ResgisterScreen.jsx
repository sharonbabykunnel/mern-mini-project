import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { useRegisterMutation } from '../utils/userApiSlice';
import {useDispatch} from 'react-redux';

const ResgisterScreen = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [register,{isLoadin}] = useRegisterMutation();
    const submitHandler = async (e)=>{
      e.preventDefault();
      if(password !== confirmPassword){
        toast.error('Password Mismatch')
      }else{
        try {
          const res = await register({name,email,password}).unwrap();
          dispatch(setCredentials({...res}));
          navigate('/');
        } catch (error) {
          toast.error(err?.data?.message || err.error)
        }
      }
    }
  return (
    <div className='m-4 flex justify-center items-center h-96 '>
      <div className=' border border-slate-400 w-[50%]'>
        <h1 className='text-2xl flex justify-center p-4'>Register</h1>
        <form onSubmit={submitHandler} className='p-4 flex flex-col'>
            <div >
            <label className='p-4'>Name</label>
            <input className='border border-black w-full rounded text-gray-800 p-4 ' type='string' ref={name}/>
            </div>
            <div>
            <label className='p-4' >Email</label>
            <input className='rounded block w-full border border-black  p-4 outline-0 font-[0.95em]' type='email' ref={email} />
            </div>
            <div className='my-4'>
            <label className='p-4'>Password</label>
            <input  type='password' className='border border-black w-full h-9 rounded text-gray-800 p-4 ' ref={password}/>
            </div >
            <div className='my-4'>
            <label className='p-4'>ConfirmPassword</label>
            <input  type='password' className='border border-black w-full h-9 rounded text-gray-800 p-4 ' ref={confirmPassword}/>
            </div >
            <button className='mx-auto border rounded px-4 py-2 bg-green-600'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default ResgisterScreen