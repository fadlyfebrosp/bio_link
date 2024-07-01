import React from 'react';

const Footer = ({ isSticky }) => {
  return (
    <footer className={`bg-white-200 py-4 text-center text-slate-500 dark:bg-slate-800 dark:text-slate-400 ${isSticky ? 'absolute bottom-0 left-0 w-full' : 'relative'}`}>
      <p>Copyright © 2023 Created by Fadly Febro</p>
    </footer>
  );
};

export default Footer;