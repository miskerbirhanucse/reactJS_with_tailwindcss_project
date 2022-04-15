import { React, useState, useRef } from "react";
import { images } from "../constants/index";
import "./Hamburger.css";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const middleSpan = useRef(null);
  const handleChange = () => setToggle(!toggle);
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between ">
        <div className="pt-2">
          <img src={images.logo} alt="logo" />
        </div>

        <div>
          <ul className="hidden md:flex space-x-6">
            {[
              ["Pricing", "/Pricing"],
              ["Product", "/Product"],
              ["About Us", "/About Us"],
              ["Careers", "/Careers"],
              ["Community", "/Community"],
            ].map(([title, url]) => (
              <a className="hover:text-darkGrayishBlue" href={url}>
                {title}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <a
            className="hidden p-3 pt-2 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
            href="/#"
          >
            Get Started
          </a>
        </div>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={() => handleChange()}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle" ></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* mobile Menu */}
      {toggle ? (
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="/#">Pricing</a>
            <a href="/#">Product</a>
            <a href="/#">About Us</a>
            <a href="/#">Careers</a>
            <a href="/#">Community</a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
