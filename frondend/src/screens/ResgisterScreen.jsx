import React,{ useEffect, useState }  from 'react'
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { useRegisterMutation } from '../utils/userApiSlice';
import {useDispatch, useSelector} from 'react-redux';
import { setCredentials } from '../utils/userSlice';

const ResgisterScreen = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [register,{isLoadin}] = useRegisterMutation();
    const {userInfo} = useSelector((store)=>store.auth);

    useEffect(()=>{
      if(userInfo){
        navigate('/');
      }
    },[navigate,userInfo]);
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
            <button className='mx-auto border rounded px-4 py-2 bg-green-600'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default ResgisterScreen