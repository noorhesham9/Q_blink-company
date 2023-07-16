// import { Box, Container } from "@mui/material";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "./works.css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Container, Box, Typography, Button } from "@mui/material";
import { projects } from "../../Constants";
function Works() {
  return (
    <Box
      id="works"
      sx={{
        backgroundImage: "var(--third-gradient)",
        paddingBottom: "50px",
        paddingTop: "50px",
      }}>
      <Typography
        sx={{
          fontSize: { sm: "30px", lg: "50px" },
          fontFamily: "var(--second-font)",
          textAlign: "center",
          marginBottom: "20px",
        }}>
        Some of Our{" "}
        <span
          style={{
            color: "var(--primary-color)",
          }}>
          Works
        </span>
      </Typography>
      <Container>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper">
          {projects.map(({ id, img, title, description, link }) => {
            console.log(`${link}`);
            return (
              <SwiperSlide className="sideswiiipe" key={id}>
                <img className="works__images" src={img} alt="" />
                <h3 className="title">{title}</h3>
                <p className="title__description">{description}</p>
                <Box
                  sx={
                    {
                      // width: "100%",
                    }
                  }>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--primary-color)",
                      color: "black",
                      borderRadius: "6px",
                      fontWeight: 700,
                      marginTop: "23px",
                      marginLeft: "10px",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "var(--primary-color)",
                      },
                    }}
                    href={`${link}`}>
                    Show Demo
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>{" "}
    </Box>
  );
}

export default Works;
