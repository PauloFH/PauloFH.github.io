"use client";
import { AnimatePresence, motion } from "framer-motion";
import { GetStaticProps } from "next";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import React, { useState,useEffect } from "react";
import { HiArrowRight, HiPhone } from "react-icons/hi";
import Image from 'next/image';
import {
  HiMenu,
  HiMenuAlt1,
  HiMenuAlt2,
  HiX,
  HiUser,
  HiCode,
  HiMail,
} from "react-icons/hi";
import MobileMenu from './MobileMenu';
import { socials } from "../constants/socials";


const Links = [
  {
    name: "About me",
    href: "/",
    icon: HiUser,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: HiCode,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: HiMail,
  },
];



type Props = {};

const Header: React.FC = ({}: Props) =>{
  
  const [navigationDrawer, setNavigationDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
    className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out pt-2  ${isScrolled ? 'bg-black bg-opacity-75 h-30 shadow-md' : 'bg-black h-30'} z-50`}
  >
      <AnimatePresence>
        {navigationDrawer && (
          <>
            <motion.div
              initial={{ opacity: 0, left: "-100%" }}
              animate={{ opacity: 1, left: "0" }}
              exit={{ opacity: 0, left: "-100%" }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] w-4/5 h-screen rounded-r-3xl bg-background2 "
            >
              <div className="relative flex flex-col justify-between w-full h-full px-5 py-10">
                <div className="flex flex-row items-center justify-between">
                  <Logo />
                  <HiX
                    className="text-3xl cursor-pointer fill-gray-200"
                    onClick={() => {
                      setNavigationDrawer(false);
                    }}
                  />
                </div>
                <nav >
                  <ul className="flex flex-col pl-4 space-y-10 ">
                    {Links.map((link) => (
                      <li key={link.name} >
                        <Link href={link.href} className="flex flex-row items-center space-x-5 blac">
                            <link.icon className="text-3xl fill-gray-200" />
                            <span className="text-xl font-bold text-gray-200">
                              {link.name}
                            </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="flex flex-row space-x-8 text-[1.1em] md:text-[1.3rem] mx-auto">
                  {socials.map((social) => {
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        rel="noopener noreferrer"
                        className="flex flex-row items-center justify-center "
                        target="_blank"
                      >
                        {
                          <social.icon className="fill-gray-400 hover:fill-blue-400" />
                        }
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 w-full h-screen bg-black "
              onClick={() => setNavigationDrawer(false)}
            >
              <div > </div>
            </motion.div>
          </>
        )}
      </AnimatePresence >
      <div className="relative z-10 w-full border-b-2 border-background2 ">
        <div className="container flex flex-row items-center justify-between px-5 py-5 mx-auto sm:py-8">
          <div className="flex flex-row items-center space-x-7 md:space-x-0">
            <div className="md:hidden">
              <HiMenuAlt2
                className="text-3xl cursor-pointer fill-gray-200"
                onClick={() => setNavigationDrawer(true)}
              />
            </div>
            <AnimatePresence initial={false} mode='wait'>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.05 }}
              >
                <Link  href="/" passHref >
                    <Logo />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-row hidden space-x-8 text-gray-100 md:flex">
            {Links.map((link, i) => {
              return (
                <Link href={link.href} key={i} passHref
                className="font-semibold text-[0.93rem] tracking-tight uppercase">
                    {link.name}
                </Link>
              );
            })}
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-row space-x-8 text-[1.1em] md:text-[1.3rem]">
              {socials.map((social) => {
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center "
                    target="_blank"
                  >
                    {
                      <social.icon className="fill-gray-200 hover:fill-blue-400" />
                    }
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;