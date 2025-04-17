import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-w-full mt-4 flex justify-center items-center justify-between relative">
      {/* Logo and Text */}
{/* Logo and Text */}
<div className="flex items-center gap-2 lg:ml-6 xl:ml-8">
  <img
    src="Images/ko-icon.png"
    alt="Kerala Offer Logo"
    className="min-w-[98px] min-h-[27px] object-contain 
               sm:min-w-[110px] sm:min-h-[32px] 
               md:min-w-[120px] md:min-h-[36px] 
               lg:min-w-[140px] lg:min-h-[40px] 
               xl:min-w-[160px] xl:min-h-[45px]"
  />
</div>



      {/* Search Box */}
      <div className="flex items-center bg-gray-100 rounded-md flex-grow max-w-[800px] sm:max-w-[900px] mx-2">
        <Search className="max-w-full min-w-[17px] min-h-[17px] ml-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm text-gray-600 w-full py-1 px-2"
        />
      </div>

      {/* Menu Icon (Mobile) - hidden when sidebar is open */}
      {!menuOpen && (
        <button className="text-black lg:hidden" onClick={toggleMenu}>
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar Menu (Mobile) */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          {/* Right Sidebar */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-[250px] bg-white shadow-md z-20 transform translate-x-0 transition-transform duration-300">
            <div className="flex justify-between items-center p-4 border-b">
              <img
                src="Images/ko-icon.png"
                alt="Kerala Offer Logo"
                className="min-w-[98px] min-h-[27px] object-contain"
              />
              <button className="text-black" onClick={toggleMenu}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-4 p-4">

<div className="flex flex-col font-base font-mluvka items-start gap-4 p-4">
  <Link to="/home" className="text-sm text-[#6600FF]">Home</Link>
  <Link to="/aboutus" className="text-sm text-[#6600FF]">About Us</Link>
  <Link to="/offer" className="text-sm text-[#6600FF]">Offers</Link>
  <Link to="/contactus" className="text-sm text-[#6600FF]">Contact Us</Link>
</div>

            </div>
          </div>
        </>
      )}

      {/* Desktop Menu (visible on large screens) - adjusted spacing */}
      <div className="hidden lg:flex gap-2  font-base font-mluvka  sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 ml-2 sm:ml-4 mr-2 sm:mr-6">
  <Link to="/" className="text-xs sm:text-sm md:text-base lg:text-lg text-[#6600FF]">Home</Link>
  <Link to="/aboutus" className="text-xs sm:text-sm md:text-base lg:text-lg text-[#6600FF]">About Us</Link>
  <Link to="/offer" className="text-xs sm:text-sm md:text-base lg:text-lg text-[#6600FF]">Offers</Link>
  <Link to="/contactus" className="text-xs sm:text-sm md:text-base lg:text-lg text-[#6600FF] mr-1 sm:mr-2">Contact Us</Link>
</div>

    </div>
  );
};

export default Header;
