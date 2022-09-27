import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiCog, BiSearch } from "react-icons/bi";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import {AiFillHeart, AiTwotoneFileExclamation, AiOutlineLine} from 'react-icons/ai'
import {MdOutlineRemove} from 'react-icons/md'
import { FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/data-pegawai",
    name: "Data Pegawai",
    icon: <FaUser />,
  },
  {
    path: "/setting",
    name: "Setting",
    icon: <BiCog />,
  },
  {
    path: "/users",
    name: "User",
    icon: <FaUser />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "50px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Perpus Wilayah
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
                    {isOpen ? <BsArrowLeftCircleFill onClick={toggle} /> : <BsArrowRightCircleFill onClick={toggle} />}
                </div>
          </div>
          <div className="search">
            
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                className="line"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  // type="text"
                  // placeholder="Search"
                />
              ): <div className="search_icon">
              <MdOutlineRemove />
            </div>}
            </AnimatePresence>
          </div>
          <section className={isOpen ? "routes" : ""}>
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                 className={isOpen ? "link" : "link2"}
                  
                  // activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
