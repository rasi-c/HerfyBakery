import React, { useState } from "react";

export default function Aboutus() {
  const [activeButton, setActiveButton] = useState("Our Story");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonClasses = (buttonName) =>
    `hover:text-yellow-400 ${
      activeButton === buttonName
        ? "border-b-2 border-yellow-400 text-yellow-400"
        : ""
    }`;

  return (
    <div className="flex flex-col items-center xl:mt-0 mt-[150px] ">
      <div className="text-5xl font-kaushan font-bold">About Us</div>
      <div className="font-lora italic text-xl text-[#767676] text-center mt-8 px-4">
        Welcome to Herfy, your premier destination for wholesale sponge cakes!
        Founded in 2020, our bakery has been dedicated to crafting the finest
        sponge cakes with passion and precision.
      </div>
      <div className="w-full flex items-center justify-center gap-12 font-bold mt-12 text-sm md2:text-lg">
        <button
          className={buttonClasses("Our Story")}
          onClick={() => handleClick("Our Story")}
        >
          Our Story
        </button>
        <button
          className={buttonClasses("Our Commitment")}
          onClick={() => handleClick("Our Commitment")}
        >
          Our Commitment
        </button>
        <button
          className={buttonClasses("Why Choose Us?")}
          onClick={() => handleClick("Why Choose Us?")}
        >
          Why Choose Us?
        </button>
      </div>

      <div className="w-full mt-12">
        {/* Our Story  */}
        <div 
         className={`pl-5 italic text-xl text-center ${
          activeButton === "Our Story" ? "block" : "hidden"
        }`}
         >
          At Herfy Bakery, our journey began with a simple dream: to create
          sponge cakes that are not only delicious but also bring a smile to
          everyone who tastes them. With a focus on quality and tradition, we
          use only the finest ingredients and time-tested recipes to ensure
          every bite is perfect
        </div>
        {/* why choose us  */}
        <div
          className={`pl-5 ${
            activeButton === "Why Choose Us?" ? "block" : "hidden"
          }`}
        >
          <ul className="list-disc pl-5 italic text-xl text-black">
            <li>
              Quality Ingredients: <br />{" "}
              <span className="pl-4 text-[#767676]">
                We source only the best ingredients, ensuring the freshest and
                most flavorful sponge cakes.
              </span>
            </li>
            <li>
              Expert Bakers: <br />{" "}
              <span className="pl-4 text-[#767676]">
                Our bakers are passionate and experienced, dedicated to
                perfecting the art of sponge cake baking.
              </span>
            </li>
            <li>
              Customization:
              <br />{" "}
              <span className="pl-4 text-[#767676]">
                {" "}
                Whether you need cakes for a special event or a regular supply
                for your business, we offer customization to meet your specific
                needs.
              </span>
            </li>
            <li>
              Customer Satisfaction:
              <br />{" "}
              <span className="pl-4 text-[#767676]">
                {" "}
                Your satisfaction is our top priority. We strive to exceed your
                expectations with every order.
              </span>
            </li>
          </ul>
        </div>

        {/* Our Commitment  */}
        <div
          className={`pl-5 italic text-xl text-center ${
            activeButton === "Our Commitment" ? "block" : "hidden"
          }`}
        >
          We believe in the magic of baking. From the moment you step into our
          bakery to the time you savor your first bite, we aim to provide an
          experience that is both delightful and memorable. Our team of skilled
          bakers works tirelessly to maintain the highest standards of
          excellence, ensuring that every cake we produce meets our stringent
          quality criteria.
        </div>
      </div>
    </div>
  );
}
