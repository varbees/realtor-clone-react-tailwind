import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchesRoute(Route: string) {
    if (Route === location.pathname) {
      return true;
    }
  }

  return (
    <div className='bg-white border-b shadow-sm top-0 z-54'>
      <header className='flex items-center justify-between px-3 max-w-6xl mx-auto'>
        <div className='flex justify-start'>
          <img
            src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
            alt='logo'
            className='h-6 cursor-pointer'
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className='flex space-x-9'>
            <li
              className={`cursor-pointer py-3 font-semibold text-sm text-gray-400 border-b-4 border-b-transparent ${
                pathMatchesRoute('/') && 'text-black border-b--red-500'
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 font-semibold text-sm text-gray-400 border-b-4 border-b-transparent ${
                pathMatchesRoute('/offers') && 'text-black border-b--red-500'
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 font-semibold text-sm text-gray-400 border-b-4 border-b-transparent ${
                pathMatchesRoute('/sign-in') && 'text-black border-b--red-500'
              }`}
              onClick={() => navigate('/sign-in')}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
