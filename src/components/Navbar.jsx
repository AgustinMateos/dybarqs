'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { inter } from '@/app/[locale]/ui/fonts';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResidentialOpen, setIsResidentialOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState('/proyectos-home.svg');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMobileMenuOpen(false);
    setIsMobileProjectsOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsResidentialOpen(false);
    setIsCommercialOpen(false);
    setHoveredImage('/proyectos-home.svg');
  };

  const toggleResidential = (e) => {
    e.stopPropagation();
    setIsResidentialOpen(!isResidentialOpen);
    setIsCommercialOpen(false);
  };

  const toggleCommercial = (e) => {
    e.stopPropagation();
    setIsCommercialOpen(!isCommercialOpen);
    setIsResidentialOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
    setIsMobileProjectsOpen(false);
  };

  const toggleMobileProjects = () => {
    setIsMobileProjectsOpen(!isMobileProjectsOpen);
  };

  useEffect(() => {
    if (!isDropdownOpen) {
      setIsResidentialOpen(false);
      setIsCommercialOpen(false);
      setHoveredImage('/proyectos-home.svg');
    }
  }, [isDropdownOpen]);

  const residentialImages = {
    'Primer Piso Flooring': '/primer-piso-flooring.svg',
    'Coffe Point Klimber': '/coffe-point-klimber.svg',
    Invernadero: '/invernadero.svg',
    'Alvi Armani': '/alvi-armani.svg',
  };

  const commercialImages = {
    Zapata: '/zapata.svg',
    Ruggieri: '/ruggieri.svg',
    'Olivos Golf': '/olivos-golf.svg',
    Humboldt: '/humboldt.svg',
    Amina: '/amina.svg',
    Soler: '/soler.svg',
    Martínez: '/martinez.svg',
    'Gelly y Obes': '/gelly-y-obes.svg',
    Juramento: '/juramento.svg',
    Rosales: '/rosales.svg',
    'La Juanita': '/la-juanita.svg',
    Libertador: '/libertador.svg',
    Gelly: '/gelly.svg',
    'Teodoro Garcia': '/teodoro-garcia.svg',
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[150px] z-20 bg-black/20 text-white flex justify-center">
      <div className="container h-[150px] py-4">
        <div className="flex justify-between items-center md:w-full">
          {/* Logo (Left on Mobile) */}
          <div className="w-[189px] ml-[20px] h-[74px] md:w-[470px] order-1 md:order-2 flex md:justify-center items-center">
            <Image
              width={0}
              height={74}
              alt="logo"
              src="/logo-dyb.svg"
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Hamburger Menu (Right on Mobile) */}
          <div className="h-[86px] flex items-center w-[74px] order-2 md:order-1">
            {/* Desktop Menu */}
            <ul className="hidden md:flex flex-col space-y-2">
              <li
                className={`${inter.className} uppercase cursor-pointer text-[var(--Dark-Gray)] font-['Roboto_Mono'] text-base not-italic font-medium leading-[110%] tracking-[1.6px]`}
                onClick={toggleDropdown}
              >
                proyectos
              </li>
              <li className={`${inter.className} uppercase cursor-pointer text-[var(--Dark-Gray)] font-['Roboto_Mono'] text-base not-italic font-medium leading-[110%] tracking-[1.6px]`}>nosotros</li>
              <li className={`${inter.className} uppercase cursor-pointer text-[var(--Dark-Gray)] font-['Roboto_Mono'] text-base not-italic font-medium leading-[110%] tracking-[1.6px]`}>contacto</li>
            </ul>
            {/* Mobile Hamburger Icon */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              <span className="w-6 h-1 bg-white rounded"></span>
              <span className="w-6 h-1 bg-white rounded"></span>
              <span className="w-6 h-1 bg-white rounded"></span>
            </button>
          </div>

          {/* Language Options (Hidden on Mobile) */}
          <div className="h-[86px] hidden md:block w-[74px] justify-between order-3">
            <ul className="flex justify-between w-full">
              <li className={`${inter.className}  uppercase cursor-pointer hidden md:block`}>ENG</li>
              <li className={`${inter.className}  uppercase cursor-pointer hidden md:block`}>ESP</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0  left-0 w-full h-[100%] flex-col flex justify-between bg-[#EAE4D6] text-black z-30 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
      >
        <div className="w-full h-auto md:h-full flex flex-col p-6">

          <button
            className="self-end w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Close Mobile Menu"
          >
            <span className="block w-6 h-1 bg-black rounded transform rotate-45"></span>
            <span className="block w-6 h-1 bg-black rounded transform -rotate-45 absolute"></span>
          </button>

          <ul className="flex flex-col space-y-6 mt-10 text-xl">
            <li className={`${inter.className}  uppercase cursor-pointer text-[var(--Dark-Gray)]  text-base font-medium leading-[110%] tracking-[1.6px]`}>
              <span onClick={toggleMobileProjects}>proyectos</span>
              {isMobileProjectsOpen && (
                <ul className="ml-4 mt-4 space-y-4">
                  <li>
                    <span
                      className={`${inter.className}  cursor-pointer text-[var(--Dark-Gray)]  text-base font-medium leading-[110%] tracking-[1.6px]`}
                      onClick={toggleCommercial}
                    >
                      comerciales
                    </span>
                    {isCommercialOpen && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {Object.keys(commercialImages).map((option) => (
                          <li
                            key={option}
                            className="cursor-pointer text-[var(--Dark-Gray)] font-['Roboto_Mono'] text-sm font-medium leading-[110%] tracking-[1.6px]"
                            onClick={() => {
                              setHoveredImage(commercialImages[option]);
                              setIsDropdownOpen(true);
                              setIsMobileMenuOpen(false);
                              setIsMobileProjectsOpen(false);
                            }}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li>
                    <span
                      className={`${inter.className} cursor-pointer text-[var(--Dark-Gray)]  text-base font-medium leading-[110%] tracking-[1.6px] `}
                      onClick={toggleResidential}
                    >
                      residenciales
                    </span>
                    {isResidentialOpen && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {Object.keys(residentialImages).map((option) => (
                          <li
                            key={option}
                            className={`${inter.className} cursor-pointer text-[var(--Dark-Gray)] text-sm font-medium leading-[110%] tracking-[1.6px]`}
                            onClick={() => {
                              setHoveredImage(residentialImages[option]);
                              setIsDropdownOpen(true);
                              setIsMobileMenuOpen(false);
                              setIsMobileProjectsOpen(false);
                            }}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`${inter.className}  uppercase cursor-pointer text-[var(--Dark-Gray)] font-['Roboto_Mono'] text-base font-medium leading-[110%] tracking-[1.6px]`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              nosotros
            </li>
            <li
              className={`${inter.className}  uppercase cursor-pointer text-[var(--Dark-Gray)] font-['Roboto_Mono'] text-base font-medium leading-[110%] tracking-[1.6px]`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              contacto
            </li>
          </ul>

        </div>
        <div className="mt-6">
          <div className='flex'><div
            className={`${inter.className} uppercase cursor-pointer text-[var(--Dark-Gray)]  text-base font-medium leading-[110%] tracking-[1.6px]`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ENG
          </div>
            <div
              className={`${inter.className} uppercase cursor-pointer text-[var(--Dark-Gray)] text-base font-medium leading-[110%] tracking-[1.6px]`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ESP
            </div></div>
          <div className="h-[74px] w-[90%] mb-6 flex items-center justify-center relative z-40">
            <Image
              fill
              alt="logo"
              src="/dyb-logo.svg"
              className="object-contain "
            />
          </div>
        </div>

      </div>

      {/* Desktop Dropdown */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#EAE4D6] text-black z-10 transform transition-transform duration-500 ease-in-out ${isDropdownOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="w-full h-full flex items-center relative" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={closeDropdown}
            aria-label="Close Dropdown"
          >
            <span className="block w-6 h-1 bg-black rounded transform rotate-45"></span>
            <span className="block w-6 h-1 bg-black rounded transform -rotate-45 absolute"></span>
          </button>

          <div className="w-full h-full flex">
            <div className="w-1/2 flex flex-col h-[100%] p-[38px] justify-between space-y-6 pl-10">
              <div className="flex flex-row">
                <ul className="h-[86px] flex flex-col justify-between text-xl">
                  <li className="flex items-center space-x-6">
                    <span className={`${inter.className} cursor-pointer uppercase text-[var(--Dark-Gray)]  text-base not-italic font-medium leading-[110%] tracking-[1.6px] underline decoration-[1px] decoration-[#222] text-[16px] underline-offset-2`}>
                      PROYECTOS
                    </span>
                  </li>
                  <li className={`${inter.className} cursor-pointer uppercase text-[var(--Dark-Gray)] f text-base not-italic font-medium leading-[110%] tracking-[1.6px] hover:underline hover:decoration-[1px] hover:decoration-[#222]`}>
                    NOSOTROS
                  </li>
                  <li className={`${inter.className} cursor-pointer uppercase text-[var(--Dark-Gray)]  text-base not-italic font-medium leading-[110%] tracking-[1.6px] hover:underline hover:decoration-[1px] hover:decoration-[#222]`}>
                    CONTACTO
                  </li>
                </ul>
                <div className="ml-10 relative">
                  <style jsx>{`
                    @keyframes slideInFromLeft {
                      0% {
                        transform: translateX(-30px);
                        opacity: 0;
                      }
                      100% {
                        transform: translateX(0);
                        opacity: 1;
                      }
                    }
                    .submenu {
                      transform: translateX(-30px);
                      opacity: 0;
                    }
                    .submenu-active {
                      animation: slideInFromLeft 500ms ease-in-out forwards;
                      animation-delay: 200ms;
                    }
                  `}</style>
                  <ul className="flex space-x-4 justify-between flex-col h-[52px]">
                    <li
                      className={`${inter.className} cursor-pointer text-[var(--Dark-Gray)]  text-base not-italic font-medium leading-[110%] tracking-[1.6px] hover:underline hover:decoration-[1px] hover:decoration-[#222]`}
                      onClick={toggleCommercial}
                      onMouseEnter={() => setHoveredImage('/comerciales.svg')}
                      onMouseLeave={() => setHoveredImage('/proyectos-home.svg')}
                    >
                      COMERCIALES
                      <ul
                        className={` absolute left-full top-0 ml-4 space-y-2 text-lg w-[196px] ${isCommercialOpen && isDropdownOpen ? 'submenu submenu-active' : 'submenu'
                          }`}
                      >
                        {isCommercialOpen && isDropdownOpen && (
                          <>
                            {Object.keys(commercialImages).map((option) => (
                              <li
                                key={option}
                                className ={`${inter.className} cursor-pointer hover:underline hover:decoration-[1px] hover:decoration-[#222]`}
                                onMouseEnter={() => setHoveredImage(commercialImages[option])}
                                onMouseLeave={() => setHoveredImage('/comerciales.svg')}
                              >
                                {option}
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                    </li>
                    <li
                      className= {`${inter.className} cursor-pointer text-[var(--Dark-Gray)]  text-base not-italic font-medium leading-[110%] tracking-[1.6px] hover:underline hover:decoration-[1px] hover:decoration-[#222]`}
                      onClick={toggleResidential}
                      onMouseEnter={() => setHoveredImage('/residenciales.svg')}
                      onMouseLeave={() => setHoveredImage('/proyectos-home.svg')}
                    >
                      RESIDENCIALES
                      <ul
                        className={`absolute left-full top-0 ml-4 space-y-2 text-lg w-auto ${isResidentialOpen && isDropdownOpen ? 'submenu submenu-active' : 'submenu'
                          }`}
                      >
                        {isResidentialOpen && isDropdownOpen && (
                          <>
                            {Object.keys(residentialImages).map((option) => (
                              <li
                                key={option}
                                className={`${inter.className} cursor-pointer w-[223px] hover:underline hover:decoration-[1px] hover:decoration-[#222]`}
                                onMouseEnter={() => setHoveredImage(residentialImages[option])}
                                onMouseLeave={() => setHoveredImage('/residenciales.svg')}
                              >
                                {option}
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-[152px] flex flex-col justify-between">
                <div className="h-[18px] w-full">
                  <ul className="flex w-[82px] justify-between">
                    <li className= {`${inter.className} uppercase cursor-pointer`}>ENG</li>
                    <li className={`${inter.className} uppercase cursor-pointer`}>ESP</li>
                  </ul>
                </div>
                <div className="w-[470px] h-[74px]">
                  <Image
                    width={0}
                    height={74}
                    alt="logo"
                    src="/dyb-logo.svg"
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full flex justify-end items-center">
              <div className="relative w-[100%] h-full">
                <Image
                  fill
                  priority
                  alt="esfera"
                  src={hoveredImage}
                  className="object-contain object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;