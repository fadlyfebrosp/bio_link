import React from 'react';

const Button = ({ darkTheme }) => {
  // Data tautan dan teks tombol
  const links = [
    { href: "https://www.fadlyfebro.my.id/", text: "Website CV" },
    { href: "https://fadly-febro-official-web.vercel.app/", text: "Portfolio" },
    { href: "https://fadly-store.vercel.app/", text: "Top Up Game" },
    { href: "https://pustakanusa.my.id/", text: "Pustaka Nusa" },
    { href: "https://monanime-webanime.vercel.app/", text: "Monanime | Web Anime" },
    { href: "https://to-do-list-eight-rho-73.vercel.app/", text: "To Do List" },
    { href: "https://cek-khodam-nu-lovat.vercel.app/", text: "Check Khodam" },
  ];

  return (
    <div className="max-w-sm mx-auto grid justify-center gap-4 my-5 font-bold">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${
            darkTheme
              ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900'
              : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'
          } ${index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'}`}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Button;
