import React from 'react'

const Button = ({darkTheme}) => {
  return (
    <div className='max-w-sm mx-auto grid justify-center gap-4 my-5 font-bold'>
      <a href="https://portofolioku-mauve.vercel.app/" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        Website CV
      </a>
      <a href="https://fadly-febro-official-web.vercel.app/" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        Portfolio
      </a>
      <a href="https://fadly-store.vercel.app/" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        Top Up Game 
      </a>
      <a href="https://monanime-webanime.vercel.app/" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        monanime | web anime
      </a>
      <a href="https://to-do-list-eight-rho-73.vercel.app/" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        to do list
      </a>
      <a href="https://cek-khodam-nu-lovat.vercel.app/" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        Check Khodam
      </a>
    </div>
  )
}

export default Button