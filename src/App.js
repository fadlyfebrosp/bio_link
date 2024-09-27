import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import Sosmed from './components/Sosmed';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsSticky(windowHeight < 580 && documentHeight > windowHeight);
    };

    handleResize(); // Set initial values
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`${darkTheme ? 'dark' : ''} flex flex-col min-h-screen`}>
      <div className={`flex-grow ${darkTheme ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-500'} font-poppins`}>
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Profile />
        <Sosmed darkTheme={darkTheme} />
        <Button darkTheme={darkTheme} />
      </div>
      <Footer isSticky={isSticky} />
    </div>
  );
};

export default App;
