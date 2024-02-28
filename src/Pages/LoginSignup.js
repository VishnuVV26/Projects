import React from 'react'

const LoginSignup = () => {
  return (
    <div class='bg-pink-300 w-full h-[90vh] py-20 '>
      <div class=' bg-white m-auto w-2/5 h-full py-10 px-40 rounded-2xl border-2 border-slate-500 shadow-2xl shadow-black'>
        <h1 class='my-[20px] mx-0 text-xl font-sans font-semibold' >Sign Up</h1>
        <div class='flex flex-col gap-4 mt-8'>
          <input type='text' placeholder='Your Name' class='h-[60px] pl-2 w-[400px]  border-[1px] border-black'/>
          <input type='email' placeholder='Your Email Id' class='h-[60px] pl-2 w-[400px] border-[1px] border-black'/>
          <input type='password' placeholder='Password'class='h-[60px] pl-2 w-[400px] border-[1px] border-black'/>
        </div>
        <button class='bg-red-500 text-white mt-[10px] w-[400px] items-center h-[50px] cursor-pointer'>Continue</button>
        <p className='my-2'>
          Already have an account? <span className='text-red-700 cursor-pointer font-semibold'>Login here</span>
        </p>
        <div>
          <input type='checkbox' name='' id=''className='cursor-pointer'/> 
          <p className='flex items-center text-slate-800 font-medium gap-4 mt-2'>By clicking, I agree to the terms of use & privacy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup