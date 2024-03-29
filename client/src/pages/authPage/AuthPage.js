import { useState } from 'react';
import '../../App.css';
import LoginForm from '../../components/loginForm/LoginForm';
import SignUpForm from '../../components/signUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className='w-screen h-screen overflow-hidden bg-cyan-500'>
      <div className='flex flex-col items-center'>
        <h1 className='text-white font-dosis text-8xl mt-20'>Welcome to Apply!</h1>
      </div>
      <div className='flex justify-center bg-cyan-500 w-screen h-10 mt-5 mb-5'>
        <h3
        className='text-indigo-600 font-dosis text-5xl cursor-pointer' 
        onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Not yet a member? Click here to sign up!' : 'Already a member? Welcome back, click here to login!'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}