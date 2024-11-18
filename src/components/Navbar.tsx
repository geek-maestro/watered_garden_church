import React, { useState } from "react";

const Navbar = () => {
  const navs = ["home", "sermons", "ministries", "events", "news", "donations"];
  const [ active, setActive ] = useState('home')

  return (
    <header className="max-h-[200px] border-b border-b-secondary">
      <nav className="flex justify-between items-center px-20">
        <img src="/logo.jpg" alt="logo" className="h-[100px] w-[100px]" />
        <div className="flex items-center space-x-10">
          {navs.map((nav, index) => (
            <li className="list-none capitalize hover:text-secondary cursor-pointer" key={index}>{nav}</li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
