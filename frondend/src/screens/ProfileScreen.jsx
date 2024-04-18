import React, { useEffect, useState  } from 'react'
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { useUpdateUserMutation } from '../utils/userApiSlice';
import {useDispatch, useSelector} from 'react-redux';
import { setCredentials } from '../utils/userSlice';

const ProfileScreen = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const dispatch = useDispatch();
    const {userInfo} = useSelector((store)=> store.auth);
    const [register,{isLoadin}] = useUpdateUserMutation();

    useEffect(()=>{
      setName(userInfo.name);
      setEmail(userInfo.email);
    },[userInfo.serName,userInfo.setEmail])
    const submitHandler = async (e)=>{
      e.preventDefault();
      if(password !== confirmPassword){
        toast.error('Password Mismatch')
      }else{
        try {
          const res = await register({name,email,password}).unwrap();
          dispatch(setCredentials({...res}));
          toast.success('Profile Updated');
        } catch (error) {
          toast.error(err?.data?.message || err.error)
        }
      }
    }
  return (
    <div className='m-4 flex justify-center items-center h-96 '>
      {isLoadin}
      <div className=' border border-slate-400 w-[50%]'>
        <h1 className='text-2xl flex justify-center p-4'>Update Profile</h1>
        <form onSubmit={submitHandler} className='p-4 flex flex-col'>
            <div >
            <label className='p-4'>Name</label>
            <input className='border border-black w-full rounded text-gray-800 p-4 ' type='string' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <label className='p-4' >Email</label>
            <input className='rounded block w-full border border-black  p-4 outline-0 font-[0.95em]' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='my-4'>
            <label className='p-4'>Password</label>
            <input  type='password' className='border border-black w-full h-9 rounded text-gray-800 p-4 ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div >
            <div className='my-4'>
            <label className='p-4'>ConfirmPassword</label>
            <input  type='password' className='border border-black w-full h-9 rounded text-gray-800 p-4 ' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div >
            <button className='mx-auto border rounded px-4 py-2 bg-green-600' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default ProfileScreen