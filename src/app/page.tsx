"use client";
import type { GetStaticProps, NextPage } from "next";
import {
  HiAcademicCap,
  HiArrowRight,
  HiBriefcase,
  HiCode,
  HiMail,
  HiStar,
  HiUser,
} from "react-icons/hi";
import HomeLayout from "@/components/HomeLayout";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { animate, motion, useInView } from "framer-motion";
import CustomLink from "@/components/Link";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
const Home: NextPage = () => {
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
              <Headline2 text="Who am I?" />
              <div className="relative flex flex-row flex-wrap justify-between py-10 sm:py-16">
                <AboutMeItem
                  text="My name is Paulo Holanda and I live in Natal - Brazil.
                    I'm 21 years old and 
                    I'm specializing in digital game development."
                  title="About Me"
                  icon={HiUser}
                />

                <AboutMeItem
                  text={
                    <>
                      I'm studying {" "}
                      <CustomLink href="https://dimap.ufrn.br/bcc/">
                        Computer Science
                      </CustomLink>{" "}
                      in UFRN in Natal, Brazil.
                      <CustomLink
                        href=""
                        onClick={() => {
                          educationRef.current?.scrollIntoView({
                            block: "start",
                            behavior: "smooth",
                          });
                        }}
                      >
                        See more
                      </CustomLink>
                    </>
                  }
                  title="School"
                  icon={HiAcademicCap}
                />
                <AboutMeItem
                  text="Nowadays My Hobbies are running, playing games. -  I also like to read on quiet days."
                  title="Hobbies"
                  icon={HiStar}
                />
                <AboutMeItem
                  text={
                    <>
                      I have experience in Django backend development in my internship,
                      using Agile methodologies, Large Project Architecture and DevOps to
                      facilitate development and deployment.{" "}
                    </>
                  }
                  title="Work experiences"
                  icon={HiBriefcase}
                />
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
          </div>
          <div className="w-full bg-background2" ref={educationRef}>
            <div className="container flex flex-row items-center justify-between px-4 py-16 mx-auto lg:px-40 ">
              <div className="flex flex-col">
                <Headline2 text="Education" />
                <ol className="mx-3 mt-12 sm:flex">
                  <li className="relative flex-1 mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                      <HiAcademicCap className="fill-blue-900" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <motion.div
                    className="mt-3 sm:pr-8"
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, translateY: 30 }}
                    transition={{
                      duration: 0.2,
                      delay: isMobile ? 0.2 : 1.4,
                    }}
                  >
                    <h3 className="text-lg font-semibold text-white">
                      UFRN
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      February 2024 - Now
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Studying Computer Science, I was transferred from UFERSA 
                      in search of more knowledge and personal networking.
                    </p>
                  </motion.div>
                </li>
                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiAcademicCap className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{
                        duration: 0.2,
                        delay: isMobile ? 0.2 : 1.2,
                      }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        Eldorado Institute
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        October 2023 - November 2023
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      In the Hacktruck Course, I learned
                        Cloud Services Practices using Swift
                        with an emphasis on Cognitive Services,
                        programming a project called Petcare.
                      </p>
                    </motion.div>
                  </li>
                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiAcademicCap className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{
                        duration: 0.2,
                        delay: isMobile ? 0.2 : 1.0,
                      }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        UFERSA
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        February 2024 - January 2021
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      At UFERSA, I started my studies in Bachelor of Computer Science,
                        trying to understand all the available areas and looking for one that I liked to study.
                     </p>
                    </motion.div>
                  </li>

                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiAcademicCap className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{
                        duration: 0.2,
                        delay: isMobile ? 0.2 : 0.8,
                      }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        PROEX UFRN Web
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        March 2021 - July 2021
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        I participated in the extension course WEB PROGRAMMER 2020.5 held by UFRN.
                      </p>
                    </motion.div>
                  </li>
                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiAcademicCap className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{
                        duration: 0.2,
                        delay: isMobile ? 0.2 : 0.6,
                      }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        PROEX UFRN Games
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        September 2020 - January 2021
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      I participated in the Electronic Game Developer 2020.3 extension course held by UFRN
                      </p>
                    </motion.div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="w-full bg-background">
            <div className="container px-4 pt-10 pb-16 mx-auto lg:px-40">
              <Headline2 text="Skills" />
              <h3 className="pl-3 mt-8 font-semibold border-l-[0.24rem] border-l-blue-400 text-lg text-white">
                Programming Languages
              </h3>
              <div className="flex flex-row flex-wrap items-center justify-between ">
                <Skill
                  icon={<svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">

                    <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
                  </svg>

                  }
                  name="C#"
                  percentage={80}
                />

                <Skill
                  icon={

                    <svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">
                      <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
                    </svg>

                  }
                  name="Java"
                  percentage={90}
                />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between ">
                <Skill
                  icon={

                    <svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">
                      <path d="M114.906 84.145s-.172-1.04-.27-1.028l-18.823 1.817a3.062 3.062 0 00-2.77 2.84l-.516 7.413-14.566 1.04-.988-6.72a3.089 3.089 0 00-3.04-2.62H54.067a3.089 3.089 0 00-3.039 2.62l-.988 6.72-14.566-1.04-.516-7.414a3.058 3.058 0 00-2.77-2.84l-18.835-1.816c-.094-.012-.168 1.028-.266 1.028l-.024 4.074 15.954 2.574.52 7.477a3.084 3.084 0 002.843 2.847l20.059 1.434c.078.004.152.008.226.008a3.087 3.087 0 003.031-2.621l1.02-6.915h14.57l1.02 6.915a3.088 3.088 0 003.254 2.613l20.062-1.434a3.084 3.084 0 002.844-2.847l.52-7.477 15.945-2.586zm0 0" fill="#fff"></path><path d="M13.086 53.422v30.723c.059 0 .113.003.168.007L32.09 85.97a2.027 2.027 0 011.828 1.875l.582 8.316 16.426 1.172 1.133-7.672a2.03 2.03 0 012.007-1.734h19.868a2.03 2.03 0 012.007 1.734l1.133 7.672 16.43-1.172.578-8.316a2.027 2.027 0 011.828-1.875l18.828-1.817c.055-.004.11-.007.168-.007V81.69h.008V53.42c2.652-3.335 5.16-7.019 7.086-10.116-2.941-5.008-6.543-9.48-10.395-13.625a101.543 101.543 0 00-10.316 6.004c-1.64-1.633-3.484-2.965-5.3-4.36-1.782-1.43-3.79-2.48-5.696-3.703.566-4.223.848-8.379.96-12.719-4.913-2.476-10.155-4.113-15.456-5.293-2.117 3.559-4.055 7.41-5.738 11.176-2-.332-4.008-.457-6.02-.48V20.3c-.016 0-.027.004-.039.004s-.023-.004-.04-.004v.004c-2.01.023-4.019.148-6.019.48-1.683-3.765-3.62-7.617-5.738-11.176-5.3 1.18-10.543 2.817-15.457 5.293.113 4.34.395 8.496.961 12.72-1.906 1.222-3.914 2.273-5.695 3.702-1.813 1.395-3.66 2.727-5.301 4.36a101.543 101.543 0 00-10.316-6.004C12.543 33.824 8.94 38.297 6 43.305c2.313 3.629 4.793 7.273 7.086 10.117zm0 0" fill="#478cbf"></path><path d="M98.008 89.84l-.582 8.36a2.024 2.024 0 01-1.88 1.878l-20.062 1.434c-.046.004-.097.004-.144.004-.996 0-1.86-.73-2.004-1.73l-1.152-7.806H55.816l-1.152 7.805a2.026 2.026 0 01-2.148 1.727l-20.063-1.434a2.024 2.024 0 01-1.879-1.879l-.582-8.36-16.937-1.632c.008 1.82.03 3.816.03 4.211 0 17.887 22.692 26.484 50.88 26.582h.07c28.188-.098 50.871-8.695 50.871-26.582 0-.402.024-2.39.031-4.211zm0 0" fill="#478cbf"></path><path d="M48.652 65.895c0 6.27-5.082 11.351-11.351 11.351-6.266 0-11.348-5.082-11.348-11.351 0-6.266 5.082-11.344 11.348-11.344 6.27 0 11.351 5.078 11.351 11.344" fill="#fff"></path><path d="M45.922 66.566a7.531 7.531 0 01-7.535 7.532 7.534 7.534 0 01-7.535-7.532 7.534 7.534 0 017.535-7.53 7.531 7.531 0 017.535 7.53" fill="#414042"></path><path d="M64 78.277c-2.02 0-3.652-1.488-3.652-3.32v-10.45c0-1.831 1.632-3.32 3.652-3.32 2.016 0 3.656 1.489 3.656 3.32v10.45c0 1.832-1.64 3.32-3.656 3.32m15.348-12.382c0 6.27 5.082 11.351 11.351 11.351 6.266 0 11.348-5.082 11.348-11.351 0-6.266-5.082-11.344-11.348-11.344-6.27 0-11.351 5.078-11.351 11.344" fill="#fff"></path><path d="M82.078 66.566a7.53 7.53 0 007.531 7.532 7.531 7.531 0 100-15.063 7.53 7.53 0 00-7.53 7.531" fill="#414042"></path>
                    </svg>

                  }
                  name="GDScript"
                  percentage={70}
                />

                <Skill
                  icon={
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin meet"
                    >
                      <path
                        d="M70.534 69.696L53.988 53.15l.07 119.6.198 5.59c.082 2.63.57 5.598 1.384 8.674l131.104 46.23 32.772-14.52.012-.04L70.534 69.696"
                        fill="#00D2B8"
                      />
                      <path
                        d="M55.64 187.014l.008.008c-.008-.054-.036-.114-.036-.17 0 .056.008.108.028.162zm163.876 31.71l-32.772 14.52-131.096-46.222c2.504 9.608 8.048 20.408 14.014 26.314l42.784 42.54 95.13.124 11.952-37.316-.012.04z"
                        fill="#55DDCA"
                      />
                      <path
                        d="M3.034 130.116c-4.236 4.522-2.132 13.85 4.688 20.722L37.14 180.5l18.5 6.514c-.814-3.076-1.302-6.044-1.384-8.674l-.198-5.59-.07-119.6-50.954 76.966z"
                        fill="#0081C6"
                      />
                      <path
                        d="M187.82 54.686c-3.076-.786-6.026-1.272-8.7-1.356l-5.908-.204-119.224.016 165.556 165.542h.014l14.54-32.804L187.82 54.686"
                        fill="#0079B3"
                      />
                      <path
                        d="M187.67 54.654c.064.014.114.032.156.038l-.006-.006c-.036-.018-.086-.018-.15-.032zm26.448 14.078c-6.008-6.058-16.666-11.564-26.292-14.04l46.272 131.188-14.54 32.804h-.014l35.532-11.348.076-97.416-41.034-41.188z"
                        fill="#00A4E4"
                      />
                      <path
                        d="M181.338 36.298L151.684 6.862c-6.858-6.794-16.19-8.908-20.7-4.684L53.988 53.142l119.224-.016 5.908.204c2.674.084 5.624.57 8.7 1.356l-6.482-18.388z"
                        fill="#00D2B8"
                      />
                    </svg>
                  }
                  name="Dart"
                  percentage={70}
                />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between ">
                <Skill
                  icon={<svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">

                    <path fill="#00599c" d="M118.766 95.82c.89-1.543 1.441-3.28 1.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32 31.94Zm0 0"></path>
                    <path fill="#004482" d="m68.36 126.586 46.933-27.094c1.352-.781 2.582-2.129 3.473-3.672l-55.32-31.94L8.12 95.82c.89 1.543 2.121 2.89 3.473 3.672l46.933 27.094c2.703 1.562 7.13 1.562 9.832 0Zm0 0"></path>
                    <path fill="#659ad2" d="M118.766 31.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359 1.172c-2.703-1.563-7.129-1.563-9.832 0L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.196c0 1.562.55 3.3 1.441 4.843L63.445 63.88Zm0 0"></path>
                    <path fill="#fff" d="M63.445 26.035c-20.867 0-37.843 16.977-37.843 37.844s16.976 37.844 37.843 37.844c13.465 0 26.024-7.247 32.77-18.91L79.84 73.335c-3.38 5.84-9.66 9.465-16.395 9.465-10.433 0-18.922-8.488-18.922-18.922 0-10.434 8.49-18.922 18.922-18.922 6.73 0 13.017 3.629 16.39 9.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91zM92.88 57.57v4.207h-4.207v4.203h4.207v4.207h4.203V65.98h4.203v-4.203h-4.203V57.57H92.88zm15.766 0v4.207h-4.204v4.203h4.204v4.207h4.207V65.98h4.203v-4.203h-4.203V57.57h-4.207z"></path>

                  </svg>}
                  name="C++"
                  percentage={75}
                />

                <Skill
                  icon={
                    <svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">
                      <path fill="#f05138" d="M126.33 34.06a39.32 39.32 0 00-.79-7.83 28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.82 21.82 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.5 78.5 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.49 78.49 0 00.79-7.83V34.06z"></path><path fill="#fefefe" d="M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.7 32.7 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.59 12.63 7.68 26 6.35 23.5C101 91 90.37 94.33 85 96.5z"></path>
                    </svg>

                  }
                  name="Swift"
                  percentage={77}
                />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between ">
                <Skill
                  icon={
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 256 255"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin meet"
                    >
                      <defs>
                        <linearGradient
                          x1="12.959%"
                          y1="12.039%"
                          x2="79.639%"
                          y2="78.201%"
                          id="a"
                        >
                          <stop stopColor="#387EB8" offset="0%" />
                          <stop stopColor="#366994" offset="100%" />
                        </linearGradient>
                        <linearGradient
                          x1="19.128%"
                          y1="20.579%"
                          x2="90.742%"
                          y2="88.429%"
                          id="b"
                        >
                          <stop stopColor="#FFE052" offset="0%" />
                          <stop stopColor="#FFC331" offset="100%" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                        fill="url(#a)"
                      />
                      <path
                        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                        fill="url(#b)"
                      />
                    </svg>
                  }
                  name="Python"
                  percentage={75}
                />

                <Skill
                  icon={
                    <svg
                      fill="none"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 124 141.53199999999998"
                    >
                      <path
                        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                        fill="#e34f26"
                      />
                      <path
                        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                        fill="#ef652a"
                      />
                      <path
                        d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                        fill="#fff"
                      />
                    </svg>
                  }
                  name="HTML5 & CSS3 & TS"
                  percentage={75}
                />
              </div>
              <h3 className="pl-3 mt-12 font-semibold border-l-[0.24rem] border-l-blue-400 text-lg text-white">
                Frameworks
              </h3>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <Skill
                  icon={

                    <svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">
                      <g fill="#623697"><path d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 2.441 6.387 3.664 13.18 4.082 19.992v4.211c-.414 11.293-3.664 22.52-9.73 32.082-6.801 10.895-16.922 19.73-28.727 24.828A64.399 64.399 0 0165.082 128h-2.144c-11.735-.191-23.41-3.66-33.297-9.992-11.196-7.113-20.114-17.785-25.028-30.117C1.891 81.19.441 74.02 0 66.812v-4.957c.504-14.39 5.953-28.609 15.41-39.496C23.168 13.31 33.5 6.48 44.887 2.937 50.172 1.27 55.676.41 61.195 0M25.191 37.523c-.03 12.153-.011 24.305-.011 36.454 1.43.011 2.86.011 4.293.011-.075-10.433.101-20.863-.106-31.293.48.907.918 1.84 1.465 2.707C37.035 54.91 43.105 64.5 49.309 74c1.738-.023 3.476-.023 5.214.004-.003-12.16-.007-24.32.004-36.48a308.076 308.076 0 00-4.25-.012c.075 10.32-.136 20.64.125 30.949-6.507-10.352-13.101-20.645-19.695-30.945a370.85 370.85 0 00-5.516.007m38.844-.011c-.129 12.16-.004 24.32-.047 36.476 6.469-.015 12.938.024 19.41-.02a83.36 83.36 0 01.024-3.952c-5.012-.016-10.027.007-15.043-.02-.074-4.21-.004-8.426-.04-12.637 4.395-.078 8.79.012 13.18-.047-.011-1.277-.011-2.554-.019-3.832-4.387.141-8.773-.054-13.164.012.012-4.023.02-8.05.02-12.078 4.699 0 9.398-.02 14.093.012-.008-1.301 0-2.606.016-3.906-6.145-.016-12.29-.008-18.43-.008m22.602.054c.004 1.266.004 2.528.008 3.79 3.488-.04 6.972.109 10.46.035-.023 10.863.004 21.718-.011 32.574 1.46.043 2.93.035 4.39-.09-.12-5.992.118-11.988-.156-17.977.067-2.699-.07-5.394.117-8.09.106-2.14-.277-4.277-.035-6.417 3.516.047 7.035.015 10.55.015a59.774 59.774 0 01.075-3.832c-8.469-.105-16.937-.094-25.398-.008M13.55 69.094c-1.977.91-2.106 4.023-.149 5.027 1.72 1.18 4.305-.371 4.227-2.41.133-2.004-2.29-3.688-4.078-2.617m29.23 15.289c-4.277 3.469-4.226 11.195.5 14.25 2.668 1.695 6.102 1.344 8.922.215.012-.621.027-1.239.05-1.86-2.671 1.395-6.41 1.68-8.675-.61-2.965-3.237-2.297-9.269 1.613-11.476 2.211-1.164 4.907-.824 7.086.239-.007-.66-.004-1.32 0-1.98-3.097-1.099-6.922-1.04-9.496 1.222m17.207 2.71c-1.89.22-3.758 1.22-4.633 2.966-1.253 2.496-1.109 5.867.864 7.96 2.035 2.297 5.945 2.32 8.18.297 2.425-2.308 2.699-6.468.757-9.164-1.148-1.629-3.273-2.183-5.168-2.058m17.887 2.722c-1.66 2.883-1.332 7.25 1.598 9.211 2.183 1.22 4.933.832 7.074-.308-.004-.617.004-1.235.031-1.848-1.687 1.07-3.937 1.856-5.812.777-1.309-.722-1.704-2.257-1.914-3.625 2.875-.039 5.746-.082 8.625-.074-.075-1.828-.118-3.894-1.45-5.308-2.199-2.43-6.644-1.657-8.152 1.175m-8.414-2.336v12.008c.652 0 1.312 0 1.973.004.023-2.195-.04-4.394.023-6.594.016-1.27.527-2.558 1.484-3.414.801-.605 1.883-.27 2.801-.246-.012-.636-.02-1.27-.023-1.902-1.793-.398-3.336.652-4.242 2.117-.02-.633-.04-1.266-.051-1.894-.656-.024-1.313-.051-1.965-.079zm0 0"></path><path d="M58.758 89.223c1.652-.805 4.023-.41 4.945 1.3 1.05 1.887 1.027 4.383-.137 6.211-1.52 2.286-5.527 1.786-6.523-.742-1.008-2.258-.617-5.484 1.715-6.77zm0 0M79.04 92.414c.046-1.574 1.144-3.137 2.726-3.48.976-.164 2.097.007 2.773.793.672.714.813 1.714.98 2.64-2.16.012-4.32-.031-6.48.047zm0 0"></path></g>
                    </svg>

                  }
                  name=".Net Core"
                  percentage={90}
                />
                <Skill
                  icon={

                    <svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">
                      <path d="m63.991 128 51.702-29.855-19.817-11.461-20.26 11.704a1.151 1.151 0 0 1-1.125-.009 1.145 1.145 0 0 1-.568-.975V69.608c0-.819.424-1.56 1.133-1.968L99.13 53.737a1.119 1.119 0 0 1 1.124.009c.352.195.572.564.576.966V78.11l19.83 11.454V29.855L63.99 62.566Zm0 0"></path><path fill="#4d4d4d" d="m52.397 98.401-20.27-11.718-19.832 11.46L63.991 128V62.566L7.34 29.854V89.56l19.825-11.45V54.714c.009-.401.225-.77.572-.966a1.13 1.13 0 0 1 1.13-.009L52.953 67.64a2.275 2.275 0 0 1 1.133 1.97v27.8a1.156 1.156 0 0 1-.565.98 1.131 1.131 0 0 1-1.124.012"></path><path fill="gray" d="M68.959 0v22.9L89.22 34.597c.348.203.555.576.555.984 0 .403-.212.772-.555.975L65.137 50.468a2.302 2.302 0 0 1-2.27 0L38.791 36.556a1.122 1.122 0 0 1-.56-.975 1.127 1.127 0 0 1 .56-.984L59.048 22.9V0L7.339 29.855l56.652 32.711 56.665-32.71Zm0 0"></path>
                    </svg>

                  }
                  name="Unity"
                  percentage={78}
                />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <Skill
                  icon={

                    <svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">
                      <path d="M114.906 84.145s-.172-1.04-.27-1.028l-18.823 1.817a3.062 3.062 0 00-2.77 2.84l-.516 7.413-14.566 1.04-.988-6.72a3.089 3.089 0 00-3.04-2.62H54.067a3.089 3.089 0 00-3.039 2.62l-.988 6.72-14.566-1.04-.516-7.414a3.058 3.058 0 00-2.77-2.84l-18.835-1.816c-.094-.012-.168 1.028-.266 1.028l-.024 4.074 15.954 2.574.52 7.477a3.084 3.084 0 002.843 2.847l20.059 1.434c.078.004.152.008.226.008a3.087 3.087 0 003.031-2.621l1.02-6.915h14.57l1.02 6.915a3.088 3.088 0 003.254 2.613l20.062-1.434a3.084 3.084 0 002.844-2.847l.52-7.477 15.945-2.586zm0 0" fill="#fff"></path><path d="M13.086 53.422v30.723c.059 0 .113.003.168.007L32.09 85.97a2.027 2.027 0 011.828 1.875l.582 8.316 16.426 1.172 1.133-7.672a2.03 2.03 0 012.007-1.734h19.868a2.03 2.03 0 012.007 1.734l1.133 7.672 16.43-1.172.578-8.316a2.027 2.027 0 011.828-1.875l18.828-1.817c.055-.004.11-.007.168-.007V81.69h.008V53.42c2.652-3.335 5.16-7.019 7.086-10.116-2.941-5.008-6.543-9.48-10.395-13.625a101.543 101.543 0 00-10.316 6.004c-1.64-1.633-3.484-2.965-5.3-4.36-1.782-1.43-3.79-2.48-5.696-3.703.566-4.223.848-8.379.96-12.719-4.913-2.476-10.155-4.113-15.456-5.293-2.117 3.559-4.055 7.41-5.738 11.176-2-.332-4.008-.457-6.02-.48V20.3c-.016 0-.027.004-.039.004s-.023-.004-.04-.004v.004c-2.01.023-4.019.148-6.019.48-1.683-3.765-3.62-7.617-5.738-11.176-5.3 1.18-10.543 2.817-15.457 5.293.113 4.34.395 8.496.961 12.72-1.906 1.222-3.914 2.273-5.695 3.702-1.813 1.395-3.66 2.727-5.301 4.36a101.543 101.543 0 00-10.316-6.004C12.543 33.824 8.94 38.297 6 43.305c2.313 3.629 4.793 7.273 7.086 10.117zm0 0" fill="#478cbf"></path><path d="M98.008 89.84l-.582 8.36a2.024 2.024 0 01-1.88 1.878l-20.062 1.434c-.046.004-.097.004-.144.004-.996 0-1.86-.73-2.004-1.73l-1.152-7.806H55.816l-1.152 7.805a2.026 2.026 0 01-2.148 1.727l-20.063-1.434a2.024 2.024 0 01-1.879-1.879l-.582-8.36-16.937-1.632c.008 1.82.03 3.816.03 4.211 0 17.887 22.692 26.484 50.88 26.582h.07c28.188-.098 50.871-8.695 50.871-26.582 0-.402.024-2.39.031-4.211zm0 0" fill="#478cbf"></path><path d="M48.652 65.895c0 6.27-5.082 11.351-11.351 11.351-6.266 0-11.348-5.082-11.348-11.351 0-6.266 5.082-11.344 11.348-11.344 6.27 0 11.351 5.078 11.351 11.344" fill="#fff"></path><path d="M45.922 66.566a7.531 7.531 0 01-7.535 7.532 7.534 7.534 0 01-7.535-7.532 7.534 7.534 0 017.535-7.53 7.531 7.531 0 017.535 7.53" fill="#414042"></path><path d="M64 78.277c-2.02 0-3.652-1.488-3.652-3.32v-10.45c0-1.831 1.632-3.32 3.652-3.32 2.016 0 3.656 1.489 3.656 3.32v10.45c0 1.832-1.64 3.32-3.656 3.32m15.348-12.382c0 6.27 5.082 11.351 11.351 11.351 6.266 0 11.348-5.082 11.348-11.351 0-6.266-5.082-11.344-11.348-11.344-6.27 0-11.351 5.078-11.351 11.344" fill="#fff"></path><path d="M82.078 66.566a7.53 7.53 0 007.531 7.532 7.531 7.531 0 100-15.063 7.53 7.53 0 00-7.53 7.531" fill="#414042"></path>
                    </svg>

                  }
                  name="Godot"
                  percentage={75}
                />
                <Skill
                  icon={
                    <svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">
                      <path fill="#5c2d91" d="M127.352 43.199c-5.727 35.891-36.562 62.379-72.902 62.633-3.566.137-7.137-.082-10.656-.648-15.18-2.574-26.496-15.402-27.16-30.785.125-17.336 14.148-31.359 31.488-31.484S79.68 56.617 80.047 73.953c.129 5.254-2.145 9.871-6.824 10-5 0-7.344-3.57-7.344-8.379V62.215c.004-4.496-3.621-8.156-8.117-8.191H46.559c-8.977-.062-16.832 6.012-19.035 14.715s1.824 17.781 9.75 21.996a19.5 19.5 0 0 0 23.688-4.223l.391-.582.391.645c2.738 3.719 7.152 5.82 11.762 5.602A15.54 15.54 0 0 0 87.902 75.93c.039-3.48-.348-6.949-1.16-10.328a39.57 39.57 0 0 0-42.969-30.926C23.645 36.879 8.43 53.922 8.512 74.168c.262 21.543 17.512 39.023 39.047 39.566 0 0 2.93.266 6.242.195a84.49 84.49 0 0 0 45.289-13.516c.191-.125.383.129.254.328a66.49 66.49 0 0 1-51.785 21.18c-12.75.23-25.039-4.762-34.02-13.812S-.332 86.723 0 73.977a48.37 48.37 0 0 1 19.426-38.73 47.38 47.38 0 0 1 27.941-9.223h15.031a42.29 42.29 0 0 0 31.203-13.777.59.59 0 0 1 .68-.141c.238.102.379.344.359.598-.637 6.758-2.887 13.262-6.562 18.969-.109.203-.09.453.051.633a.58.58 0 0 0 .598.215 45.45 45.45 0 0 0 31.602-26.055.8.8 0 0 1 1.367 0 57.58 57.58 0 0 1 5.656 36.734zM46.52 61.824c-6.422 0-11.633 5.207-11.633 11.633A11.64 11.64 0 0 0 46.52 85.09c6.426 0 11.633-5.211 11.633-11.633V62.602a.84.84 0 0 0-.801-.801zm0 0"></path>
                    </svg>

                  }
                  name="Blazor"
                  percentage={90}
                />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <Skill
                  icon={

                    <svg viewBox="0 0 128 128" height="26">
                      <path fill="#FFFFFF" d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"></path>
                    </svg>

                  }
                  name="NextJS"
                  percentage={75}
                />
                <Skill
                  icon={
                    <svg
                      viewBox="0 0 1999 2474.2"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <linearGradient
                        id="a"
                        gradientTransform="matrix(380.4042 -380.4175 -53.104 -53.1021 908228.3125 -700059.5)"
                        gradientUnits="userSpaceOnUse"
                        x1="-2115.0029"
                        x2="-2115.0029"
                        y1="1930.7407"
                        y2="1929.7407"
                      >
                        <stop offset=".2" stopOpacity=".15" />
                        <stop
                          offset=".85"
                          stopColor="#616161"
                          stopOpacity=".01"
                        />
                      </linearGradient>
                      <linearGradient
                        id="b"
                        gradientTransform="matrix(565.291 0 0 -380.9571 1196694.25 743476.5625)"
                        gradientUnits="userSpaceOnUse"
                        x1="-2115.2688"
                        x2="-2114.2688"
                        y1="1946.3563"
                        y2="1946.3563"
                      >
                        <stop offset=".2" stopOpacity=".55" />
                        <stop
                          offset=".85"
                          stopColor="#616161"
                          stopOpacity=".01"
                        />
                      </linearGradient>
                      <path
                        d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381"
                        fill="#42a5f5"
                        fillOpacity=".8"
                      />
                      <path
                        d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3"
                        fill="#0d47a1"
                      />
                      <path
                        d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z"
                        fill="#42a5f5"
                      />
                      <path
                        d="m952 2188.5 380.4-380.4 53.1 53.1-380.4 380.4z"
                        fill="url(#a)"
                      />
                      <path
                        d="m951.7 2188.8 565.3-195.3-184.3-185.7"
                        fill="url(#b)"
                      />
                    </svg>
                  }
                  name="Flutter"
                  percentage={75}
                />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <Skill
                  icon={
                    <svg viewBox="0 0 128 128" width="26" height="26" x="6" y="6">
                      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M20 96.9v-8.1c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.9 1.8 1.9v17c0 4.1-2 7.4-5.6 9.5-1.7 1-3.5 1.5-5.4 1.5h-.8c-4.1 0-7.4-2-9.5-5.6-1-1.7-1.5-3.5-1.5-5.4v-.8c0-4.1 2-7.4 5.6-9.5 1.7-1 3.5-1.5 5.4-1.5h.8c2.7.1 5.1 1.1 7.1 2.9zm-15.1 8.5c0 3 1.5 5.2 4.1 6.7 1.1.6 2.2.9 3.4.9 2.9 0 5.1-1.4 6.6-3.9.7-1.2 1-2.4 1-3.8 0-2.6-1.2-4.6-3.3-6.1-1.3-.9-2.7-1.4-4.2-1.4-3.2 0-5.5 1.6-6.9 4.5-.5 1-.7 2.1-.7 3.1zm32.2-11.3h.5c4.4 0 7.8 2.1 9.9 6 .9 1.5 1.3 3.2 1.3 5v.8c0 4.1-2 7.4-5.6 9.5-1.7 1-3.5 1.5-5.4 1.5H37c-4.1 0-7.4-2-9.5-5.6-1-1.7-1.5-3.5-1.5-5.4v-.8c0-4.1 2.1-7.4 5.6-9.5 1.7-1.1 3.6-1.5 5.5-1.5zm-7.2 11.3c0 2.9 1.4 5 3.9 6.5 1.2.7 2.4 1 3.8 1 2.9 0 5-1.5 6.5-3.9.7-1.2 1-2.4 1-3.8 0-2.7-1.3-4.8-3.5-6.3-1.2-.8-2.6-1.2-4-1.2-3.2 0-5.5 1.6-6.9 4.5-.6 1.1-.8 2.2-.8 3.2zm34.8-7.2c-.6-.3-1.7-.4-2.3-.4-3.2-.1-5.5 1.7-6.9 4.5-.5 1-.7 2-.7 3.1 0 3.3 1.7 5.6 4.6 7 1.1.5 2.4.6 3.6.6 1 0 2.5-.6 3.4-1.1l.2-.1h.8c.9.2 1.5.7 1.5 1.7v.4c0 2.3-4.3 2.9-5.9 3-5.7.4-10-2.7-11.6-8.2-.3-.9-.4-1.9-.4-2.9v-.8c0-4.1 2.1-7.4 5.6-9.5 1.7-1 3.5-1.5 5.4-1.5h.8c2 0 3.9.6 5.6 1.7l.1.1.1.1c.2.3.3.6.3 1v.4c0 1-.7 1.5-1.6 1.7H67c-.5 0-1.8-.6-2.3-.8zm12.4 2.6c1.5-1.5 3-3 4.5-4.4.4-.4 2-2.1 2.6-2.1h.8c.9.2 1.5.7 1.5 1.7v.4c0 .6-.7 1.4-1.2 1.8l-2.7 2.7-4.6 4.7c2 2 4 4 5.9 6l1.6 1.7c.2.2.5.4.6.7.2.3.3.6.3.9v.5c-.2.9-.8 1.6-1.7 1.6h-.3c-.6 0-1.3-.7-1.8-1.1-.9-.8-1.8-1.7-2.6-2.6l-2.9-2.9v4.6c0 1.1-.7 1.9-1.8 1.9H75c-1.1 0-1.8-.9-1.8-1.9V88.9c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.8 1.8 1.9v11.9zm47.6-6.6h.4c1.1 0 1.9.8 1.9 1.9 0 1.6-1.5 2-2.8 2-1.7 0-3.4 1-4.5 2.2-1.5 1.5-2.1 3.3-2.1 5.4v9.2c0 1.1-.7 1.9-1.8 1.9h-.3c-1.1 0-1.8-.9-1.8-1.9v-9.8c0-3.8 1.8-6.8 4.9-9 1.8-1.2 3.9-1.9 6.1-1.9zm-27.1 18.3c1.4.5 3 .4 4.4.2.7-.3 2.6-1.1 3.3-1h.2c.4.2.8.5 1 .9.5 1 .3 2-.7 2.6l-.3.2c-3.6 2.1-7.5 1.8-11.1-.2-1.7-.9-3-2.3-4-4l-.2-.4c-2.3-4-2-8.3.6-12.1.9-1.3 2.1-2.3 3.5-3.1l.5-.3c3.4-2 7.1-1.8 10.6-.1 1.9.9 3.4 2.3 4.5 4.1l.2.3c.8 1.3-.2 2.5-1.2 3.3-1.2.9-2.4 2-3.5 3-2.7 2.2-5.3 4.4-7.8 6.6zm-3.3-2.3l8.5-7.3c1-.8 2-1.7 3-2.6-.8-1-2.1-1.7-3.1-2.1-2.2-.8-4.4-.6-6.4.6-2.6 1.5-3.8 4-3.7 7 0 1.2.4 2.3 1 3.4.2.4.4.7.7 1M73.7 33.7H85v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V33.7h11.3V22.4h22.5V11.1h13.5v22.6z"></path><path fill="#00AADA" d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.4c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.6-10.5-1.8-13.9-.1z"></path><path fill="#28B8EB" d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.3.2-.5.2z"></path><path fill="#028BB8" d="M18.5 54.6c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.5v-.1z"></path><path fill="#019BC6" d="M23.3 54.6c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.3z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M28.2 35.5H38v9.8h-9.8v-9.8zm.8.9h.8v8.1H29v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1H32v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1-12.1h9.8V34h-9.8v-9.7zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE" d="M39.5 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M50.8 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1H53v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1H56v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE" d="M50.8 24.3h9.8V34h-9.8v-9.7zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1H53v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1H56v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zM62 35.5h9.8v9.8H62v-9.8zm.9.9h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M62 24.3h9.8V34H62v-9.7zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE" d="M62 13h9.8v9.8H62V13zm.9.8h.8V22h-.8v-8.2zm1.4 0h.8V22h-.8v-8.2zm1.5 0h.8V22h-.8v-8.2zm1.5 0h.8V22h-.8v-8.2zm1.4 0h.8V22h-.8v-8.2zm1.5 0h.8V22h-.8v-8.2z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M73.3 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1H80v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#D4EEF1" d="M48.6 61.2c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7.1-1.5 1.3-2.7 2.7-2.7"></path><path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M48.6 61.9c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .9-1.9 1.9-1.9M1 55.6h125.3c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.8 4.5-7.5 5.2"></path><path fill="#BFDBE0" d="M55.8 80.6c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6.1 6.1 13.7 10.8 27.6 10.9 1-.1 2-.1 3-.1z"></path><path fill="#D4EEF1" d="M45.9 72.7c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.4 1.3 5.8 2.5 11.4 2.9z"></path>
                    </svg>
                  }
                  name="Docker"
                  percentage={87}
                />
                <Skill
                  icon={
                    <svg viewBox="0 0 128 128" width="24" height="24">
                      <path d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z" fill="white"></path>
                      <path d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z" fill="white"></path>
                    </svg>
                  }
                  name="Django"
                  percentage={80}
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-background2">
            <div className="container flex flex-row items-center justify-between px-4 pt-10 pb-16 mx-auto lg:px-40 ">
              <div className="flex flex-col">
                <Headline2 text="Experience" />
                <ol className="mx-3 mt-12 sm:flex">
                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiCode className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{ duration: 0.2, delay: 1.4 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        backend developer internship
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        September 2024 - Now
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      I have experience in Django backend development in my internship,
                      using Agile methodologies, Large Project Architecture and DevOps to
                      facilitate development and deployment. 
                      </p>
                    </motion.div>
                  </li>

                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiCode className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{ duration: 0.2, delay: 1.2 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        Back End Programmer
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        August 2023 - October 2023
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </motion.div>
                  </li>

                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiCode className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{ duration: 0.2, delay: 1.0 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        Robótica nas Escolas Pensare
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        January 2023 - November 2023
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </motion.div>
                  </li>

                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiCode className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{ duration: 0.2, delay: 0.8 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        Front-End Programmer
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        September 2022 - August 2023
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </motion.div>
                  </li>

                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiCode className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{ duration: 0.2, delay: 0.6 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        PEGAZULS Aerodesign
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        April 2022 - August 2022
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </motion.div>
                  </li>

                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiCode className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{ duration: 0.2, delay: 0.4 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        administrative assistant in FAN
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        May 2022 - July 2023
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </motion.div>
                  </li>

                  <li className="relative flex-1 mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-400 sm:ring-8 ring-gray-800 shrink-0">
                        <HiCode className="fill-blue-900" />
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <motion.div
                      className="mt-3 sm:pr-8"
                      whileInView={{ opacity: 1, translateY: 0 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, translateY: 30 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        freelance web programming
                      </h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        January 2021 - November 2021
                      </time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </motion.div>
                  </li>
                </ol>
              </div>
            </div>
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

interface AboutMeItemProps {
  title: string;
  text: any;
  icon: any;
}

const AboutMeItem: React.FC<AboutMeItemProps> = (props: AboutMeItemProps) => {
  return (
    <div className="flex flex-row items-center w-full my-5 space-x-7 md:w-1/2 lg:px-5">
      <div className="flex flex-col items-center justify-center w-8 h-8 rounded-lg ">
        <props.icon className="w-8 h-8 fill-gray-400" />
      </div>
      <div className="flex flex-col items-start justify-start pr-0 ">
        <div className="relative">
          <h3 className="mb-3 text-xl font-semibold text-white after:w-full">
            {props.title}
          </h3>
          <div className="absolute w-[calc(100%+0.6rem)] h-[2px] bg-gray-400 rounded-md bottom-[0.6rem] left-[-0.3rem] opacity-30"></div>
        </div>

        <p className="text-gray-400 text-md">{props.text}</p>
      </div>
    </div>
  );
};

interface ISkillProps {
  name: string;
  icon: any;
  percentage: number;
}

function Skill({ name, icon, percentage }: ISkillProps) {
  const spanref = useRef<HTMLSpanElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (!isInView || hasRendered == true) return;
    const controls = animate(0, percentage, {
      duration: 0.5,

      onUpdate(value) {
        if (!spanref.current) return;
        spanref.current.textContent = value.toFixed(0) + "%";
      },
      onComplete() {
        setHasRendered(true);
      },
    });
    return () => controls.stop();
  }, [isInView, hasRendered, percentage]);

  return (
    <div className="w-full sm:w-[43%] mt-6 ml-6 mr-8 sm:mx-0" ref={ref}>
      <div className="flex flex-col space-y-2">
        <motion.div
          className="flex flex-row items-center space-x-3"
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          initial={{ translateY: -30, opacity: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
        >
          {icon}
          <h4 className="font-semibold text-gray-400">{name}</h4>
        </motion.div>

        <div className="relative w-full h-4 rounded-md bg-background2">
          <span className="absolute left-[-1.4rem] text-[0.8rem] top-[-0.13rem] text-gray-500">
            0%
          </span>
          <span className="absolute right-[-2.3rem] text-[0.8rem] top-[-0.13rem] text-gray-500">
            100%
          </span>
          <div className="relative mx-1 mt-1">
            <motion.div
              style={{ width: percentage + "%" }}
              className="relative h-2 rounded-md bg-blue-500"
              whileInView={{ width: percentage + "%" }}
              viewport={{ once: true }}
              initial={{ width: 0 }}
              transition={{
                duration: 0.5,
              }}
            >
              <span
                ref={spanref}
                className="absolute top-[-1.6rem] text-[0.8rem] text-blue-500 font-semibold right-[-0.8rem]"
              >
                {percentage.toString() + "%"}
              </span>
            </motion.div>

          </div>
        </div>

      </div>
      <ScrollToTopButton />
    </div>

  );
}

export default Home;
