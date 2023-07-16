import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { SectionWrapper } from "../../hoc";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import "./about.css";
import { useState } from "react";
import { info } from "../../Constants/index";
function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className="section__gradient-1 " py="100px">
      <Container className="containerforAbout">
        <motion.div variants={textVariant()}>
          <Typography
            className="AboutUS"
            sx={{
              textAlign: "center",
              marginBottom: "7px",
              fontSize: { sm: "30px", lg: "50px" },
              fontWeight: "bold",
              fontFamily: "var(--second-font)",
            }}>
            <span style={{ color: "var(--primary-color)" }}>About</span> US
          </Typography>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          style={{
            color: "var( --text-color)",
          }}>
          <Typography
            className="typographyforABout"
            fontSize={{ xs: "16px", sm: "18px" }}
            mb="30px">
            {info.one}
          </Typography>
          <Typography
            className="typographyforABout"
            fontSize={{ xs: "16px", sm: "18px" }}
            mb="30px">
            {info.two}
          </Typography>
          <AnimatePresence>
            <motion.div
              className="textsContain"
              initial={{ height: "500px" }}
              animate={{ height: expanded ? "220px" : "0" }}
              transition={{ duration: 0.5 }}
              style={{ overflow: "hidden" }}>
              {expanded && (
                <motion.div>
                  <Typography
                    className="typographyforABout"
                    fontSize={{ xs: "16px", sm: "18px" }}
                    mb="30px">
                    {info.three}
                  </Typography>
                  <Typography
                    className="typographyforABout"
                    fontSize={{ xs: "16px", sm: "18px" }}
                    mb="30px">
                    {info.four}
                  </Typography>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}>
            <Button
              onClick={toggleExpansion}
              variant="outlined"
              sx={{
                borderColor: "var(--primary-color)",
                fontWeight: "bold",
                color: "var(--primary-color)",
                position: "relative",
                marginBottom: "30px !important",
                "&:hover": {
                  borderColor: "var(--border-color)",
                  color: "var(--text-color)",
                },
              }}>
              {expanded ? "Read less" : "Read more"}
            </Button>
          </Box>

          <Typography
            className="thanks"
            fontSize={{ xs: "16px", sm: "18px" }}
            mb="30px">
            Thank you for considering Q-Blink for your frontend website
            development needs. We look forward to working with you!
          </Typography>
        </motion.div>

        <Stack className="ourworksandbook" spacing={4} direction="row">
          <Button
            className="ourWorks"
            href="#works"
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "black",
              marginLeft: "10px",
              width: "fit-content",
              fontWeight: "600",
              border: "1px solid var(--primary-color)",
              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
              },
            }}
            variant="contained">
            Our Works
          </Button>
          <Button
            className="bookaCall"
            href="#contact"
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "black",
              marginLeft: "10px",
              width: "fit-content",
              fontWeight: "600",
              border: "1px solid var(--primary-color)",
              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
              },
            }}
            variant="contained">
            Book a Call
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default SectionWrapper(About, "about");
