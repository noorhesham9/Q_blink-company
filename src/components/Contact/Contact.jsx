import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import FormikContainer from "./FormikContainer";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc/index";
import SocialMedia from "./SocialMedia";
import { Shape } from "../../Constants";

// const socailmedia=[
//     {
//         name:'GitHub',
//         icon:GitHub
//     },
//     {
//         name:'LinkedIn',
//         icon:LinkedIn
//     },
//     {
//         name:'GitHub',
//         icon:Twitter
//     },
//     {
//         name:'WhatsApp',
//         icon:WhatsApp
//     },
//     {
//         name:'InstagramIcon',
//         icon:Instagram
//     },
//     {

//     }
// ]

const Contact = () => {
  return (
    <Box className=" section__gradient-1" py="100px">
      <Container>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <Stack direction={{ xs: "column-reverse", sm: "row" }}>
            <Stack
              className="background-Color"
              alignItems="center"
              direction="column"
              justifyContent="center"
              sx={{
                p: "50px 30px!important",
                color: "white",
                width: "100%",
                // borderRight: "1px solid var(--primary-color)",
              }}>
              <SocialMedia />
              <Box
                className="shape"
                sx={{
                  width: "0.2px",
                  height: "60%",
                  left: "35px",
                  top: "calc(50% + 40px)",
                  transform: "translateY(-50%)",
                  background: "var(--primary-color)",
                  position: "absolute",
                }}>
                <Shape
                  className="shape-class-1"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                  }}
                />
                <Shape className="shape-class-2" />
              </Box>
            </Stack>
            <Divider
              sx={{
                border: "1px solid var(--primary-color)",
                boxShadow: "0 0 20px 0 var(--primary-color)",
              }}
            />
            <Box
              className="background-Color"
              sx={{
                // bgcolor: "rgb(5 0 32)",
                p: "50px 30px!important",
                color: "white",
                width: "100%",
                maxWidth: "600px!important",
              }}>
              <Stack sx={{ textAlign: { xs: "center", sm: "start" } }}>
                <motion.div variants={textVariant()}>
                  <Typography color="#f9fafbe6">GET IN TOUCH</Typography>
                  <Typography
                    color="white"
                    fontSize={{ sm: "60px", xs: "30px" }}
                    fontWeight="bold">
                    Contact.
                  </Typography>
                </motion.div>
              </Stack>
              <FormikContainer />
            </Box>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SectionWrapper(Contact, "contact");
