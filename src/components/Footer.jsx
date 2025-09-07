import React, { useContext, useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Visiblity } from "../context/contextToggle";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className=" w-screen    h-auto   z-30 bg-white  flex  flex-col items-center lg:justify-between lg:m-0 m-2  gap-3 lg:px-[1.70rem] px-4">
        <div className="w-full     max-w-[1280px] gap-3  flex flex-col items-center  justify-evenly h-auto ">
          {/* top div menu links dev */}
          <div className="w-full h-96  flex">
            {/* left side */}
            <div className="w-2/6 h-full flex-col  flex">
              <h1 className="text-xl font-semibold">Useful links</h1>
              {/* left part 1 */}
              <div className="w-full h-full flex">
                <div className="w-1/3 h-full ">
                  <ul className="text-base text-start mt-6 text-[#666666] space-y-1">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Careers</li>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">Press</li>
                    <li className="cursor-pointer">Lead</li>
                    <li className="cursor-pointer">Value</li>
                  </ul>
                </div>
                {/* left part 2 */}
                <div className="w-1/3 h-full ">
                  <ul className="text-base text-start mt-6 text-[#666666] space-y-1">
                    <li className="cursor-pointer">Privacy</li>
                    <li className="cursor-pointer">Terms</li>
                    <li className="cursor-pointer">FAQs</li>
                    <li className="cursor-pointer">Secutity</li>
                    <li className="cursor-pointer ">Mobile</li>
                    <li className="cursor-pointer">Contacts</li>
                  </ul>
                </div>
                {/* left part 3 */}
                <div className="w-1/3 h-full ">
                  <ul className="text-base text-start mt-6  text-[#666666] space-y-1 ">
                    <li className="cursor-pointer">Partner</li>
                    <li className="cursor-pointer">Franchise</li>
                    <li className="cursor-pointer">Seller</li>
                    <li className="cursor-pointer">Warehouse</li>
                    <li className="cursor-pointer">Deliver</li>
                    <li className="cursor-pointer">Resources</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="w-4/6 h-full   flex flex-col">
              <h1 className="text-xl font-semibold">
                Categories
                <span className="ml-3 text-lg text-[#0c831f]"> sell all</span>
              </h1>

              <div className="w-full h-full flex">
                {/* right part 1 */}
                <div className="w-1/3 h-full ">
                  <ul className="text-base text-start mt-8 text-[#666666] space-y-1">
                    <li class="cursor-pointer">Vegetables & Fruits</li>
                    <li class="cursor-pointer">Cold Drinks & Juices</li>
                    <li class="cursor-pointer">Bakery & Biscuits</li>
                    <li class="cursor-pointer">Dry Fruits, Masala & Oil</li>
                    <li class="cursor-pointer">Paan Corner</li>
                    <li class="cursor-pointer">Pharma & Wellness</li>
                    <li class="cursor-pointer">Personal Care</li>
                    <li class="cursor-pointer">Beauty & Cosmetics</li>
                    <li class="cursor-pointer">Print Store</li>
                  </ul>
                </div>
                {/* right part 2 */}
                <div className="w-1/3 h-full ">
                  <ul className="text-base text-start mt-8 text-[#666666] space-y-1">
                    <li class="cursor-pointer">Dairy & Breakfast</li>
                    <li class="cursor-pointer">Instant & Frozen Food</li>
                    <li class="cursor-pointer">Sweet Tooth</li>
                    <li class="cursor-pointer">Sauces & Spreads</li>
                    <li class="cursor-pointer">Organic & Premium</li>
                    <li class="cursor-pointer">Cleaning Essentials</li>
                    <li class="cursor-pointer">Ice Creams & Frozen Desserts</li>
                    <li class="cursor-pointer">Books</li>
                    <li class="cursor-pointer">Navratri Specials</li>
                  </ul>
                </div>
                {/* right part 3 */}
                <div className="w-1/3 h-full ">
                  <ul className="text-base text-start mt-8 text-[#666666] space-y-1">
                    <li class="cursor-pointer">Munchies</li>
                    <li class="cursor-pointer">Tea, Coffee & Health Drinks</li>
                    <li class="cursor-pointer">Atta, Rice & Dal</li>
                    <li class="cursor-pointer">Chicken, Meat & Fish</li>
                    <li class="cursor-pointer">Baby Care</li>
                    <li class="cursor-pointer">Home & Office</li>
                    <li class="cursor-pointer">Pet Care</li>
                    <li class="cursor-pointer">Toys & Games</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* bottom div copywrite and links  */}
          <div className="w-full h-28 ">
            {/* bottom part 1 */}
            <div className="w-full h-1/2 flex bg-[#fcfcfc] ">
              <div className="w-1/3 h-full  items-center justify-end  flex ">
                <p className="text-xs text-[#666666]">
                  {" "}
                  &copy;Blink Commerce Private Limited, 2016-2024
                </p>
              </div>
              <div className="w-1/3 h-full flex items-center justify-end gap-4">
                <h1 className="text-base text-[#666666] font-semibold">
                  Download App
                </h1>
                <img
                  className="w-24 h-auto object-cover"
                  src="https://blinkit.com/d61019073b700ca49d22.png"
                  alt=""
                />
                <img
                  className="w-24 h-auto object-cover"
                  src="https://blinkit.com/8ed033800ea38f24c4f0.png"
                  alt=""
                />
              </div>
              <div className="w-1/3 h-full flex items-center justify-start gap-4 pl-4">
                <p className="bg-black p-2 text-2xl text-white rounded-full">
                  <FaFacebookF />
                </p>
                <p className="bg-black p-2 text-2xl text-white rounded-full">
                  <FaTwitter />
                </p>
                <p className="bg-black p-2 text-2xl text-white rounded-full">
                  <FaInstagram />
                </p>
                <p className="bg-black p-2 text-2xl text-white rounded-full">
                  <FaLinkedinIn />
                </p>
                <p className="bg-black p-2 text-2xl text-white rounded-full">
                  <FaThreads />
                </p>
              </div>
            </div>
            {/* bottom part 2*/}

            <div className="w-full h-1/2 flex items-center justify-start">
              <p className="text-base text-[#666666] leading-4">“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
