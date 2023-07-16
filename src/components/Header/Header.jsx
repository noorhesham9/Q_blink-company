import "./header.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { useEffect } from "react";
import { useState } from "react";
import { ImageLogo, Shape, links } from "../../Constants";
import { Link } from "react-scroll";
import { Box } from "@mui/material";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState("");

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  return (
    <header className={`${scrollNav ? "header scroll-header" : "header"} `}>
      <div className="header__logo">
        <ImageLogo />
      </div>
      <div className="header__links">
        <div className="theme__toggler " onClick={toggleTheme}>
          {theme === "light-theme" ? (
            <WbSunnyIcon
              className="header__theme-sun"
              style={{
                fontSize: "30px",
              }}
            />
          ) : (
            <Brightness3Icon
              className="header__theme-moon"
              style={{
                fontSize: "30px",
              }}
            />
          )}
        </div>
        <div
          className={`${
            showMenu ? "nav__toggle animate__toggle" : "nav__toggle"
          }`}
          onClick={() => setShowMenu(!showMenu)}>
          <span></span>
          <span></span>
        </div>
        <Box className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="shape navShape">
            <Shape
              className="shape-class-1"
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
              }}
            />
            <Shape className="shape-class-2" />
          </div>
          <ul className="nav__list">
            {links.map(({ name, path }, index) => {
              return (
                <li key={index} className="nav__item">
                  <Link
                    className="nav__link text-cs"
                    to={path}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-100}
                    onClick={() => setShowMenu(!showMenu)}
                    duration={500}>
                    {name}{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Box>

        <ul className="Header__links-ul">
          <li className="active">
            <Link
              to={"home"}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              Home
            </Link>
          </li>

          <li>
            <Link
              to={"about"}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="#about">
              About
            </Link>
          </li>
          <li>
            <Link
              to={"works"}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="#projects">
              Works{" "}
            </Link>
          </li>
          {/* <li>
            <Link
              to={"team"}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="#team">
              Team{" "}
            </Link>
          </li> */}
          {/* <li>
            <Link
              to={"testimonials"}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="#testimonials">
              Testimonials{" "}
            </Link>
          </li> */}
          {/* <li>
            <Link
              to={"pricing"}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="#pricing">
              Pricing{" "}
            </Link>
          </li> */}
          <li>
            <Link
              to={"contact"}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="#contacts">
              Contacts{" "}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
