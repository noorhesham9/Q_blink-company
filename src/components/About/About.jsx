import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
function About() {
  return (
    <Box className="section__gradient-1" py="100px">
      <Container>
        <motion.div variants={textVariant()}>
          <Typography
            sx={{
              fontSize: { xs: "26px", sm: "45px" },
              fontWeight: "bold",
              fontFamily: "second-font",
            }}>
            <span style={{ color: "var(--primary-color)" }}>About</span> Company
          </Typography>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <Typography fontSize={{ xs: "18px", sm: "20px" }} mb="30px">
            Welcome to Q-Blink! We are a team of passionate developers who
            specialize in creating beautiful and functional frontend websites
            for businesses of all sizes. Our mission is to help our clients
            establish a strong online presence and achieve their digital goals
            through effective website development.
          </Typography>
          <Typography fontSize={{ xs: "18px", sm: "20px" }} mb="30px">
            At Q-Blink, we understand that your website is often the first
            impression customers have of your business. That's why we take great
            care in designing and developing websites that not only look
            stunning, but also provide a seamless user experience. From the
            initial design concept to the final product, we work closely with
            our clients to ensure that every detail is just right.
          </Typography>
          <Typography fontSize={{ xs: "18px", sm: "20px" }} mb="30px">
            Our team has years of experience in web development, and we pride
            ourselves on staying up-to-date with the latest trends and
            technologies in the industry. We use cutting-edge tools and
            techniques to create websites that are fast, responsive, and
            optimized for search engines. Our expertise in frontend development
            includes HTML, CSS, JavaScript, and experience using the React
            framework.
          </Typography>
          <Typography fontSize={{ xs: "18px", sm: "20px" }} mb="30px">
            At Q-Blink, we believe that building strong relationships with our
            clients is key to our success. We take the time to understand your
            business and your goals, and we work collaboratively with you to
            create a website that meets your specific needs. Whether you're
            looking to launch a brand new website or update an existing one or
            fix any bugs in your website, we are here to help.
          </Typography>
          <Typography fontSize={{ xs: "18px", sm: "20px" }} mb="30px">
            Thank you for considering Q-Blink for your frontend website
            development needs. We look forward to working with you!
          </Typography>
        </motion.div>

        <Stack spacing={4} direction="row">
          <Button
            href="works"
            sx={{ color: "primary-color", width: "fit-content" }}
            variant="contained">
            Our Works
          </Button>
          <Button
            href="contact"
            sx={{ color: "primary-color", width: "fit-content" }}
            variant="contained">
            Book a Call
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default SectionWrapper(About, "about");
