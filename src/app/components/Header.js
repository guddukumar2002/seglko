"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// icons import
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { IoIosStarOutline } from "react-icons/io";
import { BsVectorPen } from "react-icons/bs";
import { GiCheckeredFlag } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { MdSettingsSuggest } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCapsulePill } from "react-icons/bs";
import { LiaCapsulesSolid } from "react-icons/lia";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { CiMedicalCase } from "react-icons/ci";
import { GiDiploma } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FcProcess } from "react-icons/fc";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { FcDocument } from "react-icons/fc";
import { SiRoamresearch } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { FaAward } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { GiMedal } from "react-icons/gi";
import { FaRegClipboard } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { FaStreetView } from "react-icons/fa6";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { IoLibraryOutline } from "react-icons/io5";
import { TfiGallery } from "react-icons/tfi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoIosCafe } from "react-icons/io";
import { MdSportsVolleyball } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";

import Button from "./Sidebar/Button/Index";
import styles from "./Sidebar/Menu/style.module.css";
import Nav from "./Sidebar/Nav";

const pdfPath = "/pdfs/ManagementQuotaAdmission.pdf";

const navLinks = [
  {
    title: "About SEG",
    href: "/",
    subLinks: [
      { title: "History of SEG", href: "/about/history" },
      { title: "Why Join SEG", href: "/about/whyjoin" },
      { title: "Mission and Vision", href: "/about/mission-vision" },
      { title: "Chairman's Message", href: "/about/chairman-message" },
    ],
  },
  {
    title: "Programs",
    href: "/",
    subLinks: [
      { title: "M.Tech", href: "/programs/master-of-technology" },
      { title: "B.Tech", href: "/programs/bachelor-of-technology" },
      { title: "MBA", href: "/programs/master-of-business-administration" },
      { title: "BBA", href: "/programs/bachelor-of-business-administration" },
      { title: "MCA", href: "/programs/master-of-computer-application" },
      { title: "BCA", href: "/programs/bachelor-of-computer-application" },
      { title: "M.Pharma", href: "/programs/m-pharma" },
      { title: "B.Pharma", href: "/programs/b-pharma" },
      { title: "Diploma in Pharmacy", href: "/programs/d-pharma" },
      { title: "Diploma Programmes", href: "/programs/polytechnic" },
    ],
  },
  {
    title: "Admission",
    href: "/",
    subLinks: [
      { title: "Admission Process", href: "/admission/admission-process" },
      { title: "Eligibility Criteria", href: "/admission/eligibility" },
      { title: "Fee Structure", href: "/admission/fees-structure" },
      { title: "Management Admission Quota", href: pdfPath ,}

    ],
  },
  {
    title: "Research",
    href: "/",
    subLinks: [
      { title: "R & D Projects", href: "/research/research-projects" },
      {
        title: "Technologies Developed",
        href: "/research/technologies-developed",
      },
      { title: "Award Winning Projects", href: "/research/award-projects" },
      {
        title: "Research & Publications",
        href: "/research/research-publications",
      },
    ],
  },
  {
    title: "Our Institutions",
    href: "/",
    subLinks: [
      {
        title: "Shivdan Singh Institute of Technology and Management",
        href: "/ssitm",
      },
      { title: "Saroj Institute of Technology and Management", href: "/sitm" },
      // { title: "Saroj College of Law", href: "/" },
      { title: "Saroj College of Pharmacy", href: "/scp" },
      { title: "Saroj College of Engineering and Polytechnic", href: "/scep" },
      { title: "Lucknow Institute of Pharmacy", href: "/lip" },
      { title: "Saroj College of Law", href: "/scl" },
    ],
  },
  {
    title: "Student Zone",
    href: null,
    subLinks: [
      // { title: "Student Login", href: "/" },
      { title: "Student Notice", href: "/studentzone/student-notices" },
      // { title: "Student of the Month", href: "/" },
      // { title: "Our Gold Medalist", href: "/" },
    ],
  },
  {
    title: "Placements",
    href: "/placements",
  },
  {
    title: "Explore More",
    href: "/",
    subLinks: [
      { title: "Life @ SEG", href: "/explore-more/life-seg" },
      // { title: "Lecture Halls", href: "/" },
      { title: "Library", href: "/explore-more/library-img" },
      { title: "Gallery", href: "/explore-more/gallery" },
      { title: "Computer Labs", href: "/explore-more/computer-labs" },
      // { title: "Cafeteria", href: "/" },
      { title: "Sports", href: "/explore-more/sports" },
      { title: "Campus", href: "/explore-more/campus" },
      { title: "Transport", href: "/explore-more/transport" },
      // { title: "Hostel", href: "/" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Fee Payment",
    href: "/fees-payment",
  },
  {
    title: "Career",
    href: "/career",
  },
  {
    title: "Alumni",
    href: "https://sitmalumni.seglko.org/",
  },
];

const variants = {
  open: {
    width: 400,
    height: 550,
    top: "-15px",
    right: "-15px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 35,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const menuVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.39, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export const Header = () => {
  // State for the mobile menu open and close
  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    setActiveSubmenu(null);
  };

  // State for Sidemenu on the large devices
  const [isActive, setIsActive] = useState(false);
  // State object to manage the visibility of multiple dropdowns
  const [dropdownStates, setDropdownStates] = useState({
    about: false,
    programs: false,
    admissions: false,
    research: false,
    institutions: false,
    studentZone: false,
    placements: false,
    exploreMore: false,
  });

  // Toggle function for opening/closing dropdowns
  const toggleDropdown = (dropdown, open) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: open,
    }));
  };

  const closeAllDropdowns = () => {
    setDropdownStates({
      about: false,
      programs: false,
      admissions: false,
      research: false,
      institutions: false,
      studentZone: false,
      placements: false,
      exploreMore: false,
    });
  };
  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: {
      scaleY: 0, // Start fully closed (like a book closed)
      transformOrigin: "left top", // Transform from the top-left corner
      opacity: 0, // Start invisible
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      scaleY: 1, // Unfold like a book
      opacity: 1, // Fade in
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      scaleY: 0, // Fold back like a book
      opacity: 0, // Fade out
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Updated itemVariants for simultaneous animation
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10, // Start invisible
    },
    visible: {
      opacity: 1,
      y: 0, // Fade in simultaneously
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="flex sticky top-0  bg-white z-[5000]  xl:justify-normal xl:gap-24 justify-between items-center shadow-lg">
        <div className="nav hidden xl:flex">
          <Link href="/">
            <Image
              src="/seglogo.png"
              height={80}
              width={80}
              alt="SEG Logo"
              loading="lazy"
              className="ml-4"
            />
          </Link>
        </div>

        <nav className="hidden xl:flex z-[998]">
          <ul className="flex ">
            {/* Home */}
            <li className="group p-3 hover:bg-green-50 rounded-md">
              <Link href="/" className="flex items-center">
                <p className="text-sm ">Home</p>
              </Link>
            </li>

            {/* About Dropdown */}
            <li
              className=" p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("about", true)}
              onMouseLeave={() => toggleDropdown("about", false)}
            >
              <button
                className="flex items-center "
                onClick={() => toggleDropdown("about", !dropdownStates.about)}
              >
                <p className="text-sm ">About SEG </p>
                {dropdownStates.about ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </button>

              <AnimatePresence>
                {dropdownStates.about && (
                  <motion.div
                    className="absolute w-full mt-3 left-0 pb-3 bg-white shadow-md drop-shadow-sm "
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex ">
                      <div className="left flex flex-col gap-3 lg:w-2/5">
                        {/* History of Seg */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/about/history"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                History of SEG
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Established with a mission to empower students,
                                fostering their growth through knowledge,
                                leadership, and innovation."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Mission and Vision */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GiCheckeredFlag className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/about/mission-vision"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                {" "}
                                Mission and Vision
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Driven by a commitment to excellence, SEG aims
                                to shape the future by empowering students with
                                knowledge, leadership, and innovation."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Why Join Seg */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <IoIosStarOutline className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/about/whyjoin"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Why Join SEG
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Join SEG to unlock opportunities for personal
                                growth, academic excellence, and a supportive
                                community.
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Chairman Message */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <BsVectorPen className="text-5xl " />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/about/chairman-message"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Chairman's Message
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Under the guidance of our Chairman, SEG strives
                                to empower students with knowledge, leadership,
                                and a vision for a brighter future."
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>

                      <div className="right w-2/5 h-96 overflow-hidden">
                        <img
                          src="/AboutDropdownBanner.PNG"
                          alt="About Dropdown image"
                          className="w-full h-full object-fill"
                        />
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Programs Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("programs", true)}
              onMouseLeave={() => toggleDropdown("programs", false)}
            >
              <button
                className="flex items-center "
                onClick={() =>
                  toggleDropdown("programs", !dropdownStates.programs)
                }
              >
                <p className="text-sm ">Programs </p>
                {dropdownStates.programs ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </button>

              <AnimatePresence>
                {dropdownStates.programs && (
                  <motion.div
                    className="absolute w-full mt-3 left-0 pb-3 bg-white shadow-lg drop-shadow-xl"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-3 lg:w-2/5">
                        {/* M.Tech */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <BsPersonGear className="text-2xl" />
                          </div>

                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/master-of-technology"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Master of Technology
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our M.Tech program offers advanced skills in
                                engineering, with opportunities for research and
                                innovation."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* MBA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaPeopleGroup className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/master-of-business-administration"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Master of Business Administration
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "We offer an MBA program designed to develop
                                leadership and strategic management skills for
                                global business."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* MCA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaComputer className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/master-of-computer-application"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Masters in Computer Applications
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our MCA program equips students with expertise
                                in software development, IT, and systems
                                management."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* M.Pharm */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <LiaCapsulesSolid className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/m-pharma"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                M.Pharm
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our M.Pharm program offers in-depth knowledge
                                in pharmaceutical sciences, preparing students
                                for advanced careers."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* B.Tech */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <MdSettingsSuggest className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/bachelor-of-technology"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Bachelor of Technology
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our B.Tech program provides a solid foundation
                                in engineering, preparing you for a successful
                                career in technology."
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>

                      <div className="right flex flex-col gap-3 w-2/5">
                        {/* BBA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <MdOutlineEmojiPeople className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/bachelor-of-business-administration"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Bachelor of Business Administration
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our BBA program is designed to equip students
                                with the skills and knowledge needed for
                                leadership in business."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* BCA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <RiComputerLine className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/bachelor-of-computer-application"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Bachelor in Computer Application
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our BCA program is focused on programming,
                                system management, and application development
                                in the IT industry."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* B.Pharm */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <BsCapsulePill className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/b-pharma"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                B.Pharm
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our B.Pharm program offers a comprehensive
                                education in pharmaceutical sciences, preparing
                                students for diverse roles."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Diploma in Pharmacy */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <CiMedicalCase className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/d-pharma"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                D.Pharma
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our D.Pharma program prepares students with
                                practical skills to excel in the healthcare and
                                pharmacy sectors."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Diploma Programmes */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GiDiploma className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/programs/polytechnic"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Diploma Programmes
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our diploma programs offer practical training
                                and industry-relevant skills, ensuring career
                                readiness."
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Admissions Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("admissions", true)}
              onMouseLeave={() => toggleDropdown("admissions", false)}
            >
              <button
                className="flex items-center "
                onClick={() =>
                  toggleDropdown("admissions", !dropdownStates.admissions)
                }
              >
                <p className="text-sm ">Admission </p>
                {dropdownStates.admissions ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </button>

              <AnimatePresence>
                {dropdownStates.admissions && (
                  <motion.div
                    className="absolute w-full mt-3 left-0 pb-3 bg-white shadow-lg drop-shadow-xl"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-3 lg:w-2/5">
                        {/*  Admission Process */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FcProcess className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/admission/admission-process"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Admission Process
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Follow our seamless process to secure your seat
                                and begin your academic journey with us."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/*  Eligibility Criteria */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaPersonCircleCheck className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/admission/eligibility"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Eligibility Criteria
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Our eligibility criteria are designed to help
                                you understand the requirements for a successful
                                application."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Fee Structure*/}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FcDocument className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/admission/fees-structure"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Fee Structure
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Get all the information you need about our fee
                                structure to make an informed decision about
                                your studies."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                   
                       {/* Management Quota Admissions */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FcDocument className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            {/* PDF download triggered by text click */}
                            <a
                              href="/pdfs/ManagementQuotaAdmission.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Management Admission Quota
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Apply through our Management Quota for flexible admission and clear fee details."
                              </p>
                            </a>

                          </div>
                        </motion.li>

                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Research and Development Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("research", true)}
              onMouseLeave={() => toggleDropdown("research", false)}
            >
              <button
                className="flex items-center "
                onClick={() =>
                  toggleDropdown("research", !dropdownStates.research)
                }
              >
                <p className="text-sm ">R & D</p>
                {dropdownStates.research ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </button>

              <AnimatePresence>
                {dropdownStates.research && (
                  <motion.div
                    className="absolute w-full mt-3 pb-3 left-0 bg-white shadow-lg drop-shadow-xl"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-3 lg:w-2/5">
                        {/* M.Tech */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <SiRoamresearch className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/research/research-projects"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                R & D Projects
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Explore our innovative R&D projects, driving
                                cutting-edge research and technological
                                advancements."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/*   Technologies Developed */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GrTechnology className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/research/technologies-developed"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Technologies Developed
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "We take pride in the technologies we've
                                developed, revolutionizing industries and
                                enhancing everyday life."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* MCA */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaAward className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/research/award-projects"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Award Winning Projects
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Discover the groundbreaking work behind our
                                award-winning projects, setting new standards in
                                the field."
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* M.Pharm */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <IoBookOutline className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/research/research-publications"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Research & Publications
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Explore our extensive research and
                                publications, contributing to the advancement of
                                knowledge and industry practices."
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Our Institutions Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("institutions", true)}
              onMouseLeave={() => toggleDropdown("institutions", false)}
            >
              <Link href="#" className="flex items-center">
                <p className="text-sm ">Our Institutions</p>
                {dropdownStates.institutions ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </Link>

              <AnimatePresence>
                {dropdownStates.institutions && (
                  <motion.div
                    className="absolute w-full mt-3 pb-3 left-0 bg-white shadow-lg drop-shadow-xl h-auto"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-4 lg:w-1/3  py-2">
                        {/* Shivdan Singh Institute of Technology and Management */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/ssitm"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Shivdan Singh Institute of Technology and
                                Management
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Approved by AICTE and affiliated to
                                AKTU,Lucknow,College Code : 007
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Saroj Institute of Technology and Management */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/sitm"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Saroj Institute of Technology and Management
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Approved by AICTE and affiliated to
                                AKTU,Lucknow,College Code : 123
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Saroj College of Law */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/lip"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Lucknow Institute of Pharmacy
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Approved by Pharmacy Council of India (PCI) and
                                affiliated to AKTU
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>
                      <div className="middle flex flex-col gap-4 py-2 lg:w-1/3">
                        {/*  Saroj College of Pharmacy */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/scp"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Saroj College of Pharmacy
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Approved by Pharmacy Council of India and
                                affiliated to AKTU,Lucknow,College Code : 2031
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                        {/* Saroj College of Engineering and Polytechnic */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/scep"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Saroj College of Engineering and Polytechnic
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Approved by AICTE and affiliated to
                                AKTU
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                        {/* Saroj College of Law */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineBuildingLibrary className="text-5xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/scl"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Saroj College of Law
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Affiliated to Lucknow University
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>
                      <div className="right flex flex-col gap-3 lg:w-1/3 pr-2">
                        <Image
                          src="/segBanner.jpeg"
                          alt="our institutions banner"
                          height={600}
                          width={600}
                          className="h-full w-auto object-cover"
                        />
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Student Zone Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("studentZone", true)}
              onMouseLeave={() => toggleDropdown("studentZone", false)}
            >
              <button
                className="flex items-center "
                onClick={() =>
                  toggleDropdown("studentZone", !dropdownStates.studentZone)
                }
              >
                <p className="text-sm">Student Zone</p>
                {dropdownStates.studentZone ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </button>

              <AnimatePresence>
                {dropdownStates.studentZone && (
                  <motion.div
                    className="absolute w-full mt-3 pb-3 left-0 bg-white shadow-lg drop-shadow-xl h-auto"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-4 lg:w-1/3  py-2">
                        {/* Student Login */}
                        {/* <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <CiLogin className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Student Login
                            </h6>
                            <p className="text-gray-400 text-sm">
                              To access the SEG portal, please enter your
                              credentials.
                            </p>
                          </div>
                        </motion.li> */}

                        {/* Our Gold Medalist*/}
                        {/* <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GiMedal className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Our Gold Medalist
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "SEG proudly honors our Gold Medalist — a true
                              symbol of excellence and dedication."
                            </p>
                          </div>
                        </motion.li> */}

                        {/*   Student of the Month */}
                        {/* <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-3 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <GoTrophy className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Student of the Month
                            </h6>
                            <p className="text-gray-400 text-sm">
                              "SEG's Student of the Month shines with
                              dedication, excellence, and hard work."
                            </p>
                          </div>
                        </motion.li> */}
                      </div>
                      <div className="middle flex flex-col gap-4 py-2 lg:w-1/3">
                        {/*  Student Notice*/}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaRegClipboard className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/studentzone/student-notices"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Student Notice
                              </h6>
                              <p className="text-gray-400 text-sm">
                                "Important updates and announcements for SEG
                                students — stay informed and engaged!"
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>
                      <div className="right flex flex-col gap-3 lg:w-1/3 pr-2">
                        <Image
                          src="/segBanner.jpeg"
                          alt="our institutions banner"
                          height={600}
                          width={600}
                          className="h-full w-auto object-cover"
                        />
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Placements Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("placements", true)}
              onMouseLeave={() => toggleDropdown("placements", false)}
            >
              <Link href="/placements" className="flex items-center">
                <p className="text-sm ">Placements</p>
              </Link>
            </li>

            {/* Explore more Dropdown */}
            <li
              className="p-3 hover:bg-green-50 rounded-md"
              onMouseEnter={() => toggleDropdown("exploreMore", true)}
              onMouseLeave={() => toggleDropdown("exploreMore", false)}
            >
              <Link href="#" className="flex items-center">
                <p className="text-sm ">Explore more</p>
                {dropdownStates.exploreMore ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </Link>

              <AnimatePresence>
                {dropdownStates.exploreMore && (
                  <motion.div
                    className="absolute w-full mt-3 pb-3 left-0 bg-white shadow-lg drop-shadow-xl h-auto"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ul className="ps-14 pt-4 flex">
                      <div className="left flex flex-col gap-4 lg:w-1/3  py-2">
                        {/*  Life @ SEG */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaStreetView className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/explore-more/life-seg"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Life @ SEG
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Experience a vibrant journey of learning,
                                growth, and endless possibilities at Life @ SEG!
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/*  Lecture Halls */}
                        {/* <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <PiMapPinSimpleAreaLight className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Lecture Halls
                            </h6>
                            <p className="text-gray-400 text-sm">
                              Modern, spacious lecture halls designed to inspire
                              learning and collaboration.
                            </p>
                          </div>
                        </motion.li> */}

                        {/* Library */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <IoLibraryOutline className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/explore-more/library-img"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Library
                              </h6>
                              <p className="text-gray-400 text-sm">
                                A treasure trove of knowledge with a vast
                                collection of resources for curious minds.
                              </p>
                            </Link>
                          </div>
                        </motion.li>

                        {/* Gallery */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <TfiGallery className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/explore-more/gallery"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Gallery
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Showcasing moments, achievements, and
                                creativity—capturing the essence of our vibrant
                                community.
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>

                      <div className="middle flex flex-col gap-4 py-2 lg:w-1/3">
                        {/* Computer Labs */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <HiOutlineComputerDesktop className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/explore-more/computer-labs"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Computer Labs
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Explore modern computer labs, designed to
                                enhance learning with the latest technology and
                                hands-on experiences.{" "}
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                        {/*  Cafeteria */}
                        {/* <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <IoIosCafe className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Cafeteria
                            </h6>
                            <p className="text-gray-400 text-sm">
                              Enjoy a variety of delicious meals and snacks in a
                              lively cafeteria, perfect for relaxing and
                              socializing.
                            </p>
                          </div>
                        </motion.li> */}

                        {/* Sports*/}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <MdSportsVolleyball className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/explore-more/sports"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Sports
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Stay active and energized with a wide range of
                                sports facilities, fostering teamwork and
                                physical well-being.
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                        {/* Campus*/}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaRegBuilding className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/explore-more/campus"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Campus
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Explore a dynamic and picturesque campus,
                                designed to inspire learning, creativity, and a
                                sense of community.
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                      </div>

                      <div className="right flex flex-col gap-4 py-2 lg:w-1/3">
                        {/* Transport */}
                        <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaBus className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              href="/explore-more/transport"
                              onClick={closeAllDropdowns}
                              className="flex flex-col gap-2"
                            >
                              <h6 className="font-bold group-hover:text-blue-300 text-sm">
                                Transport
                              </h6>
                              <p className="text-gray-400 text-sm">
                                Explore Our Transport Facilities.{" "}
                              </p>
                            </Link>
                          </div>
                        </motion.li>
                        {/*  Hostel */}
                        {/* <motion.li
                          variants={itemVariants}
                          className="group flex items-center gap-6 hover:bg-blue-50 p-3 rounded-md"
                        >
                          <div>
                            <FaHotel className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <h6 className="font-bold group-hover:text-blue-300 text-sm">
                              Hostel
                            </h6>
                            <p className="text-gray-400 text-sm">
                              Enjoy a variety of delicious meals and snacks in a
                              lively cafeteria, perfect for relaxing and
                              socializing.
                            </p>
                          </div>
                        </motion.li> */}
                      </div>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Contact us */}
            <li className="p-3 hover:bg-green-50 rounded-md">
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                <p className="text-sm ">Contact us</p>
              </Link>
            </li>

            {/* SideMenu Button  */}
            <li className=" hover:bg-green-50 rounded-md">
              <div className={styles.header}>
                <motion.div
                  className={styles.menu}
                  variants={variants}
                  animate={isActive ? "open" : "closed"}
                  initial="closed"
                >
                  <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
                </motion.div>
                <Button isActive={isActive} setIsActive={setIsActive} />
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="nav xl:hidden ">
          <Link href="/">
            <Image
              src="/seglogo.png"
              height={60}
              width={60}
              alt="SEG Logo"
              className="ml-4"
            />
          </Link>
        </div>

        <div
          className="pt-2 pr-2 hover:bg-green-50 xl:hidden rounded-md"
          onClick={toggleMenu}
        >
          <p className="mr-4">Menu</p>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-[1000] left-0 top-0 w-full h-screen xl:hidden origin-top bg-yellow-400 text-black p-7"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <h1 className="text-lg text-black">SEG</h1>
                  <p
                    className="cursor-pointer text-md text-black"
                    onClick={toggleMenu}
                  >
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center text-2xl items-center gap-4"
                >
                  {navLinks.map((link, index) => (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                        subLinks={link.subLinks}
                        setActiveSubmenu={setActiveSubmenu}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeSubmenu && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-[1000] left-0 top-0 w-full h-screen xl:hidden origin-top bg-yellow-400 text-black p-7"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <h1 className="text-lg text-black">{activeSubmenu.title}</h1>
                  <p
                    className="cursor-pointer text-md text-black"
                    onClick={() => setActiveSubmenu(null)}
                  >
                    ← Back
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex text-xl flex-col h-full justify-center items-start gap-4"
                >
                  {activeSubmenu.subLinks.map((subLink, index) => (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        key={index}
                        title={subLink.title}
                        href={subLink.href}
                        setActiveSubmenu={setActiveSubmenu}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Last Div  */}
      </div>
    </>
  );
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({
  title,
  href,
  subLinks,
  setActiveSubmenu,
  toggleMenu
}) => {
  const isPdf = href?.endsWith('.pdf'); // Check if href ends with .pdf

  const handleClick = () => {
    if (subLinks && subLinks.length > 0) {
      setActiveSubmenu({ title, subLinks });
    } else if (isPdf) {
      // Handle PDF download
      window.open(href, '_blank');
      toggleMenu();
    } else {
      toggleMenu();
    }
  };

  return (
    <motion.div variants={mobileLinkVars} className="uppercase text-black">
      {subLinks && subLinks.length > 0 ? (
        <button onClick={handleClick} className="w-full text-left p-0">
          {title}
        </button>
      ) : (
        <Link 
          href={isPdf ? "#" : href}
          onClick={handleClick}
          className={isPdf ? "cursor-pointer" : ""}
        >
          {title}
        </Link>
      )}
    </motion.div>
  );
};
export default MobileNavLink;
