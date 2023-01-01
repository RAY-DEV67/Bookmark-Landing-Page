import ham from "./images/icon-hamburger.svg";
import hero from "./images/illustration-hero.svg";
import bookmark from "./images/logo-bookmark.svg";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import close from "./images/icon-close.svg";
import $ from "jquery";
import { useState } from "react";

export function Header() {
  function handleClick() {
    $(".nav").show();
  }

  function handleClose() {
    console.log("work");
    $(".nav").hide();
  }

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full p-8 flex justify-between items-center md:w-10/12">
        <img src={bookmark} alt="bookmark" />
        <img src={ham} alt="ham" onClick={handleClick} className="md:hidden cursor-pointer"/>
        <div className="items-center hidden md:flex">
          <a href="#features"><p className="cursor-pointer navi">FEATURES</p></a>
          <a><p className="mx-4 cursor-pointer navi">PRICING</p></a>
         <a href="#contact"> <p className="mr-4 cursor-pointer navi">CONTACT</p></a>
        <button className="border px-4 py-2 login cursor-pointer">LOGIN</button>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row px-8 lg:w-10/12">
        <div className="hidden lg:block pt-24 text-left w-5/12 flex flex-col items-center  ">
          <h1 className="text-4xl">A Simple Bookmark Manager</h1>
          <div className="w-full">
            <p className=" mt-4">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          <div className="mt-8">
            <button className="mr-4 border px-4 py-2 mb-4 get_chrome">
              Get it on Chrome
            </button>
            <button className="mr-4 border get_firefox shadow px-4 py-2 mb-4">
              Get it on Firefox
            </button>
          </div>
        </div>
        <img src={hero} alt="hero" />
        <div className="lg:hidden">
          <h1 className="text-2xl">A Simple Bookmark Manager</h1>
          <div className="w-full flex flex-col items-center mt-4">
            <p className="w-10/12">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          <div className="mt-8">
            <button className="mr-4 border px-4 py-2 mb-4 get_chrome shadow">
              Get it on Chrome
            </button>
            <button className="mr-4 get_firefox px-4 py-2 mb-4 shadow">
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-8 fixed nav w-full h-full hidden">
        <div className="flex flex-col items-center">
          <div className="flex w-10/12 items-center justify-between">
            <img src={bookmark} alt="ham" className="text-white bg-white px-4 py-1" />
            <img src={close} alt="close" onClick={handleClose} className ="cursor-pointer"/>
          </div>
          <p className="mt-8 uppercase p-4 w-10/12 features cursor-pointer">Features</p>
          <p className="uppercase px-6 py-4 w-10/12 pricing cursor-pointer">Pricing</p>
          <p className="uppercase px-6 py-4 w-10/12 contact cursor-pointer">Contact</p>
        </div>
        <button className="border-2 w-10/12 mt-8 py-2 cursor-pointer">LOGIN</button>
        <div className="flex mt-8 justify-center">
          <img src={facebook} alt="facebook" className="mr-8" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
