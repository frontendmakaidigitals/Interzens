"use client";
import React, { useRef } from "react";
import Logo from "./Logo";
import Ribbon from "./Ribbon";
import { motion, useInView } from "framer-motion";
import {
  
  Circle,
   
  ArrowUpRight,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const menu = [
    { title: "home", link: "/" },
    { title: "about", link: "/About" },
    { title: "Social Media Marketing", link: "/Social-Media-Marketing" },
    { title: "Performance Marketing", link: "/Performace-Marketing" },
    { title: "Branding & Designing", link: "/Branding-&-Designing" },
    { title: "blogs", link: "/Blogs" },
    { title: "contact", link: "/contact" },
  ];
  const legal = [
    { title: "Privacy policy", link: "/" },
    { title: "Terms & Conditions", link: "/" },
    { title: "Cookie policy", link: "/" },
  ];
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const path = usePathname();
  const renderPath = "/admin";

  return !path.includes(renderPath) ? (
    <div
      ref={ref}
      className="h-full overflow-hidden py-10 flex  flex-col justify-around  w-full bg-black"
    >
      <div className="container  grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10">
        <div className="">
          <motion.div
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            animate={{ y: inView ? 0 : 200, rotate: inView ? 0 : 10 }}
          >
            <Logo className="!w-[300px]" />
          </motion.div>
          <motion.p
            animate={{ y: inView ? 0 : 200 }}
            className={`text-indigo-50 text-md lg:text-md  font-Satoshi mt-2 lg:mt-4`}
          >
            We create possibilities for the connected world.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 w-full lg:gap-5 ">
          <motion.ul whileInView={"animate"} className="">
            <motion.p className="text-indigo-50 mb-2 font-Synonym font-[500] text-2xl lg:text-3xl">
              Menu
            </motion.p>
            {menu.map((item, index) => (
              <motion.li
                className="font-Satoshi mb-1 text-sm capitalize lg:text-lg text-purple-50 flex items-center gap-1 "
                key={index}
                animate={{ y: inView ? 0 : 130 }}
                transition={{
                  delay: index * 0.1,
                  ease: [0.22, 0.61, 0.36, 1],
                  duration: 0.7,
                }}
              >
                <Link href={item.link}>{item.title} </Link>
              </motion.li>
            ))}
          </motion.ul>
          <motion.ul className="">
            <motion.p className="text-indigo-50 mb-2 font-Synonym font-[500] text-2xl lg:text-3xl">
              Legal
            </motion.p>
            {legal.map((item, index) => (
              <motion.li
                className="font-Satoshi mb-1 text-sm lg:text-lg text-purple-50 flex items-start gap-1 "
                key={index}
                animate={{ y: inView ? 0 : 130 }}
                transition={{
                  delay: index * 0.1,
                  ease: [0.22, 0.61, 0.36, 1],
                  duration: 0.7,
                }}
              >
                {item.title}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className="col-span-2">
            <motion.p className="text-indigo-50 mb-2 font-Synonym font-[500] text-2xl lg:text-3xl">
              Address
            </motion.p>
            <p className="text-sm lg:text-lg text-slate-100">
              <span>Office</span> - Tower C, Plot No. B-8, Noida One, Sector -
              62, Noida - 201301
            </p>
            <p className="mt-2 text-sm lg:text-lg text-slate-100">
              <span>Phone</span>- +91 9819321243
            </p>
            <p className="mt-2 text-sm lg:text-lg text-slate-100">
              <span>Email</span> - info@Interzens.com
            </p>
          </motion.div>
        </div>
      </div>
      <div className="grid mt-3 lg:mt-6 grid-cols-1 lg:grid-cols-3 lg:items-end container">
        <motion.div>
          <motion.p
            animate={{ y: inView ? 0 : 180 }}
            transition={{
              ease: [0.22, 0.61, 0.36, 1],
              duration: 0.7,
            }}
            className="text-indigo-50 font-Synonym font-[500] text-lg"
          >
            Subscribe
          </motion.p>
          <motion.div
            animate={{ y: inView ? 0 : 180 }}
            transition={{
              ease: [0.22, 0.61, 0.36, 1],
              duration: 0.7,
            }}
            className="w-full relative mt-2"
          >
            <input
              placeholder="Enter your email"
              className="w-full text-purple-50 placeholder:text-slate-400 pl-5 pr-16 py-3 bg-transparent border border-[#b9b9b9] rounded-full"
            />
            <button className="text-xl overflow-hidden rounded-full flex justify-center items-center bg-purple-100 hover:bg-slate-200 text-purple-950 absolute top-1/2 right-1 -translate-y-1/2 px-4 py-1 h-11">
              <ArrowUpRight fontWeight={500} />
            </button>
          </motion.div>
        </motion.div>
        <div></div>
        <motion.div className="w-full justify-start mt-5 lg:mt-0 lg:justify-end flex">
          <motion.div
            animate={{ y: inView ? 0 : 180 }}
            transition={{
              ease: [0.22, 0.61, 0.36, 1],
              duration: 0.7,
            }}
            className="flex  text-slate-50 p-2 font-Synonym font-[500] border border-[#363636] rounded-xl justify-center items-center gap-2"
          >
            <Circle weight="fill" className="text-[.5rem] text-[#00FF6A]" />

            <span className="text-lg font-regular">Connected</span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{
          y: inView ? 0 : 300,
          scale: inView ? 1 : 0.6,
          rotateX: inView ? 0 : "40deg",
        }}
        transition={{
          ease: [0.22, 0.61, 0.36, 1],
          duration: 0.7,
        }}
        className="overflow-hidden mt-5 origin-top-left w-full"
      >
        <Ribbon
          className="  !text-purple-950 !text-lg lg:!text-7xl"
          text={`  Let's Talk ↗  `}
        />
      </motion.div>
      <div className="flex justify-between mt-3  text-purple-50  container text-sm lg:text-md items-center">
        <motion.p className="text-purple-50 hidden lg:block">
          Copyright © 2025 Interzens
        </motion.p>
        <motion.p className="text-purple-50 w-full text-center lg:w-auto">
          Designed and Developed by{" "}
          <span className="underline  font-Synonym text-purple-100 font-[600] underline-offset-4">
            Interzens
          </span>
        </motion.p>
      </div>
    </div>
  ) : null;
};

export default Footer;
