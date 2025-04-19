import { ShoppingBag } from 'lucide-react';
import React from 'react';
import { FaHome, FaShareAlt } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: 'Check this out!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Sharing failed', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const navItems = [
    { icon: <FaHome size={24} />, path: '/', key: 'home', type: 'nav' },
    { icon: <FaShareAlt size={24} />, key: 'share', type: 'share' },
    { icon: <ShoppingBag size={24} />, path: '/offer?section=more', key: 'offers', type: 'nav' }
];

  return (
    <>
      {/* Mobile Navbar (hidden on desktop) */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50 flex justify-around items-center py-3 px-6 md:hidden">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const isShare = item.type === 'share';

          return (
            <div
              key={index}
              onClick={() => isShare ? handleShare() : navigate(item.path)}
              className={`flex flex-col items-center cursor-pointer ${isActive ? 'text-black' : 'text-[#6600FF]'}`}
            >
              {item.icon}
              {!isShare && isActive && <div className="w-4 h-1 bg-black rounded-full mt-1" />}
            </div>
          );
        })}
      </div>

      {/* Desktop Footer (hidden on mobile) */}
      <div className="hidden md:flex justify-center items-center w-full py-4 bg-gray-100 text-gray-600 text-sm ">
        © {new Date().getFullYear()}  Kerala Offer. All rights reserved.
      </div>
    </>
  );
}

export default Navbar;
