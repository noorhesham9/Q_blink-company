import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import "./about.css";
import { useState } from "react";
const typographys = {
  one: "Welcome to Q-Blink! We are a team of passionate developers who specialize in creating beautiful and functional frontend websites for businesses of all sizes. Our mission is to help our clients establish a strong online presence and achieve their digital goals through effective website development.",
  two: "At Q-Blink, we understand that your website is often the first impression customers have of your business. That's why we take great care in designing and developing websites that not only look stunning, but also provide a seamless user experience. From the initial design concept to the final product, we work closely with our clients to ensure that every detail is just right.",
  three:
    "Our team has years of experience in web development, and we pride ourselves on staying up-to-date with the latest trends and technologies in the industry. We use cutting-edge tools and techniques to create websites that are fast, responsive, and optimized for search engines. Our expertise in frontend development includes HTML, CSS, JavaScript, and experience using the React framework.",
  four: "At Q-Blink, we believe that building strong relationships with our clients is key to our success. We take the time to understand your business and your goals, and we work collaboratively with you to create a website that meets your specific needs. Whether you are looking to launch a brand new website or update an existing one or fix any bugs in your website, we are here to help.",
};
function About() {
  const [showtypo, setshowtypo] = useState([
    `${typographys.one}`,
    `${typographys.two}`,
  ]);

  const [showed, setshwed] = useState(false);
  const clickSEEmoreHandle = () => {
    {
      showed
        ? setshowtypo([`${typographys.one}`, `${typographys.two}`])
        : setshowtypo([
            ...showtypo,
            `${typographys.three}`,
            `${typographys.four}`,
          ]);
    }
    setshwed(!showed);
  };
  return (
    <Box className="section__gradient-1" py="100px">
      <Container className="containerforAbout">
        <motion.div variants={textVariant()}>
          <Typography
            sx={{
              fontSize: "var(--h1-font-size)",
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
          <div className="textsContain">
            {showtypo.map((p, index) => {
              return (
                <Typography
                  className="typographyforABout"
                  key={index}
                  fontSize={{ xs: "16px", sm: "18px" }}
                  mb="30px">
                  {p}
                </Typography>
              );
            })}
          </div>
          <div className="buttooon">
            <Button
              onClick={clickSEEmoreHandle}
              className="readmore"
              variant="outlined"
              sx={{
                borderColor: "var(--primary-color)",
                fontWeight: "bold",
                color: "var(--primary-color)",
                "&:hover": {
                  borderColor: "var(--border-color)",
                  color: "var(--text-color)",
                },
              }}>
              {showed ? "Read less" : "Read more"}
            </Button>
          </div>

          <Typography
            className="thanks"
            fontSize={{ xs: "16px", sm: "18px" }}
            mb="30px">
            Thank you for considering Q-Blink for your frontend website
            development needs. We look forward to working with you!
          </Typography>
        </motion.div>

        <Stack spacing={4} direction="row">
          <Button
            href="works"
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "black",
              marginLeft: "10px",
              // color: "var(--primary-color)",
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
            href="contact"
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
