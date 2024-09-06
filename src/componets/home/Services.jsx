import React from "react";

const Services = () => {
  const phones = [
    {
      name: "iPhone 12",
      image:
        "https://s3no.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?p=default&s=lg",
      description: "Sell iPhone 12",
    },
    {
      name: "Samsung Galaxy S21",
      image:
        "https://s3no.cashify.in/builder/5f63c6f126b14b92ac2be730f16cf4bc.webp?p=default&s=lg",
      description: "Sell Samsung Galaxy S21",
    },
    {
      name: "OnePlus 9",
      image:
        "https://s3no.cashify.in/builder/da9c963ad6aa4132b95d171d09a5fba4.webp?p=default&s=lg",
      description: "Sell OnePlus 9",
    },
    {
      name: "Google Pixel 6",
      image:
        "https://s3no.cashify.in/builder/37f4c02d2e6843e2ac54bbd67427dcf5.webp?p=default&s=lg",
      description: "Sell Google Pixel 6",
    },
    {
      name: "iPhone 12",
      image:
        "https://s3no.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?p=default&s=lg",
      description: "Sell iPhone 12",
    },
    {
      name: "Samsung Galaxy S21",
      image:
        "https://s3no.cashify.in/builder/5f63c6f126b14b92ac2be730f16cf4bc.webp?p=default&s=lg",
      description: "Sell Samsung Galaxy S21",
    },
   
  ];

  return (
    <div className="my-10 px-5">
      <p className="font-bold pb-2 text-2xl">Our Services</p>
      <div className="flex justify-between  ">
        {phones.map((value) => {
          return (
            <div className="flex flex-col  items-center">
              <img
                src="https://s3no.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?p=default&s=lg"
                alt=""
                className="h-14"
              />
              <p className="text-xs ">{value.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
