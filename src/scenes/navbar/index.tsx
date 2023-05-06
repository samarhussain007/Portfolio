import Logo from "@/assets/Logo.svg";
import { motion } from "framer-motion";
import { useState } from "react";

import { SelectedPage } from "@/shared/types";
import LogoRed from "@/assets/LogoRed.png";

type Props = {
  isTopOfPage: boolean;
  isAboveMediumScreen: boolean;
  selectedPage: SelectedPage;
};

const Navbar = ({ selectedPage, isTopOfPage, isAboveMediumScreen }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const navBgColor = !isTopOfPage
    ? "bg-white text-primary-500"
    : "bg-transparent";

  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <nav>
      <motion.div
        className={`${flexBetween} fixed top-0 z-30 h-[100px] w-full px-12 ${navBgColor} transition-colors duration-200`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className={`${flexBetween} w-full`}>
          {/* Left Side Container */}
          <div
            className={`${flexBetween} ${
              isAboveMediumScreen ? "gap-5" : "w-full"
            }`}
          >
            <img
              alt="Logo"
              src={!isTopOfPage ? LogoRed : Logo}
              className=" h-16"
            />
            <div className="relative cursor-pointer">
              <div
                className={`${
                  !isTopOfPage ? "transparent-Button-red" : "transparent-Button"
                }`}
                onClick={() => setIsNavVisible(!isNavVisible)}
              >
                <h1>Menu</h1>
              </div>
              {isNavVisible && (
                <ul
                  className={`dropdown absolute top-16 flex ${
                    isAboveMediumScreen ? "" : "right-0"
                  } flex-row`}
                >
                  <li className=" py-[12px] font-bold text-black duration-200 hover:text-primary-500">
                    About me
                  </li>
                  <li className=" py-[12px] font-bold text-black duration-200 hover:text-primary-500">
                    Experience
                  </li>
                  <li className=" py-[12px] font-bold text-black duration-200 hover:text-primary-500">
                    Projects
                  </li>
                  <li className=" py-[12px] font-bold text-black duration-200 hover:text-primary-500">
                    Contact Me
                  </li>
                </ul>
              )}
            </div>
          </div>
          {/* Right Side Container */}
          {isAboveMediumScreen ? (
            <div className="cursor-pointer">
              <div
                className={
                  !isTopOfPage ? "transparent-Button-red" : "transparent-Button"
                }
              >
                <h1>Contact Me</h1>
              </div>
            </div>
          ) : null}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
