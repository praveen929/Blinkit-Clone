import React, { useRef, useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "../context/products/ProductContext";

const RollingPaper = () => {
  const scrollRef = useRef(null); // Reference for the scroll container
  const [isAtStart, setIsAtStart] = useState(true); // Track if at the start of the slider
  const [isAtEnd, setIsAtEnd] = useState(false); // Track if at the end of the slider

  const { cart, setCart } = useProducts();


  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      checkScrollPosition();
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      checkScrollPosition();
    }
  };

  // Check the current scroll position and update button visibility
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Check if the scroll is at the start
      setIsAtStart(scrollLeft === 0);

      // Check if the scroll is at the end
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  function handleCart(item) {
    
    setCart([...cart,item])
      
  }

  // Check scroll position on mount
  React.useEffect(() => {
    checkScrollPosition();
  }, []);

  const data = [
     {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/79c14c88-da9f-482d-8393-38f65756da08.jpg?ts=1707564216",
      time: "19 MINS",
      name: "Harvest Gold Hearty Brown Bread",
      weight: "400g",
      price: "50",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
      time: "19 MINS",
      name: "Amul Pure Milk Cheese Slices",
      weight: "400g",
      price: "141",
      cutPrice: "₹145",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315",
      time: "19 MINS",
      name: "Amul Salted Butter",
      weight: "400g",
      price: "235",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/s/sliding_image/366421a.jpg?ts=1690814947",
      time: "19 MINS",
      name: "Saras Curd",
      weight: "200g",
      price: "16",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/746586b3-e9bf-4ebf-a2ea-9af8471fecce.jpg?ts=1712325569",
      time: "19 MINS",
      name: "Saras Toned Fresh Milk",
      weight: "500ml",
      price: "26",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/0e8047b0-4ad0-4f89-a8f4-80d8b5988103.jpg?ts=1712325568",
      time: "19 MINS",
      name: "Saras Gold Full Cream Fresh Milk",
      weight: "500ml",
      price: "33",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      time: "19 MINS",
      name: "Amul Taaza Toned Fresh Milk",
      weight: "500ml",
      price: "26",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
      time: "19 MINS",
      name: "Amul Masti Curd",
      weight: "400g",
      price: "35",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/2ea78d1e-8060-46e7-9be3-abed7446e676.jpg?ts=1723100674",
      time: "19 MINS",
      svg: (
        <svg
          className="absolute top-0 left-3 w-7 h-7 object-cover"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#538CEE"
          ></path>
        </svg>
      ),
      name: "Nature Good White Eggs (6 pieces)",
      discount: "41",
      weight: "6 pieces",
      price: "53",
      cutPrice: "₹90",
    },
     {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/s/sliding_image/18403a.jpg?ts=1688988827",
      time: "19 MINS",
      name: "English Oven Sandwich White Bread",
      weight: "400g",
      price: "45",
    },
     {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms//77e340a9-a133-434f-a326-2c9d334078fc.jpg?ts=1729169312",
      time: "19 MINS",
      name: "Harvest Gold Sandwich White Bread",
      weight: "450g",
      price: "40",
    },
     {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/s/sliding_image/329549a.jpg?ts=1690805806",
      time: "19 MINS",
      name: "Mother Dairy Classic Curd",
      weight: "400g",
      price: "50",
    },
     {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/65005872-46f3-4b09-915a-cc9690d3bee8.jpg?ts=1710494069",
      time: "19 MINS",
      name: "English Oven 100% Whole Wheat Bread",
      weight: "400g",
      price: "55",
    },
     {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
      time: "19 MINS",
      name: "Amul Masti Curd",
      weight: "200g",
      price: "23",
    },
     {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/s/sliding_images/jpeg/be2b8d5d-1d96-4392-a3e7-a8df23933584.jpg?ts=1710313956",
      time: "19 MINS",
      name: "English Oven Brown Bread",
      weight: "400g",
      price: "55",
    },
     {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/s/sliding_image/86446a.jpg?ts=1687948913",
      time: "19 MINS",
      name: "Mother Dairy Classic Curd",
      weight: "400g",
      price: "35",
    },
  ];

  return (
    <div className="w-full h-full max-w-[3000px] mt-8 lg:flex hidden flex-col items-center overflow-hidden justify-center">
      <div className="w-full flex max-w-[1250px] flex-col h-[376.45px]">
        <div className="w-full h-[56px] flex items-center justify-between lg:px-0 px-3">
          <h1 className="text-[27px] font-[600] leading-8 text-[#1c1c1c]">
            Dairy, Bread & Eggs
          </h1>
          <h4 className="text-[20px] text-nowrap cursor-pointer leading-8 font-[600] text-[#0c831f]">
            see all
          </h4>
        </div>

        {/* Slider controls */}
        <div className="w-full flex items-center justify-between">
          {/* Left button: hidden if at start */}
          <button
            className={`${
              isAtStart ? "hidden" : "flex"
            } absolute w-10 left-[115px] items-center justify-center text-2xl h-10 rounded-full bg-white border shadow-2xl shadow-black`}
            onClick={scrollLeft}
          >
            {<MdKeyboardArrowLeft />}
          </button>

          <div
            className="w-full h-full flex items-center lg:gap-5 gap-1 overflow-x-scroll scrollbar-hide justify-start"
            ref={scrollRef}
            onScroll={checkScrollPosition} // Update button visibility on scroll
          >
            {/* Slider content */}
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[180px] lg:ml-0 ml-3 h-auto bg-white cursor-pointer flex-shrink-0 border shadow rounded-lg flex flex-col items-center justify-start py-1 px-3"
              >
                <div className="w-full flex relative -left-[0.5rem] -top-[0.3rem] ">
                  <p className="absolute left-3 top-[0.1rem]  w-8 h-8 leading-3 text-white text-[0.55rem] font-bold tracking-widest   whitespace-break-spaces text-center text-wrap z-30">
                    {item.discount}% OFF{" "}
                  </p>
                  {item.svg}
                </div>
                <img
                  src={item.image}
                  className="w-[89%] h-[47%] object-cover "
                />
                <div className="w-full h-1/2 flex flex-col items-start justify-center">
                  <div className="flex items-center justify-center bg-[#f8f8f8] rounded-md">
                    <img
                      className="w-[0.7rem] h-[0.7rem] object-cover"
                      src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
                      alt=""
                    />
                    <p className="text-[9px] text-[#363636] font-bold leading-3">
                      {item.time}
                    </p>
                  </div>
                  <h1 className="text-sm font-semibold w-full truncate  text-pretty h-[40px] leading-5 mt-3 mb-3 text-[#1f1f1f]">
                    {item.name}
                  </h1>
                  <p className="w-full h-26px text-[13px] text-ellipsis text-[#666666]">
                    {item.weight}
                  </p>
                  <div className="w-full h-8 flex mt-2 items-center justify-between">
                    <div className="mt-1">
                      <p className="text-[12.5px] font-semibold leading-3">
                        &#8377;{item.price}
                      </p>
                      <s className="text-[#868686]">
                        <p className="text-[12.5px] text-[#868686] font-semibold leading-3">
                          {item.cutPrice}
                        </p>
                      </s>
                    </div>
                    <button onClick={function(){
                      handleCart(item);
                      
                    }} className="py-[5px] px-4 border text-[14px] font-semibold rounded-md text-[#0c831f] border-[#0c831f]">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right button: hidden if at end */}
          <button
            className={`${
              isAtEnd ? "hidden" : "flex"
            } absolute w-10 right-[115px] items-center justify-center text-2xl h-10 rounded-full bg-white border shadow-2xl shadow-black`}
            onClick={scrollRight}
          >
            {<MdKeyboardArrowRight />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RollingPaper;
