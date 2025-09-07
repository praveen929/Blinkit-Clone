import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSeller = () => {
    
  const data = {
    prod1: {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/746586b3-e9bf-4ebf-a2ea-9af8471fecce.jpg?ts=1712325569",
      time: "19 MINS",
      name: "Amul Pure Milk Cheese Slices",
      weight: "500 ml",
      price: "26",
    },
    prod2: {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/0e8047b0-4ad0-4f89-a8f4-80d8b5988103.jpg?ts=1712325568",
      time: "19 MINS",
      name: "Saras Gold Full Cream Fresh Milk",
      weight: "500 ml",
      price: "33",
      cutPrice:"",

    },
    prod3: {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/366421a.jpg?ts=1690814947",
      time: "19 MINS",
      name: "Saras Curd",
      weight: "200g",
      price: "16",
    },
    prod4: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/230658a.jpg?ts=1696444216",
      time: "19 MINS",
      name: "Saras Paneer",
      weight: "200g",
      price: "77",
    },
    prod5: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      time: "19 MINS",
      name: "Amul Taaza Toned Fresh Milk",
      weight: "500 ml",
      price: "26",
    },
    prod6: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      time: "19 MINS",
      name: "Amul Gold Full Cream Fresh Milk",
      weight: "500 ml",
      price: "33",
    },
    prod7: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/6525a6e8-5d03-46db-b5e7-b5b4f778b693.jpg?ts=1708592369",
      time: "19 MINS",
      name: "Amul Masti Curd",
      weight: "400g",
      price: "35",

    },
    prod8: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/7715e993-76c0-4c4c-b6e0-94f9c7b3bca2.jpg?ts=1712325563",
      time: "19 MINS",
      name: "Amul Moti Toned Milk (90 Days Shelf Life)",
      weight: "450 ml",
      price: "",
    },
    prod9: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/48b9a5f9-b632-48bd-bfb0-f8386300ebb3.jpg?ts=1723622212",
      time: "19 MINS",
      name: "Amul Fresh Malai Paneer",
      weight: "200g",
      price: "88",
    },
    prod10: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/products/sliding_image/68554a.jpg?ts=1701174619",
      time: "19 MINS",
      name: "Amul Masti Curd",
      weight: "200g",
      price: "23",
    },
    prod11: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/24dbd554-4aa0-4365-b200-1bb7afd6ae50.jpg?ts=1719578912",
      time: "19 MINS",
        name: "FruBon Curd",
        svg: (<svg className="absolute top-0 left-3 w-7 h-7 object-cover" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>),
      discount: "17",
      weight: "400g",
      price: "28",
    },
    prod12: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/0074b9f6-c141-44b0-a00c-0278d5d315ca.jpg?ts=1711473366",
      time: "19 MINS",
        name: "Potato (Aloo)",
        svg: (<svg className="absolute top-0 left-3 w-7 h-7 object-cover" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>),
      discount: "26",
      weight: "1 kg",
        price: "45",
      cutPrice:"₹61",

      
    },
    prod13: {
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/fc97e36f-ae48-4261-99d7-718cb9b2f5e6.jpg?ts=1711010248",
      time: "19 MINS",
        name: "Onion",
        svg: (<svg className="absolute top-0 left-3 w-7 h-7 object-cover" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>),
        discount: "28",
      weight: "400g",
        price: "54",
        cutPrice:"₹75",
      
    },
    
    
    
  };

    
    
    
  return (
    <div className="w-full h-[80%] max-w-[3000px] mt-1 mb-8  flex lg:hidden flex-col items-center overflow-hidden justify-center">
      <div className="w-full flex   max-w-[1250px] flex-col h-[312px]">
        <div className="w-full h-[56px] flex items-center justify-between  lg:px-0 px-3">
          <h1 className="lg:text-[27px] text-[19px]  font-[700] leading-8 text-[#1c1c1c]">
            Bestselles
          </h1>

          <h4 className="lg:text-[20px] text-[16px] text-nowrap cursor-pointer leading-8 font-[600]  text-[#0c831f]">
            see all
          </h4>
        </div>

        {/* yha sa slider shuru hui ha  */}

        <div className="w-full h-full  flex items-start lg:gap-5  overflow-scroll scrollbar-hide justify-start">
          
                  
          {Object.entries(data).map(([key, item], index) => (
            <div className="lg:w-[180px] w-[150px]   lg:h-[86%] h-[100%] bg-white cursor-pointer  flex-shrink-0 lg:border lg:shadow rounded-lg flex flex-col items-center justify-start py-1 px-[0.7rem]">
            
                  <div className="w-full relative h-[50%] border rounded-2xl overflow-hidden">
                      
                      <div className="flex relative -top-[0.15rem] ">
                          <p className="absolute left-3 top-[0.15rem] font-semibold w-7 h-7 leading-3 text-white text-[0.55rem] whitespace-break-spaces text-center text-wrap z-30">{item.discount}% OFF </p>
                      {item.svg}
                          
                      </div>
                      <img
              src={item.image}
              className="w-full  h-full object-cover "
            /></div>
                  

            <div className="w-full h-1/2 flex flex-col items-start justify-center  ">
              <div className="flex items-center justify-center mb-1 ml-1 bg-[#f8f8f8] rounded-md">
                <img
                  className="w-[0.7rem] h-[0.7rem] object-cover"
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
                  alt=""
                />
                <p className="text-[9px] text-[#363636] font-bold leading-3 ">
                 {item.time}
                </p>
              </div>

                      <div className="w-full h-[32px] mt-1 mb-1">
                      <h1 className="w-full h-full  text-sm font-semibold text-wrap   truncate leading-4  text-[#1f1f1f]">
                {item.name }
              </h1>
                      </div>
              

              <p className="w-full h-[15px] text-[14px] text-ellipsis text-[#666666]">
                {item.weight}
              </p>

              <div className="w-full h-8 flex mt-2 items-center  justify-between">
                
                  <div className="mt-1 ">
                  <p className="text-[12.5px] font-semibold leading-3 mb-[0.20rem]">
                  &#8377;{item.price}
                  </p>
                <s className="text-[#868686]">  <p  className="text-[12.5px] text-[#868686] font-semibold leading-3">
                  {item.cutPrice}
                  </p></s>
                  </div>
                <button className="py-[5px] px-4 border text-[14px] font-semibold rounded-md text-[#0c831f]  border-[#0c831f]">
                  ADD
                </button>
              </div>
            </div>
                      </div>
          ))}

          
                     

          {/* Slider yha tak ha */}
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
