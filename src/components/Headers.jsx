import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Headers = () => {
    
    useEffect(() => {
        //navbar fixed
        const handleScroll = () => {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;
            
            if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
            } else {
            header.classList.remove('navbar-fixed');
            }

        };
        window.addEventListener('scroll', handleScroll);
    }, []);


     //hamburger aktif
     const [isHamburgerActive, setHamburgerActive] = useState(false);
        
     const hamburgerRef = useRef(null);
     const navMenuRef = useRef(null);

     useEffect(() => {
         const handleClick = (event) => {
         if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
             // Toggle hamburger and navMenu visibility
             setHamburgerActive(!isHamburgerActive);
         } else if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
             // Close navMenu when clicking outside
             setHamburgerActive(false);
         }
         };

         const handleNavMenuClick = (event) => {
         // Prevent closing when clicking inside navMenu
         event.stopPropagation();
         };

         document.addEventListener('click', handleClick);
         navMenuRef.current.addEventListener('click', handleNavMenuClick);

         return () => {
         document.removeEventListener('click', handleClick);
         navMenuRef.current.removeEventListener('click', handleNavMenuClick);
         };
     }, [isHamburgerActive]);

  return (
    <header className=" text-white w-full flex justify-center fixed z-50">
        <div className="container">
            <div className="flex relative justify-between">
                <div className="flex py-5">
                    <h1 className="font-bold text-xl">DyktaSticker</h1>
                </div>

                <div class="flex items-center px-4">
                    <button id="hamburger" ref={hamburgerRef} name="hamburger" type="button" className={`hamburger ${isHamburgerActive ? 'hamburger-active' : ''} block absolute right-4 lg:hidden`}>
                        <span class="hamburger-line origin-top-left"></span>
                        <span class="hamburger-line "></span>
                        <span class="hamburger-line origin-bottom-left"></span>
                    </button>

                    <nav id="nav-menu" ref={navMenuRef} className={`menu ${isHamburgerActive ? '' : 'hidden'} absolute py-5 lg:py-0 bg-dark1 shadow-lg rounded-lg max-w-[180px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                        <ul class="block lg:flex">
                            <li>
                                <a href="#home" className="navmenu">Home</a>
                            </li>
                            <li>
                                <a href="#product" className="navmenu">Product</a>
                            </li>
                            <li>
                                <a href="#value" className="navmenu">Value</a>
                            </li>
                            <li>
                                <a href="#contact" className="navmenu">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Headers