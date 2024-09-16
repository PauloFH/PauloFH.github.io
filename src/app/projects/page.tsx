"use client";
import type { GetStaticProps, NextPage } from "next";
import {
  HiMail,
  HiArrowRight,
} from "react-icons/hi";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HomeLayout from "@/components/HomeLayout";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { animate, motion} from "framer-motion";
import {  useEffect, useRef, useState } from "react";
import Projects from '../../components/Projects'
const projects: NextPage = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const educationRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HomeLayout>
        <div className="w-full py-20 bg-hero-pattern bg-cover bg-black">
          <div className="container relative px-4 pt-12 pb-24 mx-auto lg:px-40 sm:pb-32 sm:pt-20">
            <motion.div
              initial={{ opacity: 0, translateX: -100 }}
              transition={{ duration: 0.4 }}
              animate={{ opacity: 1, translateX: 0 }}
            >
              <h1 className="font-black text-[3.8rem] md:text-[5rem] tracking-tight leading-[1.2] relative text-white">
                Hello,
                <br />
                I&apos;m{" "}
                <motion.div
                  initial={{ rotateZ: 0 }}
                  animate={{ rotateZ: 6 }}
                  transition={{
                    duration: 0.13,
                    delay: 0.7,
                    default: { ease: "easeInOut" },
                  }}
                  className="relative z-30 inline-block"
                >
                  <div className="inline-block mx-0 my-6 transition-all rounded-lg sm:mx-2 bg-background2">
                    <span className="px-2 py-0 sm:px-6 sm:py-2 text-[3rem] md:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                      &lt;Paulo/&gt;
                    </span>
                  </div>
                </motion.div>
              </h1>
              <div className="relative z-30 inline-block mt-10">
                <Link className="flex flex-row items-center px-3 py-2 space-x-2 text-sm font-bold border-2 rounded-md cursor-pointer sm:space-x-3 sm:px-5 sm:py-2 md:text-lg bg-background border-blue-400" href="mailto:paulorfholanda@gmail.com?subject=Web portfolio" passHref>
                  <HiMail className="fill-blue-400" />
                  <span className="text-blue-400">Contact me</span>
                </Link>
              </div>
              <div className="relative z-30 inline-block mt-10 ml-2 md:ml-5 ">
                <a
                  href="https://github.com/paulofh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center px-3 py-2 space-x-2 text-sm font-bold border-2 border-gray-400 rounded-md cursor-pointer sm:space-x-3 sm:px-5 sm:py-2 md:text-lg bg-background"
                >
                  <FaGithub className="fill-gray-400" />
                  <span className="text-gray-400">View the Code Repository</span>
                </a>
              </div>
            </motion.div>

            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                animate={{ opacity: 1 }}
              >
                <div>
                  {<img
                    src="../images/profile.jpg"

                    style={{
                      filter: "saturate(100%) sepia(10%) brightness(100%)",
                      scale: 0.5,
                      borderRadius: "50%",

                    }}
                    alt="Paulo Holanda"
                    className="absolute bottom-0 right-[-7rem] lg:right-[6rem] z-10  lg:h-[calc(100%_+_5rem)] pointer-events-none select-none"
                  />}
                </div>
                <span className="sr-only text-white">Paulo Holanda</span>
              </motion.div>
            </div>
          </div>
          <div className="relative z-10 w-full bg-background2">
            <motion.div
              className="container px-4 pt-10 mx-auto lg:px-40"
              initial={{ opacity: 0, translateY: -30 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -30 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Headline2 text="My Projects" />
              <div className="relative flex flex-row flex-wrap justify-between py-10 sm:py-16">
                <Projects />
              </div>
            </motion.div>
          </div>
          <div
            className="w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)",
            }}
          >
            <div className="container px-10 py-10 mx-auto sm:flex sm:flex-row sm:items-center sm:justify-between lg:px-40">
              <motion.div
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl sm:tracking-tight relative"
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, translateX: -30 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <span className="block">Interest aroused?</span>
                <span className="block font-bold text-blue-300 ">
                  See all of my projects
                </span>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, translateX: 30 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <Link className="inline-flex flex-row items-center justify-center px-3 py-2 mt-6 space-x-2 text-base font-bold text-white border border-transparent rounded-md sm:px-5 sm:py-3 sm:mt-0 bg-blue-500 hover:bg-blue-600"
                  href={"/projects"} passHref>

                  <HiArrowRight className="text-xl" />
                  <span>View the Projects</span>
                </Link>
              </motion.div>
            </div>
            <ScrollToTopButton />
          </div>
        </div>
      </HomeLayout>
      
    </>
  );
};

interface Headline2Props {
  text: string;
}

function Headline2({ text }: Headline2Props) {
  return (
    <motion.h2
      className="text-3xl"
      whileInView={{ translateX: 0, opacity: 1 }}
      viewport={{ once: true }}
      initial={{ translateX: -30, opacity: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.03,
      }}
    >
      <span className="text-lg text-gray-400 select-none opacity-40">
        &lt;li&gt;
      </span>
      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
        {text}
      </span>
      <span className="text-lg text-gray-400 select-none opacity-40">
        &lt;/li&gt;
      </span>
    </motion.h2>
  );
}




export default projects;
