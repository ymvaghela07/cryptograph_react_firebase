import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        {/* Links */}
        <div className="flex justify-evenly w-full md:w-[300px] uppercase">
          <div>
            <h2 className="font-bold">SUPPORT</h2>
            <ul>
              <li className="text-sm py-2">HELP CENTER</li>
              <li className="text-sm py-2">CONTACT US</li>
              <li className="text-sm py-2">API</li>
              <li className="text-sm py-2">DOCUMENTATION</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">ABOUT US</li>
              <li className="text-sm py-2">CAREERS</li>
              <li className="text-sm py-2">INVEST</li>
              <li className="text-sm py-2">LEGAL</li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>

              <p className="text-center md:text-right">Sign up for newletter</p>

              <div className="py-4">
                <form>
                  <input
                    className="w-full bg-primary border border-input p-2 mr-2 rounded-2xl shadow-xl md:w-auto"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  <button className="w-full bg-button text-btnText px-4 p-2 rounded-2xl shadow-lg hover:shadow-2xl md:w-auto my-2">
                    Sign Up
                  </button>
                </form>
              </div>

              <div className="flex py-4 justify-between text-accent">
                <FaGithub />
                <AiOutlineInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <p className="text-center py-4">Powered by CoinGecko</p>
    </div>
  );
};

export default Footer;
