import React, { useContext, useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Visiblity } from "../context/contextToggle";
import { Link } from "react-router-dom";
import { useProducts } from "../context/products/ProductContext";
import { MdKeyboardArrowRight } from "react-icons/md";

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { visible, setvisible } = useContext(Visiblity);

  const [addVisible, setAddVisible] = useState(false);

  const { cart, setCart } = useProducts();

  const [Total, setTotal] = useState({});

  const searchItems = [
    "Search 'sugar'",
    "Search 'curd'",
    "Search 'rice'",
    "Search 'butter'",
    "Search 'egg'",
    "Search 'milk'",
    "Search 'paneer'",
    "Search 'chocolate'",
    "Search 'bread'",
    "Search 'chips'",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        // If it's the last item, reset the index to 0
        return prevIndex === searchItems.length - 1 ? 0 : prevIndex + 1;
      });
    }, 1000); // Adjusted interval for smoother transition

    return () => clearInterval(interval);
  }, [searchItems.length]);

  function handleCartToggal() {
    setvisible((prev) => !prev);
  }

  function handleVisibility() {
    setvisible((prev) => !prev);
  }

  function handleAddToggal() {
    setAddVisible((prev) => !prev);
  }

  function handleAddVisibility() {
    setAddVisible((prev) => !prev);
  }

  function handleAddCencil() {
    setAddVisible((prev) => !prev);
  }

  // State to store total

  // Function to calculate total price

  const getTotal = () => {
    let Cutprice = 0;

    const result = cart.reduce((total, item) => {
      if (!item.cutPrice) {
        Cutprice += 0;
      } else {
        Cutprice += Number(item.cutPrice);
      }

      return total + (Number(item.price) || 0); // Ensure item has a price
    }, 0);
    // Log the result
    setTotal({ TotalPrice: result, TotalCutPrice: Cutprice }); // Update the total
  };

  // useEffect to call getTotal when the cart changes
  useEffect(() => {
    getTotal(); // Calculate total when cart changes
  }, [cart]);

  // useEffect to call getTotal when the cart changes
  // Re-runs whenever 'cart' changes

  return (
    <>
      {/* cart section */}
      <div className="w-full lg:flex hidden  justify-end">
        {/* Overlay to close the cart */}
        <div
          onClick={handleVisibility}
          className={
            "w-full h-full absolute z-50 bg-black/70 " +
            (visible ? "visible" : "invisible")
          }
        ></div>

        {/* Cart Sidebar */}
        <div
          className={
            "bg-[#f5f7fd] w-[27.5%] border-l shadow-2xl min-h-screen h-auto absolute z-50 duration-50 " +
            (visible ? "right-0" : "-right-[100%]")
          }
        >
          {/* Cart Header */}
          <div className="w-full h-[60px] bg-white flex items-center px-4 justify-between">
            <h1 className="text-[15px] tracking-wide font-bold">My Cart</h1>
            <RxCross2
              onClick={handleVisibility}
              className="text-lg mr-1 font-bold cursor-pointer"
            />
          </div>

          {/* Cart Content */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-auto rounded-md p-3 flex flex-col items-center justify-center gap-4">
              {/* If there are items in the cart */}
              {cart.length > 0 ? (
                <div className="w-96 h-auto rounded-xl p-3 flex flex-col items-center justify-center  gap-5">
                  <div className="w-96 h-auto rounded-xl p-3 flex flex-col items-center justify-center  bg-white">
                    {/* Delivery time */}
                    <div className="w-full h-16 gap-3  flex items-center justify-start">
                      <img
                        className="w-12 h-12 object-cover"
                        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png"
                        alt="Delivery Time"
                      />
                      <div className="w-full h-full gap-1 leading-3 mt-2 flex flex-col  ">
                        <h1 className="text-base font-semibold">
                          Delivery in 19 minutes
                        </h1>
                        <p className="text-xs  text-[#666666]">
                          Shipment of {cart.length} item{cart.length > 1 && "s"}
                        </p>
                      </div>
                    </div>

                    {/* Items Section */}
                    <div className="w-full">
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="w-full h-auto bg-white mt-4 rounded-md flex justify-between items-center"
                        >
                          {/* Item details */}
                          <div className="w-full h-auto bg-white  rounded-md flex justify-between items-center">
                            {/* Product Image */}
                            <div className="w-[70px] h-auto">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover border  rounded-md"
                              />
                            </div>

                            {/* Item Details */}
                            <div className="  gap-1 flex flex-col ml-3  flex-grow">
                              <span className="w-[121px] text-xs text-[#666666] text-wrap">
                                {item.name}
                              </span>

                              <span className="text-xs text-[#666666]">
                                {item.weight}
                              </span>
                              <span className="text-xs font-bold ">
                                ₹{item.price}
                                {item.cutPrice && (
                                  <s
                                    className="text-[12.5px] ml-1 text-[#868686] font-semibold leading-3"
                                    dangerouslySetInnerHTML={{
                                      __html: `${item.moneySymbol}${item.cutPrice}`,
                                    }}
                                  />
                                )}
                              </span>
                            </div>

                            {/* Quantity Control */}
                            <div className="flex items-center">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="text-white text-base bg-[#0c831f] px-2 py-1 rounded-l-md"
                              >
                                -
                              </button>
                              <span className="text-base px-1 py-1 text-white bg-[#0c831f]">
                                1
                              </span>
                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className="text-white text-base bg-[#0c831f] px-2 py-1 rounded-r-md"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Total price for the item */}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Billing Section */}

                  <div className="w-96 h-auto gap-3 bg-white rounded-xl   flex items-center justify-start">
                    <div className="w-full h-auto rounded-xl  flex flex-col items-start justify-start  gap-5">
                      <div className=" p-4 rounded-md w-full">
                        {/* Bill details heading */}
                        <h2 className="font-semibold text-lg mb-2">
                          Bill details
                        </h2>

                        {/* Items total */}
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-gray-600">Items total</span>
                            {Total.TotalCutPrice <= 0 ? (
  ""
) : (
  <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-1 rounded-md">
    Saved &#8377;{Math.abs(Total.TotalCutPrice - Total.TotalPrice)}
  </span>
)}

                          </div>
                          <div className="flex items-center">
                            {Total.TotalCutPrice <= 0 ? (
                              ""
                            ) : (
                              <span className="line-through text-gray-400 mr-2">
                                ₹{Total.TotalCutPrice}
                              </span>
                            )}
                            <span className="text-gray-500">
                            ₹{Total.TotalPrice}
                            </span>
                          </div>
                        </div>

                        {/* Delivery charge */}
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">
                              Delivery charge
                            </span>
                            <span className="text-gray-500 text-xs cursor-pointer">
                              <i className="info-icon"></i>
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="line-through text-gray-400 mr-2">
                              ₹25
                            </span>
                            <span className="text-green-600">FREE</span>
                          </div>
                        </div>

                        {/* Handling charge */}
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">
                              Handling charge
                            </span>
                            <span className="text-gray-500 text-xs cursor-pointer">
                              <i className="info-icon"></i>
                            </span>
                          </div>
                          <span className="text-gray-500">₹4</span>
                        </div>

                        {/* Grand total */}
                        <div className="flex justify-between items-center font-semibold text-lg mt-3">
                          <span>Grand total</span>
                          <span>₹{4+Total.TotalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Policy Section */}
                  <div className="w-96 max-w-md p-4 bg-white  rounded-lg">
  <h2 className="text-lg font-bold text-black mb-2">Cancellation Policy</h2>
  <p className="text-sm text-gray-600">
    Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.
  </p>
</div>


                  {/* Login Button or Section */}
                  <div className="w-[26.5rem] h-24  max-w-md p-4 bg-white shadow-md rounded-lg flex items-center justify-between">
                    <div className="w-full h-16 flex items-center rounded-md justify-between cursor-pointer bg-[#0c831f]">

                      <div className="w-1/2 h-full text-white text-base px-3 font-semibold flex leading-4 items-center justify-between">
                              <p>₹{Total.TotalPrice} <br /> <span className="text-xs font-light">TOTAL</span></p>
                      </div>
                      <div className="w-1/2 h-full text-white  px-3  flex items-center justify-end ">
                        <p className="w-full text-[1rem]  flex items-center justify-center">Login To processed<MdKeyboardArrowRight className="text-2xl space-x-0" /></p>
                      </div>

                    </div>
                  </div>
                </div>
              ) : (
                // If the cart is empty
                <div className="w-full h-auto rounded-md bg-white m-3 p-5 flex flex-col items-center justify-center gap-4">
                  <img
                    className="w-[43%]"
                    src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
                    alt="Empty Cart"
                  />
                  <div className="w-full flex flex-col items-center gap-1 justify-center">
                    <h1 className="text-lg font-bold tracking-wide">
                      You don't have any items in your cart
                    </h1>
                    <p className="text-sm tracking-wide text-[#999999] font-[400]">
                      Your favourite items are just a click away
                    </p>
                  </div>
                  <button className="w-[40%] text-[13px] text-white bg-[#0c831f] px-[0.8rem] py-[0.5rem] mt-1 mb-8 rounded-lg">
                    Start Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* address toggle */}
      <div className="w-full fixed z-50 lg:flex hidden">
        <div className="absolute z-40">
          <div
            onClick={handleAddVisibility}
            className={`w-full h-full  fixed bg-black/70 ${
              addVisible ? "visible opacity-100" : "invisible opacity-0"
            }`}
            style={{ transition: "opacity 0.3s ease" }} // Smooth transition for visibility
          ></div>
        </div>

        <div
          className={`w-[31rem] z-50 h-[7.5rem] absolute left-[6rem] top-[5.5rem] px-5 py-5 bg-[#f4f6fc] ${
            addVisible ? "visible opacity-100" : "invisible opacity-0"
          }`}
          style={{ transition: "opacity 0.3s ease" }} // Smooth transition for the content box
        >
          <div className="w-full flex justify-between items-center">
            <h3 className="text-[14px] font-medium">Change Location</h3>
            <RxCross2
              onClick={handleAddCencil}
              className="text-xl mr-1 font-bold cursor-pointer"
            />
          </div>

          <div className="w-full flex mt-4 items-center">
            <button className="text-xs text-white px-4 py-[0.65rem] rounded-md bg-[#0c831f]">
              Detect my location
            </button>
            <div className="w-auto mx-1 flex items-center">
              <div className="w-3 h-[1.5px] bg-[#cccccc]"></div>
              <p className="text-[10px] font-semibold text-[#cccccc] p-2 rounded-full border-[1.5px] border-[#cccccc]">
                OR
              </p>
              <div className="w-3 h-[1.5px] bg-[#cccccc]"></div>
            </div>
            <input
              className="w-[13.5rem] outline-none text-[15px] text-[#596378] h-10 rounded-xl indent-2 border-[1.5px] border-[#cccccc]"
              type="text"
              placeholder="search delivery location"
            />
          </div>
        </div>
      </div>

      {/* main nav */}

      <div className=" w-screen lg:h-[86px]  lg:fixed h-auto  top-[0px] z-30 bg-white lg:border-b flex  flex-col items-center lg:justify-between lg:m-0 m-2 gap-3 lg:px-[1.70rem] px-4">
        <div className="lg:w-full w-full h-full pr-5 gap-[1.90rem]  flex items-center justify-center">
          <div className="lg:w-[31%]   w-full  h-full flex items-center justify-between  ">
            <Link to="/">
              <div className="w-full  h-full overflow-hidden lg:flex hidden items-center justify-start mr-7 ">
                <svg
                  style={{ alignItems: "start" }}
                  width="auto"
                  height="30"
                  viewBox="0 0 114 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3342 7.186C16.2619 7.186 17.9832 7.66644 19.4978 8.62732C21.0262 9.57447 22.2242 10.9197 23.0917 12.663C23.9316 14.3377 24.3516 16.3075 24.3516 18.5724C24.3516 20.7687 23.9316 22.7316 23.0917 24.4612C22.2517 26.1908 21.0675 27.5429 19.5391 28.5175C17.9969 29.5058 16.2619 30 14.3342 30C12.9297 30 11.6078 29.7117 10.3685 29.1352C9.12927 28.5587 8.06901 27.7488 7.18775 26.7056V29.4852H0V0H7.18775V10.4598C8.06901 9.41661 9.12927 8.61359 10.3685 8.05079C11.6078 7.47426 12.9297 7.186 14.3342 7.186ZM12.1861 24.0494C13.2051 24.0494 14.1139 23.8161 14.9125 23.3493C15.7112 22.8826 16.3377 22.2306 16.7921 21.3933C17.2465 20.5697 17.4737 19.6294 17.4737 18.5724C17.4737 17.5429 17.2465 16.6095 16.7921 15.7721C16.3377 14.9348 15.7112 14.2828 14.9125 13.8161C14.1139 13.3493 13.2051 13.116 12.1861 13.116C11.2223 13.116 10.3617 13.3493 9.60432 13.8161C8.84699 14.269 8.2549 14.9073 7.82804 15.731C7.40118 16.5683 7.18775 17.5154 7.18775 18.5724C7.18775 19.6294 7.40118 20.5765 7.82804 21.4139C8.2549 22.2375 8.84699 22.8826 9.60432 23.3493C10.3617 23.8161 11.2223 24.0494 12.1861 24.0494Z"
                    fill="#F8CB46"
                  ></path>
                  <path
                    d="M25.3356 29.4852V0H32.5233V29.4852H25.3356Z"
                    fill="#F8CB46"
                  ></path>
                  <path
                    d="M34.5607 29.4852V7.68016H41.7071V29.4852H34.5607Z"
                    fill="#F8CB46"
                  ></path>
                  <path
                    d="M57.2319 7.186C58.7603 7.186 60.1372 7.5429 61.3627 8.25669C62.5882 8.95676 63.5521 9.94509 64.2544 11.2217C64.9291 12.512 65.2664 13.9739 65.2664 15.6074V29.4852H58.4092V17.2135C58.4092 16.4173 58.2508 15.7104 57.9341 15.0927C57.6312 14.4612 57.1974 13.9739 56.6329 13.6307C56.0821 13.2876 55.4349 13.116 54.6914 13.116C53.9891 13.116 53.3419 13.2876 52.7498 13.6307C52.1577 13.9602 51.6965 14.4132 51.366 14.9897C51.0218 15.5388 50.8496 16.1839 50.8496 16.9252L50.8083 29.4852H43.6619V7.68016H50.8083V10.1716C51.483 9.23816 52.3849 8.51064 53.5141 7.98902C54.6432 7.45367 55.8824 7.186 57.2319 7.186Z"
                    fill="#F8CB46"
                  ></path>
                  <path
                    d="M81.0597 17.2135L89.1769 29.4852H81.0597L76.3091 21.7639L74.1198 24.2965V29.4852H66.932V0H74.1198V16.2869L81.0184 7.68016H89.1356L81.0597 17.2135Z"
                    fill="#F8CB46"
                  ></path>
                  <path
                    d="M34.5569 0.00232667H41.7267V5.59207H34.5569V0.00232667Z"
                    fill="#F8CB46"
                  ></path>
                  <path
                    d="M90.3176 29.4198V7.61479H97.464V29.4198H90.3176Z"
                    fill="#54B226"
                  ></path>
                  <path
                    d="M112.575 23.2634L114 27.855C113.353 28.4727 112.534 28.9737 111.542 29.3581C110.564 29.7424 109.607 29.9346 108.671 29.9346C107.322 29.9346 106.117 29.6395 105.057 29.0492C103.996 28.4452 103.17 27.6079 102.578 26.5372C101.986 25.494 101.69 24.2929 101.69 22.9339V13.3183H98.819V7.61479H101.69V0.00241089H108.547V7.61479H113.071V13.3183H108.547V21.6161C108.547 22.3162 108.733 22.8859 109.105 23.3251C109.477 23.7644 109.952 23.984 110.53 23.984C110.943 23.984 111.329 23.9223 111.687 23.7987C112.045 23.6752 112.341 23.4967 112.575 23.2634Z"
                    fill="#54B226"
                  ></path>
                  <path
                    d="M90.2609 0.00241089H97.4307V5.59215H90.2609V0.00241089Z"
                    fill="#54B226"
                  ></path>
                </svg>
              </div>
            </Link>
            <div className="w-[1px] h-full lg:flex hidden bg-[#f2f2f2]  "></div>

            <div
              onClick={handleAddToggal}
              className="lg:w-[55%]  w-auto cursor-pointer h-full lg:relative lg:right-5 items-start justify-center flex flex-col lg:p-3  p-0 "
            >
              <h1 className="text-[18px] tracking-wide whitespace-normal text-nowrap font-bold ">
                Delivery in 19 minutes
              </h1>

              <div className="flex">
                <p className="w-[210px]  text-[14px] font-gilroy font-normal truncate whitespace-nowrap">
                  Second Entry, Jaipur, Railway Station, Hasanpura, Jaipur,
                  Rajasthan 302006, India
                </p>

                <div className="flex justify-center items-center">
                  <div className="w-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black "></div>
                </div>
              </div>
            </div>
          </div>

          <Link className="w-[48%]  cursor-text lg:flex hidden" to="/s">
            <div className="w-[100%] h-full  flex  items-center justify-center">
              <div className="w-full h-[48px] border flex flex-row border-gray-200 rounded-xl bg-gray-50">
                <div className="w-[20px] h-[20px] mx-3 flex justify-center items-center text-[20px] text-[#1f1f1f] font-[CustomFont] m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-search"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>

                <div className="w-[98%] flex flex-col items-start justify-center">
                  {/* <p className='relative  left-0 text-[#999999] font-normal text-[16px] leading-[18px]  '>Search "chips"</p> */}

                  <div className="w-[98%] flex flex-col overflow-hidden items-start gap-20 justify-center">
                    <div className="relative h-10 text-nowrap flex flex-col items-start justify-center">
                      {searchItems.map((item, index) => (
                        <p
                          key={index}
                          className={`absolute left-0  tracking-wider py-3 text-[14px] leading-4 font-normal text-[#999999] transition-all duration-[500ms] ease-linear
                  ${
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : index < activeIndex
                      ? "-translate-y-full opacity-0"
                      : "translate-y-full opacity-0"
                  }`}
                          style={{
                            transform: `translateY(${
                              (index - activeIndex) * 100
                            }%)`,
                          }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="lg:w-[18%]   h-full  items-center flex   justify-end">
            <div className="w-auto h-auto lg:hidden flex items-end justify-end">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 5.33317C10.1089 5.33317 5.33329 10.1088 5.33329 15.9998C5.33329 21.8909 10.1089 26.6665 16 26.6665C21.891 26.6665 26.6666 21.8909 26.6666 15.9998C26.6666 10.1088 21.891 5.33317 16 5.33317ZM2.66663 15.9998C2.66663 8.63604 8.63616 2.6665 16 2.6665C23.3638 2.6665 29.3333 8.63604 29.3333 15.9998C29.3333 23.3636 23.3638 29.3332 16 29.3332C8.63616 29.3332 2.66663 23.3636 2.66663 15.9998Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 10.6667C14.5272 10.6667 13.3333 11.8606 13.3333 13.3333C13.3333 14.8061 14.5272 16 16 16C17.4727 16 18.6666 14.8061 18.6666 13.3333C18.6666 11.8606 17.4727 10.6667 16 10.6667ZM10.6666 13.3333C10.6666 10.3878 13.0544 8 16 8C18.9455 8 21.3333 10.3878 21.3333 13.3333C21.3333 16.2789 18.9455 18.6667 16 18.6667C13.0544 18.6667 10.6666 16.2789 10.6666 13.3333Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.2674 23.2783C10.3653 23.6502 9.8256 24.2056 9.46237 25.1467C9.19724 25.8337 8.42539 26.1757 7.73839 25.9106C7.0514 25.6454 6.70941 24.8736 6.97455 24.1866C7.59355 22.5827 8.65364 21.4714 10.2512 20.8129C11.7534 20.1936 13.6722 20 15.9998 20C18.3392 20 20.2689 20.1812 21.775 20.7938C23.3847 21.4487 24.4443 22.5677 25.0551 24.1993C25.3132 24.8889 24.9634 25.6572 24.2737 25.9154C23.5841 26.1735 22.8157 25.8237 22.5576 25.1341C22.199 24.176 21.666 23.6284 20.7702 23.2639C19.7707 22.8573 18.2817 22.6667 15.9998 22.6667C13.7457 22.6667 12.2649 22.8671 11.2674 23.2783Z"
                  fill="black"
                ></path>
              </svg>
            </div>

            <div className="w-[325px]  h-full  items-center lg:flex  hidden justify-between">
              <a
                className="w-[40%] text-[18px] font-normal flex items-start justify-start relative  left-7 text-[#363636] tracking-wider whitespace-normal"
                href="/"
              >
                Login
              </a>
              <button
                onClick={handleCartToggal}
                className=" w-[43%] h-[52px] flex items-center justify-between rounded-[8px] font-bold text-[14.8px] p-2 bg-[#0c831f] text-white"
              >
                {/* Shopping cart icon */}
                <div className="flex items-center gap-1">
                  <HiOutlineShoppingCart className="hover:animate-waving-hand text-[30px]" />
                </div>

                {/* Conditional rendering */}
                {cart.length > 0 ? (
                  // When there are items in the cart, show item count and total price
                  <div className="flex flex-col leading-5 justify-center text-left">
                    <span className="text-[16px] font-bold">
                      {cart.length} {cart.length === 1 ? "item" : "items"}
                    </span>
                    <span className="text-[16px]">{Total.TotalPrice}</span>
                  </div>
                ) : (
                  // When there are no items in the cart, show "Add Cart"
                  <p className="text-[16px] font-bold text-nowrap text-white">
                    My Cart
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>

        <a className="w-full cursor-text lg:hidden flex " href="/s/">
          <div className="lg:w-[697.2px] w-full h-full  flex  items-center justify-center">
            <div className="w-full h-[48px] border flex flex-row border-gray-200 rounded-xl bg-gray-50">
              <div className="w-[20px] h-[20px] mx-3 flex justify-center items-center text-[20px] text-[#1f1f1f] font-[CustomFont] m-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              <div className="w-[98%] flex flex-col items-start justify-center">
                {/* <p className='relative  left-0 text-[#999999] font-normal text-[16px] leading-[18px]  '>Search "chips"</p> */}

                <div className="w-[98%] flex flex-col overflow-hidden items-start gap-20 justify-center">
                  <div className="relative h-10 text-nowrap flex flex-col items-start justify-center">
                    {searchItems.map((item, index) => (
                      <p
                        key={index}
                        className={`absolute left-0  tracking-wider py-3 text-[14px] leading-4 font-normal text-[#999999] transition-all duration-[500ms] ease-linear
                  ${
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : index < activeIndex
                      ? "-translate-y-full opacity-0"
                      : "translate-y-full opacity-0"
                  }`}
                        style={{
                          transform: `translateY(${
                            (index - activeIndex) * 100
                          }%)`,
                        }}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Nav;
