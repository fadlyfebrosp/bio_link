import React from 'react'
import { VscVerifiedFilled } from 'react-icons/vsc'

const Profile = () => {
  return (
    <div className="grid max-w-sm gap-2 mx-auto -mt-16 text-center opacity-0 animate-fadeIn">
      <section className="grid justify-center opacity-0 animate-fadeInLeft delay-100">
        <img 
        src={require('../assets/img/Fadly.jpeg')} 
        alt="Foto Profil" 
        className="rounded-full h-28 transition-transform duration-300 transform hover:scale-110" />
      </section>
      <section className="mx-auto align-middle opacity-0 animate-fadeInLeft delay-200">
        <p className="flex mt-4 text-xl font-bold text-slate-900 dark:text-white ">
          Fadly Febro S.P{' '}
          <span className="pl-2 text-2xl text-blue-700 transition-transform duration-300 transform hover:scale-110">
            <VscVerifiedFilled />
          </span>
        </p>
      </section>
      <section className="text-sm opacity-0 animate-fadeInRight delay-300">
        <p className="whitespace-nowrap overflow-hidden border-r-4 border-transparent animate-typing text-black">
          Based in 📌 Jakarta Utara, Indonesia
        </p>

        <p className="whitespace-nowrap overflow-hidden border-r-4 border-transparent animate-typing text-black animate-delay-1000">
          Interest in Front-End Web Developer.
        </p>
      </section>
    </div>
  )
}

export default Profile
