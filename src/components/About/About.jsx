import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { SectionWrapper } from "../../hoc";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import "./about.css";
import { useState } from "react";
import { info } from "../../Constants/index";
import { useRef } from "react";
import { useEffect } from "react";
function About() {
  const [expanded, setExpanded] = useState(false);
  const [height1, setHeight1] = useState(0);
  const typo1 = useRef();

  useEffect(() => {
    if (typo1.current === undefined || typo1.current === null) {
      setHeight1(0);
    } else {
      setHeight1(typo1.current.clientHeight + 5);
    }
  }, [expanded]);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Box id="about" className="section__gradient-2" py="100px">
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
              color: "var(--text-color)",
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
            className="typographyforABout "
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

          {/* aniamte ..... */}
          <AnimatePresence>
            <motion.div
              className={expanded ? "expand textsContain" : "textsContain"}
              initial={{ height: "500px" }}
              animate={{ height: expanded ? `${height1}px` : "0" }}
              transition={{ duration: 0.5 }}
              style={{ overflow: "hidden" }}>
              {expanded && (
                <div ref={typo1}>
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
                </div>
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
              {expanded ? `Read less` : `Read more`}
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
              color: "var(--button-color)",
              marginLeft: "10px",
              width: "fit-content",
              fontWeight: "600",
              border: "1px solid var(--primary-color)",
              "&:hover": {
                backgroundColor: "transparent",
                color: "var(--primary-color)",
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
              color: "var(--button-color)",
              marginLeft: "10px",
              width: "fit-content",
              fontWeight: "600",
              border: "1px solid var(--primary-color)",
              "&:hover": {
                backgroundColor: "transparent",
                color: "var(--primary-color)",
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
