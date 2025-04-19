import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link } from 'react-router-dom';
import SearchFilters from './SearchFilters';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Top Header with Border Box */}
      <div className="w-full mt-4 px-2 sm:px-4 md:px-6">
        <div className="border border-gray-300 rounded-xl shadow-sm bg-white flex justify-between items-center px-3 sm:px-6 py-2 relative">
          {/* Logo in bordered box */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1 bg-gray-50">
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

          {/* Mobile Search Input - visible only on mobile screens */}
          <div className="block sm:hidden flex-1 px-2">
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-full h-[42px]">
              <Search className="min-w-[17px] min-h-[17px] text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent outline-none text-sm text-gray-600 w-full ml-2"
              />
            </div>
          </div>

          {/* Desktop Navigation (aligned to the right but a little to the left) */}
          <div className="hidden uppercase lg:flex gap-4 font-base font-mluvka sm:gap-4 md:gap-8 lg:gap-10 xl:gap-12 flex-1 justify-end pr-19">
            <Link
              to="/"
              className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#6600FF] hover:border-b-2 hover:border-[#6600FF] pb-2 transition-all"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#6600FF] hover:border-b-2 hover:border-[#6600FF] pb-2 transition-all"
            >
              About Us
            </Link>
            <Link
              to="/offer"
              className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#6600FF] hover:border-b-2 hover:border-[#6600FF] pb-2 transition-all"
            >
              Offers
            </Link>
            <Link
              to="/contactus"
              className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#6600FF] mr-1 sm:mr-2 hover:border-b-2 hover:border-[#6600FF] pb-2 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Icon (bordered) */}
          {!menuOpen && (
            <button
              className="text-black lg:hidden border border-gray-300 rounded-md p-1 bg-gray-50"
              onClick={toggleMenu}
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
          />
          <div className="lg:hidden fixed top-0 right-0 h-full w-[250px] bg-white shadow-md z-20">
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
            <div className="flex flex-col font-base font-mluvka items-start gap-4 p-4">
              <Link to="/home" className="text-sm text-[#6600FF]">Home</Link>
              <Link to="/aboutus" className="text-sm text-[#6600FF]">About Us</Link>
              <Link to="/offer" className="text-sm text-[#6600FF]">Offers</Link>
              <Link to="/contactus" className="text-sm text-[#6600FF]">Contact Us</Link>
            </div>
          </div>
        </>
      )}

      {/* Conditionally render SearchFilters based on menu state */}
      {!menuOpen && <SearchFilters />}
    </>
  );
};

export default Header;
