import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-black' : 'bg-blue-900'} w-screen h-screen flex justify-center items-center`}>
      <form className={`flex flex-col rounded-lg shadow-md ${darkMode ? 'bg-blue-900' : 'bg-gray-100'} p-4 justify-center`}>
        <h2 className={`${darkMode ? 'text-white' : 'text-black'} font-bold text-center mb-4`}>Welcome To Your Dash Mr/Mrs Admin...</h2>
        <label className="relative flex flex-col">
          <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>Email</span>
          <input type="text" value="" placeholder="Email Needed..." className="border-gray-100 focus:border-green-500 outline-none bg-transparent text-white focus:ring-0" />
        </label>
        <label className="relative flex flex-col mt-4">
          <span className={`${darkMode ? 'text-white' : 'text-black'} font-medium mb-2`}>Password</span>
          <input type="password" value="" placeholder="8 characters" className="border-gray-100 focus:border-green-500 outline-none bg-transparent text-white focus:ring-0" />
        </label>
        <h2 className={`${darkMode ? 'text-white' : 'text-black'} font-bold mb-2 items-center text-center`}>OR</h2>
        <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-light mb-2 items-center text-center`}>Login with:</h4>
        <button className={` hover:bg-black hover:text-white flex items-center gap-2 justify-center ${darkMode ? 'text-white' : 'text-black', 'bg-gray-300'}`}>
          <FcGoogle size={20} /> Google
        </button>
      </form>
      <button
        className={`absolute bottom-4 right-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
