import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate=useNavigate();

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-black/20 backdrop-blur-md border-b border-white/10">
      
      <Link to="/" className="max-md:flex-1" onClick={handleNavClick}>
      {console.log('Logo src:', assets.logo.svg)}
        <img src={assets.logo.svg} alt="Logo" className="w-36 h-auto" />
      </Link>

      <div className={`
        max-md:fixed max-md:top-0 max-md:left-0 max-md:h-screen max-md:bg-black/95 max-md:flex-col max-md:justify-center
        flex items-center gap-8 transition-all duration-300 overflow-hidden z-50
        ${isOpen ? "max-md:w-full opacity-100" : "max-md:w-0 max-md:opacity-0"}
        md:flex-row md:static md:h-auto md:bg-transparent md:opacity-100
      `}>
        
        <XIcon 
          className="md:hidden absolute top-6 right-6 w-8 h-8 cursor-pointer text-white" 
          onClick={() => setIsOpen(false)} 
        />
        
        <Link className="hover:text-primary transition" onClick={handleNavClick} to="/">Home</Link>
        <Link className="hover:text-primary transition" onClick={handleNavClick} to="/movies">Movies</Link>
        <Link className="hover:text-primary transition" onClick={handleNavClick} to="/">Theaters</Link>
        <Link className="hover:text-primary transition" onClick={handleNavClick} to="/">Release</Link>
        <Link className="hover:text-primary transition" onClick={handleNavClick} to="/favorite">Favorites</Link>
      </div>

      <div className="flex items-center gap-5 md:gap-8">
        <SearchIcon className="w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:text-primary transition" />
        
        {!user ? (
          <button 
            onClick={() => openSignIn()} 
            className="px-5 py-2 md:px-8 md:py-2.5 bg-primary hover:bg-red-700 text-white transition rounded-full font-semibold"
          >
            Login
          </button>
        ) : (
          <div className="scale-110">
            <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="My Bookings" labelIcon=
              {<TicketPlus width={15} />} onClick={()=> navigate('/ my-bookings')} />
            </UserButton.MenuItems>
            </UserButton>
          </div>
        )}

        <MenuIcon 
          className="md:hidden w-8 h-8 cursor-pointer text-white" 
          onClick={() => setIsOpen(true)} 
        />
      </div>

    </nav>
  );
};

export default Navbar;