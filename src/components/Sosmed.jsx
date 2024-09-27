import React from 'react'
import { FaGithub } from 'react-icons/fa';  // Menggunakan hanya icon yang diperlukan
import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'; // Menggunakan hanya icon yang diperlukan

const Sosmed = ({ darkTheme }) => {
  return (
    <div className='flex justify-center items-center text-4xl gap-4 max-w-sm mx-auto text-slate-500 dark:text-slate-400'>
      <a 
        target='_blank' 
        rel="noopener noreferrer"  // Tambahkan rel="noopener noreferrer" untuk keamanan
        href="https://www.instagram.com/fdly.fbro_/" 
        className={`hover:scale-105 active:scale-95 transition ${darkTheme ? 'hover:text-slate-200 active:text-white' : 'hover:text-slate-600 active:text-slate-900'}`}
      > 
        <AiOutlineInstagram /> 
      </a>
      <a 
        target='_blank' 
        rel="noopener noreferrer"  // Tambahkan rel="noopener noreferrer" untuk keamanan
        href="https://www.linkedin.com/in/fadly-febro-519273204/" 
        className={`hover:scale-105 active:scale-95 transition ${darkTheme ? 'hover:text-slate-200 active:text-white' : 'hover:text-slate-600 active:text-slate-900'}`}
      > 
        <AiOutlineLinkedin /> 
      </a>
      <a 
        target='_blank' 
        rel="noopener noreferrer"  // Tambahkan rel="noopener noreferrer" untuk keamanan
        href="https://github.com/fadlyfebros" 
        className={`hover:scale-105 active:scale-95 transition ${darkTheme ? 'hover:text-slate-200 active:text-white' : 'hover:text-slate-600 active:text-slate-900'}`}
      > 
        <FaGithub /> 
      </a>
    </div>
  )
}

export default Sosmed