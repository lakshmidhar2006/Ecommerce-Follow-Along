import React, { useState } from 'react';
import { IoMailSharp, IoLockClosed } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
      <div className='box-border flex flex-col bg-slate-200 h-96 w-96 shadow-xl shadow-black-600 rounded-xl p-6'>
        <div>
          <h1 className='text-center text-2xl font-bold'>User Login</h1>
        </div>
        <div className='w-full'>
          <form className='w-full flex flex-col justify-center items-center mt-5' onSubmit={handleSubmit}>
           
            <div className='flex flex-col w-full mb-4'>
              <label className='px-2 mb-1'>Email</label>
              <div className='flex items-center border border-gray-300 rounded-lg p-2'>
                <IoMailSharp className='text-gray-500 mr-2' />
                <input type='email' required autoComplete='email' name='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
              </div>
            </div>

         
            <div className='flex flex-col w-full mb-4'>
              <label className='px-2 mb-1'>Password</label>
              <div className='flex items-center border border-gray-300 rounded-lg p-2'>
                <IoLockClosed className='text-gray-500 mr-2' />
                <input type='password' required autoComplete='password' name='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
              </div>
            </div>

           
            <button
              type='submit'
              className='w-full '
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;