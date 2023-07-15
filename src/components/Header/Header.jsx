import "./header.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Shape, links } from "../../Constants";
import { Link } from "react-scroll";
import { Box } from "@mui/material";

const svgVariants = {
  hidden: {
    fill: "transparent",
    opacity: 0,
  },

  visible: {
    fill: "#fff",
    opacity: 1,
    transition: { duration: 2 },
  },

  hover: {
    fill: "var(--primary-color)",
    transition: {
      duration: 0.4,
    },
  },
};

const ImageLogo = () => {
  return (
    <motion.svg
      variants={svgVariants}
      initial={"hidden"}
      animate={"visible"}
      whileHover={"hover"}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{
        padding: "7px",
      }}
      viewBox="0 0 1280.000000 1253.000000">
      <g transform="translate(0.000000,1253.000000) scale(0.100000,-0.100000)">
        <path
          d="M8105 11924 c-542 -56 -1068 -245 -1645 -592 -340 -204 -728 -490
          -1083 -799 l-107 -94 -113 15 c-871 120 -1678 126 -2367 20 -1269 -196 -1960
          -747 -1960 -1564 0 -152 19 -268 66 -410 233 -698 1122 -1148 2476 -1253 92
          -7 170 -16 173 -19 3 -3 0 -57 -7 -119 -17 -159 -17 -819 0 -964 65 -528 223
          -983 470 -1355 125 -188 204 -283 366 -445 411 -411 890 -641 1491 -716 150
          -19 533 -17 685 4 347 48 682 154 1030 325 85 42 157 77 160 79 3 2 47 -77 97
          -174 150 -292 256 -532 453 -1023 279 -699 543 -1199 828 -1566 284 -367 617
          -584 1027 -667 94 -19 141 -22 325 -21 194 0 227 3 343 27 70 15 175 43 235
          63 204 67 491 224 668 365 60 48 62 51 73 113 12 70 9 84 -28 136 -61 85 -69
          90 -144 90 -69 0 -73 -1 -180 -66 -343 -206 -543 -279 -762 -278 -273 0 -471
          88 -671 295 -141 147 -310 390 -487 703 -107 187 -137 257 -390 886 -96 239
          -218 534 -272 655 -104 234 -302 635 -408 825 l-64 115 41 35 c354 303 725
          683 995 1020 614 765 981 1561 1098 2381 25 182 25 678 0 839 -72 450 -243
          813 -512 1086 -106 107 -221 198 -339 266 -39 22 -72 42 -74 44 -2 1 12 51 32
          111 61 190 80 299 80 468 0 169 -15 260 -68 418 -45 131 -113 242 -218 352
          -104 109 -200 178 -341 245 -210 100 -414 141 -722 145 -115 2 -228 1 -250 -1z
          m550 -449 c283 -59 487 -224 570 -461 23 -66 28 -101 32 -214 6 -151 -7 -240
          -55 -395 l-28 -90 -199 3 c-235 4 -361 -10 -576 -64 -475 -119 -918 -392
          -1364 -838 -192 -193 -312 -331 -470 -541 -168 -224 -385 -561 -525 -817 l-42
          -78 -81 -24 c-290 -88 -817 -194 -1100 -222 l-68 -7 20 49 c122 310 229 557
          348 809 590 1247 1335 2158 2130 2604 295 166 609 266 938 300 125 13 374 6
          470 -14z m-4430 -1365 c219 -12 651 -49 678 -59 16 -6 10 -18 -45 -87 -523
          -648 -911 -1369 -1158 -2151 l-42 -133 -68 0 c-189 0 -528 42 -735 92 -453
          108 -852 337 -1057 608 -64 84 -133 224 -159 325 -29 108 -32 330 -5 424 95
          344 456 632 1026 819 407 134 976 193 1565 162z m4655 -225 c0 -3 -33 -50 -74
          -103 -425 -562 -963 -1023 -1556 -1335 -135 -71 -309 -151 -315 -145 -2 2 38
          69 89 148 499 782 1044 1269 1565 1401 114 29 291 49 291 34z m532 -142 c153
          -112 259 -327 305 -615 25 -158 25 -682 0 -873 -102 -775 -382 -1540 -840
          -2300 -195 -323 -511 -746 -740 -990 l-65 -70 -59 57 c-166 161 -414 304 -628
          360 -114 30 -129 32 -305 32 -175 0 -191 -2 -301 -31 -267 -71 -505 -234 -704
          -481 -40 -50 -61 -69 -65 -60 -30 55 -46 381 -31 603 44 635 239 1370 578
          2184 l68 164 79 28 c154 57 444 184 626 275 409 204 782 449 1110 730 270 231
          595 584 815 886 55 75 102 137 104 138 2 0 26 -17 53 -37z m-3637 -2260 c-27
          -63 -147 -429 -174 -532 -139 -526 -185 -942 -162 -1450 28 -584 128 -992 300
          -1221 46 -61 63 -72 139 -90 44 -10 64 -9 126 5 87 19 113 37 165 113 117 172
          261 304 416 382 126 64 216 84 340 76 172 -10 286 -67 438 -217 59 -59 107
          -111 107 -116 0 -16 -213 -144 -355 -213 -276 -136 -490 -189 -786 -197 -339
          -10 -566 35 -824 163 -400 198 -732 603 -893 1089 -174 523 -182 1189 -24
          1929 l17 80 195 28 c224 32 539 91 785 147 205 47 199 46 190 24z"
        />
      </g>
    </motion.svg>
  );
};

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
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
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
