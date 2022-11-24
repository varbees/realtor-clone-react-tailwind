import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import OAuth from '../components/Oauth';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const { email, password } = formData;

  function onFormDataChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setFormData(prevState => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:md-6'>
          <img
            src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2V5c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
            alt='key'
            className='w-full rounded-2xl'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
              type='email'
              id='email'
              value={email}
              onChange={onFormDataChange}
              placeholder='Email Address'
            />
            <div className='relative mt-4 mb-6'>
              <input
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={onFormDataChange}
                placeholder='Password'
              />
              {showPassword ? (
                <FaEyeSlash
                  className='absolute right-3 top-4 cursor-pointer'
                  onClick={() => {
                    setShowPassword(prevState => !prevState);
                  }}
                />
              ) : (
                <FaEye
                  className='absolute right-3 top-4 cursor-pointer'
                  onClick={() => {
                    setShowPassword(prevState => !prevState);
                  }}
                />
              )}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>
                Don't have an account?
                <Link
                  to='/sign-up'
                  className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1'
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to='/forgot-password'
                  className='text-blue-800 hover:text-blue-700 transition duration-200 ease-in-out ml-1'
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-7 py-3 font-medium uppercase rounded text-sm shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
            >
              Sign In
            </button>
            <div className='flex my-4  items-center  before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
