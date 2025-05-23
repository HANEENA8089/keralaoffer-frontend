import React, { useState } from 'react';
import { FaLink } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const initialOffers = [
  {
    id: 1,
    image: "Images/offer1.png",
    category: "Fashion",
    title: "CMR OFFER",
    liked: true,
    discountText: "25% OFF Premium Spa Hair"
  },
  {
    id: 2,
    image: "Images/offer2.png",
    category: "Home",
    title: "50% OFFER",
    liked: true,
    discountText: "50% OFF Home Decor items"
  },
  {
    id: 3,
    image: "Images/offer3.png",
    category: "Women",
    title: "SARI COLECTION",
    liked: true,
    discountText: "20% OFF on Sari Collections"
  },
  {
    id: 4,
    image: "Images/offer4.png",
    category: "Women",
    title: "HOLI OFFER",
    liked: false,
    discountText: "30% OFF on Holi Special"
  },
  {
    id: 5,
    image: "Images/offer1.png",
    category: "Men",
    title: "SUMMER DEAL",
    liked: false,
    discountText: "15% OFF Summer Apparel"
  },
  {
    id: 6,
    image: "Images/offer2.png",
    category: "Kids",
    title: "TRENDY OFFER",
    liked: true,
    discountText: "10% OFF Trendy Kidswear"
  },
  {
    id: 7,
    image: "Images/offer1.png",
    category: "Men",
    title: "SUMMER DEAL",
    liked: false,
    discountText: "15% OFF Summer Apparel"
  },
  {
    id: 8,
    image: "Images/offer2.png",
    category: "Kids",
    title: "TRENDY OFFER",
    liked: true,
    discountText: "10% OFF Trendy Kidswear"
  },
];

function OfferSection() {
  const [offers, setOffers] = useState(initialOffers);
  const navigate = useNavigate();

  const copyLink = (id) => {
    const url = `${window.location.origin}/offer/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy link", err);
    });
  };

  return (
    <div className="px-6 py-8 bg-[#F4F4F5]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#231F20]" style={{ fontFamily: 'Inter' }}>
          Offers Now!
        </h2>
        <button
          onClick={() => navigate('/offer')}
          className="text-[14px] sm:text-[16px] font-semibold text-[#EE5F73]"
          style={{ fontFamily: 'Inter', textAlign: 'right' }}
        >
          See More
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pb-10">
  {offers.map((offer) => (
    <div key={offer.id} className="bg-white rounded-[12px] shadow-md overflow-hidden relative p-1 w-full sm:w-[calc(90%+1rem)] md:w-full">
      <Link to="/offer">
        <img
          src={offer.image}
          alt={offer.title}
          className="rounded-[8px] object-cover w-full h-[160px] sm:h-[180px] md:h-[200px]"
        />
      </Link>

      {/* Copy Link Icon */}
      <button
        onClick={() => copyLink(offer.id)}
        className="absolute top-3 right-3 focus:outline-none"
      >
        <FaLink className="text-white bg-gray-700 text-white rounded-full opacity-50 hover:opacity-100 rounded-full p-1 w-5 h-5" />
      </button>

      <div className="pt-3">
        <p className="text-[13px] md:text-[14px] text-[#595959] font-normal" style={{ fontFamily: 'Inter' }}>
          {offer.category}
        </p>
        <p className="font-semibold capitalize text-[#292929] text-[14px]" style={{ fontFamily: 'Inter' }}>
          {offer.title}
        </p>

        {/* Discount Button with dynamic text */}
        <button
          className="mt-3 px-6 py-2 text-white bg-violet-600 w-full rounded-[13px] text-[10px] sm:text-[10px] md:text-[10px] font-medium sm:font-normal shadow-md hover:bg-[#d34a5a] focus:outline-none"
          style={{ fontFamily: 'Inter' }}
        >
          {offer.discountText}
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default OfferSection;
