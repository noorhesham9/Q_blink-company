import { Box, Container, Stack, Typography } from "@mui/material";
import FormikContainer from "./FormikContainer";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc/index";
const Contact = () => {
  return (
    <Box className=" section__gradient-1" py="100px">
      <Container>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "center",
          }}>
          <Stack>sdf</Stack>
          <Box
            sx={{
              bgcolor: "rgb(5 0 32)",
              p: "50px 30px!important",
              borderRadius: "10px",
              border: "1px solid black",
              color: "white",
              width: "90%",
              maxWidth: "500px!important",
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default SectionWrapper(Contact, "contact");
