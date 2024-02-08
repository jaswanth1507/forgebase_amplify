/* eslint-disable react/no-unescaped-entities */

"use client";
import Typewriter from "typewriter-effect";
import Modal from "./utils/modal.js";
import Image from "next/image";

import { motion } from "framer-motion";
import Logo from "../public/Images/forge_base.svg";
import Homebg from "../public/Images/homebg.svg";
import Ashwave from "../public/Images/ashWave.svg";
import Person from "../public/Images/personBg.svg";
import Laptop from "../public/Images/laptop.svg";
import BlueWave from "../public/Images/blueWave.svg";
import Pc from "../public/Images/pc.svg";
import atoms from "../public/Images/atoms.svg";
import analytics from "../public/Images/analytics.svg";
import mobile from "../public/Images/mobile.svg";
import Dashboard from "../public/Images/DashBoard.svg";
import stack from "../public/Images/stack.svg";
import forgebase from "../public/Images/forge_base_by_webstrake.svg";
import personMagnet from "../public/Images/personmagnet.svg";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full text-[1rem] snap-y  snap-mandatory">
      <NavBar />
      <Element name="Home">
        <Heros />
      </Element>

      <Element name="About">
        <About1 />
        <About2 />
      </Element>

      <Element name="Courses">
        <Courses />
      </Element>
      <Element name="Features">
        <Features />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
}
const NavBar = () => {
  const handleNavItemClick = (itemName) => {
    scroll.scrollToTop(itemName, {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: "ContainerElementID",
      offset: -100,
    });
  };
  const [open, toggle] = useState(false);
  return (
    <nav
      className={`w-[100%] lg:text-[1.2rem] bg-white top-0 z-10 sticky flex flex-col md:flex-row justify-between px-2 md:px-10 pt-2 `}
    >
      <div className="w-fit flex flex-row">
        <div className={`mb-4 md:mb-0 md:mx-2 w-32 md:w-48`}>
          <Image src={Logo} />
        </div>
        <div
          className="md:hidden my-auto pb-4 pr-4 "
          onClick={() => {
            toggle(!open);
          }}
        >
          <i
            className={`fa-solid ${
              open ? "fa-angle-down rotate-180 " : "fa-angle-down "
            } fa-lg ms-2`}
          ></i>
        </div>
      </div>

      <div
        className={`flex justify-around md:m-2 ${
          open ? " " : "hidden"
        } md:flex`}
      >
        <div
          className="p-1 md:p-2 lg:mx-2 font-bold cursor-pointer"
          onClick={() => {
            handleNavItemClick("Home");
          }}
        >
          <Link to="Home" smooth={true} duration={1000}>
            Home
          </Link>
        </div>

        <div
          className="p-1 md:p-2 lg:mx-2 font-bold cursor-pointer"
          onClick={() => {
            handleNavItemClick("About");
          }}
        >
          <Link to="About" smooth={true} duration={1000}>
            About us
          </Link>
        </div>

        <div
          className="p-1 md:p-2 lg:mx-2 font-bold cursor-pointer"
          onClick={() => {
            handleNavItemClick("Courses");
          }}
        >
          <Link to="Courses" smooth={true} duration={1000}>
            Courses
          </Link>
        </div>
        <div
          className="p-1 md:p-2 lg:mx-2 font-bold cursor-pointer"
          onClick={() => {
            handleNavItemClick("Features");
          }}
        >
          <Link to="Features" smooth={true} duration={1000}>
            Features
          </Link>
        </div>

        <div
          className="p-1 md:p-2 lg:mx-2 font-bold cursor-pointer"
          onClick={() => {
            handleNavItemClick("Contact");
          }}
        >
          <Link to="Contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
const Heros = () => {
  const handleAboutClick = () => {
    scroll.scrollTo("About", {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
    });
  };
  const [modal, setmodal] = useState(false);
  const openmodal = () => {
    setmodal(true);
  };
  const closemodal = () => {
    setmodal(false);
  };
  return (
    <section
      id="Home"
      className=" w-[100%] flex flex-col md:flex-row justify-between xl:pb-10 md:h-[100px] lg:h-[600px] overflow-hidden"
    >
      <div className="w-[80%]  md:w-[60%] ml-5 md:ml-10 lg:p-10  lg:space-y-5">
        <div className=" text-5xl md:text-6xl lg:text-8xl mt-10 h-fit font-medium">
          <span className="text-[#2D3748]">forge</span>
          <span className="text-[#69B97E]">base</span>
        </div>
        <div className=" text-4xl lg:text-8xl  mt-17 w-[100%] h-fit text-black font-lg tracking-wide flex py-3 lg:py-8">
          <div className="w-full  font-medium  my-2  flex">
            <span className="bg-gray-100 h-fit z-2 me-1 md:me-4">Skills</span>
            <Typewriter
              options={{
                strings: [
                  "in place",
                  "at force",
                  "to hone",
                  "at pace",
                  "to race",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                cursorClassName: "fa-solid fa-terminal text-[#69B97E]  ",
              }}
            />{" "}
          </div>{" "}
        </div>

        <div className="w-full my-2 flex flex-wrap md:justify-start">
          <button
            onClick={openmodal}
            className="py-2 md:py-4  px-4 md:px-6 xl:px-10 my-2 xl:my-4 text-xs md:text-lg text-white rounded-lg md:rounded-xl bg-[#69B97E] md:font-semibold"
          >
            SIGN UP
          </button>

          <button
            onClick={handleAboutClick}
            className="py-2  px-4 md:px-6 xl:px-10 m-2 xl:m-4 text-xs md:text-lg text-white rounded-lg md:rounded-xl bg-[#2D3748] md:font-semibold"
          >
            <Link to="About" smooth={true} duration={1000}>
              ABOUT US
            </Link>
          </button>
          <div className={` ${modal ? "w-fit" : "hidden"} z-10`}>
            {" "}
            <Modal modal={modal} closemodal={closemodal} />
          </div>
        </div>
      </div>
      <div className="w-[100%]  flex flex-row float-right  md:w-[40%] md:-z-20  h-[100%]">
        <Image src={Homebg} alt="" className="w-[100%] h-fit" />
      </div>
    </section>
  );
};

const About1 = () => {
  return (
    <section
      id="About"
      className="w-full h-fit lg:pt-[100px] md:pt-20 snap-always  snap-center xl:h-[600px] "
    >
      <div className="flex flex-col ">
        <div className="w-[80%] mx-auto my-10 text-2xl md:text-3xl lg:text-xl xl:text-6xl m-4 font-bold text-[#2D3748] text-black font-lg flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            }}
          >
           The X-Factor:<br/>Unveiling Our Unique Edge
          </motion.div>
        </div>
        <div className="flex m-4 flex-wrap justify-around w-[85%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            }}
            className="w-full group   mx-auto m-2 md:m-4  md:w-[40%] lg:w-[30%] font-bold text-[1rem] md:text-[1rem] lg:text-[1.3rem] p-1 md:p-3 bg-[#A3C5FF] rounded-lg"
          >
            <div className="w-full flex ">
              <div className="bg-[#A3C5FF] rounded-[100%] relative bottom-[1.45rem] right-[1.45rem] p-2">
                <div className="rounded-[100%] p-2  md:p-4 bg-white">
                  <i className="fa-solid fa-rocket group-hover:animate-bounce fa-2x text-[#3D3D3D] "></i>
                </div>
              </div>
              <h1 className=" text-center p-1 mt-3 font-black text-[#333333]">
                Tailored Learning
              </h1>
            </div>
            <div className="w-[80%]  mx-2 lg:mx-4 pb-6">
              Crafted pathways for individual growth, aligning with your unique
              journey
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            }}
            className="w-full group  mx-auto m-12  md:m-4 md:w-[40%] lg:w-[30%] font-bold text-[1rem] md:text-[1rem] lg:text-[1.3rem]  p-1 md:p-3 bg-[#4EF593] rounded-lg"
          >
            <div className="w-full flex ">
              <div className="bg-[#4EF593] rounded-[100%] relative bottom-[1.45rem] right-[1.45rem] p-2">
                <div className="rounded-[100%] p-2  md:p-4 bg-white">
                  <i className="fa-solid fa-screwdriver-wrench group-hover:animate-bounce fa-2x text-[#3D3D3D] "></i>
                </div>
              </div>
              <h1 className=" text-center p-1 mt-3 font-black text-[#333333]">
                Real-World Projects
              </h1>
            </div>
            <div className="w-[80%] md:p-2 mx-2 lg:mx-4 pb-6">
              Dive into hands-on experiences that truly matter. Gain practical
              skills through immersive projects.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            }}
            className="w-full group  mx-auto m-4  md:m-4 md:w-[40%] lg:w-[30%] font-bold text-[1rem] md:text-[1rem] lg:text-[1.3rem]  p-1 md:p-3 bg-[#FFB293] rounded-lg"
          >
            <div className="w-full flex ">
              <div className="bg-[#FFB293] rounded-[100%] relative bottom-[1.45rem] right-[1.45rem] p-2">
                <div className="rounded-[100%] p-2  md:p-4 bg-white">
                  <i className="fa-solid fa-medal fa-2x group-hover:animate-bounce text-[#3D3D3D] "></i>
                </div>
              </div>
              <h1 className=" text-center p-1 mt-3 font-black text-[#333333]">
                Industry-Alligned
              </h1>
            </div>
            <div className="w-[80%] md:p-2 mx-2 lg:mx-4 pb-6">
              Our courses stay ahead of the curve, shaped by the latest industry
              trends3
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const About2 = () => {
  return (
    <section className="w-full h-fit mt-[100px] xl:pt-20 mt-20  relative xl:h-[600px] ">
      <motion.div
        initial={{ opacity: 0.5, y: -100 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
          },
        }}
      >
        <div className="w-[80%] mx-auto  text-2xl md:text-3xl  lg:text-6xl m-4 font-bold text-[#2D3748] text-black font-lg flex flex-col">
          <div>
            The Inside Scoop:<br></br>What do we do?
          </div>
        </div>
        <div className="min-h-screen  relative   w-full overflow-hidden space-y-8">
          <div className="absolute w-full  -z-10">
            <Image
              src={Ashwave}
              className="w-full h-[300px] md:h-[450px] lg:h-fit 2xl:hidden py-4"
              height={400}
            />
          </div>
          <div className="w-full flex flex-col xl:flex-row flex-wrap">
            <motion.div
              initial={{ opacity: 0.5, x: -100 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 1,
                },
              }}
              className=" w-[80%] items-center mx-auto lg:w-[40%]"
            >
              <Image src={Person} width={500} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              viewport={{ once: true }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 1,
                },
              }}
              className="w-[80%]  lg:w-[50%] mt-10 mx-auto text-[1rem] md:text-[1rem] lg:text-2xl font-medium "
            >
              <span className="font-bold">At </span>forge
              <span className="text-[#69B97E]">base</span>,{" "}
              <span className="font-bold">we empower students</span> for success
              in the professional world. Through personalized learning paths,
              real-world projects, and industry-relevant curricula, we bridge
              the gap between academic education and career readiness.
              <br />
              <br />
              <span className="font-bold">
                Our commitment is to shape future leaders
              </span>{" "}
              by nurturing skills, fostering innovation, and providing the
              guidance needed for unparalleled success.
              <br /> <br />
              <a className="font-bold">Join us on a journey</a> where your
              potential meets purpose, and forge
              <a className="text-[#69B97E]">base</a> becomes your catalyst for
              skillful triumph, ensuring you're well-prepared for internships
              and jobs in today's competitive landscape.
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
const Courses = () => {
  const [modal, setmodal] = useState(false);
  const openmodal = () => {
    setmodal(true);
  };
  const closemodal = () => {
    setmodal(false);
  };
  return (
    <section
      id="Courses"
      className="w-full xl:pt-[200px] mt-20 snap-center xl:h-[1200px]  "
    >
      <div className="flex w-full md:flex-row flex-col-reverse items-center flex-wrap">
        <div className="w-[80%] md:w-[50%] ml-6  text-xl md:text-3xl lg:text-6xl  font-bold text-[#2D3748] text-black font-lg flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, z: -100 }}
            viewport={{ once: true }}
            whileInView={{
              z: 0,
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 1,
              },
            }}
            className=" items-center"
          >
            TechBase Unvieled:
            <br /> What's Our Core
          </motion.div>

          <motion.div
            initial={{ opacity: 0, z: -100 }}
            viewport={{ once: true }}
            whileInView={{
              z: 20,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 1,
              },
            }}
            className="w-[70%]   mt-2 md:mt-4 ml-6 md:ml-2 text-lg md:text-lg lg:text-2xl font-normal text-[#7E7E7E] "
          >
            At ForgeBase, we curate tomorrow's innovators by providing immersive
            internships in cutting-edge tech domains
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.5, z: 100 }}
          viewport={{ once: true }}
          whileInView={{
            z: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          className="w-[60%] md:w-[40%] items-center  mx-auto"
        >
          <Image src={Laptop} />
        </motion.div>
      </div>

      <div className="  w-[100%] mx-auto flex flex-wrap mt-20">
        <motion.div
          onClick={openmodal}
          initial={{ opacity: 0, z: -100 }}
          viewport={{ once: true }}
          whileInView={{
            z: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          className="w-[45%] md:w-[30%] lg:[20%] lg:mt-10 sm:text-lg rounded-lg md:text-2xl hover:-translate-y-1 hover:md:scale-110 lg:text-3xl font-bold px-6 pb-8 my-4 mx-auto px-auto bg-[#FFD700] flex flex-col hover:shadow-lg transition-all duration-300"
        >
          <div className="w-[50%] md:w-full lg:relative lg:bottom-10 lg:right-[4rem] lg:ml-6">
            <Image src={Pc} width={100} />
          </div>
          <div className="w-[100%] mx-auto lg:relative lg:bottom-10 lg:left-4 ">
            Web Development
          </div>
        </motion.div>

        <motion.div
          onClick={openmodal}
          initial={{ opacity: 0, z: -100 }}
          viewport={{ once: true }}
          whileInView={{
            z: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          className="w-[45%] md:w-[30%] lg:[20%] lg:mt-10 sm:text-lg rounded-lg md:text-2xl hover:-translate-y-1 hover:md:scale-110 lg:text-3xl font-bold px-6 pb-8 my-4 mx-auto px-auto bg-[#5FAF78] flex flex-col hover:shadow-lg transition-all duration-300"
        >
          <div className="w-[50%] md:w-full lg:relative lg:bottom-10 lg:right-[4rem] lg:ml-6">
            <Image src={mobile} width={100} />
          </div>
          <div className="w-[100%] mx-auto text-white lg:relative lg:bottom-10 lg:left-4 ">
            App Development
          </div>
        </motion.div>

        <motion.div
          onClick={openmodal}
          initial={{ opacity: 0, z: -100 }}
          viewport={{ once: true }}
          whileInView={{
            z: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          className="w-[45%] md:w-[30%] lg:[20%] lg:mt-10 sm:text-lg rounded-lg md:text-2xl hover:-translate-y-1 hover:md:scale-110 lg:text-3xl font-bold px-6 pb-8 my-4 mx-auto px-auto bg-[#3D3F43] flex flex-col hover:shadow-lg transition-all duration-300"
        >
          <div className="w-[50%] md:w-full lg:relative lg:bottom-10 lg:right-[4rem] lg:ml-6">
            <Image src={stack} width={100} />
          </div>
          <div className="w-[100%] mx-auto text-white lg:relative lg:bottom-10 lg:left-4 ">
            Full Stack Development
          </div>
        </motion.div>

        <div className="relative md:top-[100px] lg:top-0 md:w-full  ">
          <div className="absolute w-full -z-10">
            <Image src={BlueWave} width={1700} />
          </div>
        </div>
        <div className={` ${modal ? "w-fit" : "hidden"} z-10`}>
          {" "}
          <Modal modal={modal} closemodal={closemodal} />
        </div>

        <motion.div
          onClick={openmodal}
          initial={{ opacity: 0, z: 100 }}
          viewport={{ once: true }}
          whileInView={{
            z: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          className="w-[45%] md:w-[30%] lg:[20%] lg:mt-10 sm:text-lg rounded-lg md:text-2xl hover:-translate-y-1 hover:md:scale-110 lg:text-3xl font-bold px-6 pb-8 my-4 mx-auto px-auto bg-[#6A0572] flex flex-col hover:shadow-lg transition-all duration-300"
        >
          <div className="w-[50%] md:w-full lg:relative lg:bottom-10 lg:right-[4rem] lg:ml-6 ">
            <Image src={analytics} width={100} />
          </div>
          <div className="w-[100%] mx-auto text-white lg:relative lg:bottom-10 lg:left-4 ">
            Data Science
          </div>
        </motion.div>

        <motion.div
          onClick={openmodal}
          initial={{ opacity: 0, z: 100 }}
          viewport={{ once: true }}
          whileInView={{
            z: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          className="w-[45%]  md:w-[30%]  lg:[20%] lg:mt-10 sm:text-lg rounded-lg md:text-2xl  lg:text-3xl font-bold px-6 pb-8 my-4 mx-auto px-auto bg-[#E95C84] flex flex-col hover:shadow-lg transition-all duration-300"
        >
          <div className="w-[50%] md:w-full lg:relative lg:bottom-10 lg:right-[4rem]    ">
            <Image src={atoms} width={100} className="" />
          </div>
          <div className="w-[100%] mx-auto lg:relative lg:bottom-10 lg:left-4 ">
            Machine Learning
          </div>
        </motion.div>
      </div>
    </section>
  );
};
const Features = () => {
  return (
    <section
      id="Features"
      className="w-[90%] mx-auto md:pt-[100px] xl:pt-[100px] sm:mt-[40px] snap-always  snap-center md:mt-[100px] mt-[100px] lg:mt-[200px] flex flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.01,
            duration: 1,
          },
        }}
        className="w-[100%] md:w-[80%] mx-auto text-2xl md:text-4xl xl:text-6xl text-[#2D3748] text-black font-bold"
      >
        Course Command Center? <br />
        Yes, A DashBoard!
      </motion.div>
      <div className="w-[100%] flex items-center justify-center mt-8 md:mt-16">
        <Image src={Dashboard} />
      </div>
      <div className="w-[90%] mx-auto font-medium text-sm md:text-base lg:text-2xl my-8 md:p-20">
        <span className="font-bold">Navigate your education seamlessly</span>{" "}
        with our dynamic dashboard. Track project progress, manage internships,
        and oversee personal details - all in one centralized, user-friendly
        interface.
        <br />
        <br />
        Stay in the loop with real-time progress tracking.{" "}
        <span className="text-[#2D3748] font-semibold">forge</span>
        <span className="text-[#69B97E] font-semibold">base</span> provides{" "}
        <span className="font-bold">granular insights</span> into your academic
        journey, allowing you to gauge your development and make informed
        decisions.
        <br />
        <br />
        Dive into a realm of tailored education. Our platform employs advanced
        algorithms to craft learning paths, ensuring you focus on areas that
        align with your{" "}
        <span className="font-bold">
          strengths and career aspirations.
        </span>{" "}
      </div>
      <div className="w-[80%] md:w-[50%] items-center mx-auto mt-8 md:mt-16">
        <Image src={personMagnet} />
      </div>
      <div className="w-[80%] md:w-[50%] mx-auto text-2xl text-center md:text-3xl lg:text-5xl font-bold">
        Embrace the allure of endless opportunity at{" "}
        <span className="text-[#2D3748] font-semibold">forge</span>
        <span className="text-[#69B97E] font-semibold">base</span> - a gateway
        to your tech success story.
      </div>
      <div className="w-[50%] md:w-[30%] items-center mx-auto m-8 mt-28">
        <Image src={forgebase} />
      </div>
    </section>
  );
};
const Contact = () => {
  return (
    <section
      id="Contact"
      className="w-full bg-[#F0F1F1] mt-[50px]  snap-center flex md:flex-row flex-col font-semibold p-8 justify-around 2xl:h-[337px] sm:pr-10"
    >
      <div className="w-full flex flex-wrap ">
        <div className="md:text-lg text-sm md:w-fit xl:w-[30%] my-auto w-[100%] items-center mr-8 md:mr-20 ">
          {" "}
          <span className="text-[#2D3748] font-semibold">forge</span>
          <span className="text-[#69B97E] font-semibold">base</span> envisions a
          future where every student navigates a successful career journey with
          skills, knowledge, and confidence. As a catalyst for educational
          innovation, we foster a global community, shaping tomorrow's leaders
          through cutting-edge technology and personalized support.
        </div>
        <div className="text-[1rem] md:w-fit flex flex-col w-[100%] items-start mx-auto p-4 md:p-10">
          <div className="font-medium pb-6  text-2xl md:text-2xl">
            Follow US
          </div>
          <div className="pb-2 flex flex-row items-center ">
            <i className="fa-brands fa-linkedin text-[#0A66C2]  fa-lg"></i>
            <div className="px-4 lg:px-4 xl:text-2xl text-[#333]">
              <a href="">LinkedIn</a>
            </div>
          </div>
          <div className="pb-2 flex flex-row items-center ">
            <i className="fa-brands fa-instagram text-[#D62976]  fa-lg"></i>
            <div className="px-4 lg:px-4 xl:text-2xl text-[#333]">
              <a href="">Instagram</a>
            </div>
          </div>
          <div className="pb-2 flex flex-row items-center ">
            <i className="fa-brands fa-telegram text-[#0099F5]  fa-lg"></i>
            <div className="px-4 lg:px-4 xl:text-2xl text-[#333]">
              <a href="">Telegram</a>
            </div>
          </div>
          <div className="pb-2 pr-1 flex flex-row items-center ">
            <i className="fa-brands fa-discord text-[##7289d9]  fa-lg"></i>
            <div className="px-4 lg:px-4 xl:text-2xl text-[#333] ">
              <a href="">Discord </a>
            </div>
          </div>
        </div>
        <div className="text-[1rem] md:w-fit flex flex-col w-[100%] items-start mx-auto p-4 md:p-10">
          <div className="font-medium pb-6  text-2xl md:text-2xl">
            Contact Us
          </div>
          <div className="pb-2 flex flex-row items-center ">
            <i className="fa-solid fa-envelope text-[#69B97E]  fa-lg"></i>
            <div className="px-2 lg:px-4 xl:text-2xl text-[#333]">
              <a href="">contact@forgebase</a>
            </div>
          </div>
          <div className="pb-2 flex flex-row items-center ">
            <i className="fa-solid fa-location-arrow text-purple-500 fa-lg"></i>
            <div className="px-2 lg:px-4 xl:text-2xl text-[#333]">
              <a href="">Chennai,Tamilnadu</a>
            </div>
          </div>
          <div className="pb-2 flex flex-row items-center ">
            <i className="fa-solid fa-external-link fa-lg"></i>
            <div className="px-2 lg:px-4 xl:text-2xl text-[#333]">
              <a href="">webStrake</a>
            </div>
          </div>
        </div>
        <div className="text-[1rem] md:w-fit flex flex-col w-[100%] items-start mx-auto p-4 md:py-10 ">
          <div className="font-medium pb-6  text-2xl md:text-2xl">Policies</div>
          <div className="pb-2 flex">
            <div className=" xl:text-2xl text-[#333]">
              <a href="">Private Policy</a>
            </div>
          </div>
          <div className="pb-2 flex">
            <div className=" xl:text-2xl text-[#333]">
              <a href="">Terms and Conditions</a>
            </div>
          </div>
          <div className="pb-2 flex">
            <div className=" xl:text-2xl text-[#333]">
              <a href="">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
