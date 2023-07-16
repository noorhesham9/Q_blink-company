import { Box, Typography } from "@mui/material";
import { ImageLogo } from "../Constants";
import { Link } from "react-scroll";
function Footer() {
  return (
    <Box
      className="background-Color"
      borderTop="1px solid #ffffff36"
      py="5px"
      display="flex"
      justifyContent="space-between"
      alignItems={"center"}>
      <Link
        spy={true}
        hashSpy={true}
        smooth={true}
        offset={0}
        duration={600}
        style={{
          height: "60px",
          width: "auto",
          cursor: "pointer",
        }}
        to="home">
        <ImageLogo />
      </Link>
      <Typography
        className="AboutUS"
        sx={{
          textAlign: "center",
          // marginBottom: "7px",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "var(--second-font)",
          // flexGrow: "1",
        }}>
        &copy; 2023 ALL RIGHTS RESERVED
        {/* <span ></span> */}
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "var(--second-font)",
          padding: "10px",
        }}>
        Developed By{" "}
        <Link
          to="home"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={600}
          style={{ cursor: "pointer", color: "var(--primary-color)" }}>
          Q-Blink{" "}
        </Link>
        Company
      </Typography>
    </Box>
  );
}

export default Footer;
