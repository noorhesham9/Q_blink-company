import { Box, Typography } from "@mui/material";
import { ImageLogo } from "../Constants";

function Footer() {
  return (
    <Box
      className="background-Color"
      borderTop="1px solid #ffffff36"
      py="5px"
      display="flex"
      justifyContent="space-between">
      <Box width="100px" height="100%">
        <ImageLogo />
      </Box>
      <Typography
        className="AboutUS"
        sx={{
          textAlign: "center",
          marginBottom: "7px",
          fontSize: { sm: "30px", lg: "50px" },
          fontWeight: "bold",
          fontFamily: "var(--second-font)",
          flexGrow: "1",
        }}>
        @2023<span style={{ color: "var(--primary-color)" }}>Q-Blink</span>
      </Typography>
    </Box>
  );
}

export default Footer;
