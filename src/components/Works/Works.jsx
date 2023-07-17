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
          color: "var(--title-color)",
          fontSize: { sm: "50px", xs: "30px" },
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
      <Container
        sx={{
          maxWidth: "100%",
          overflow: "hidden",
        }}>
        <Swiper
          style={{
            maxWidth: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper">
          {projects.map(({ id, img, title, description, link }) => {
            return (
              <SwiperSlide
                style={{
                  height: "575px",
                }}
                className="sideswiiipe"
                key={id}>
                <img className="works__images" src={img} alt="" />
                <h3 className="title">{title}</h3>
                <p className="title__description">{description}</p>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--primary-color)",
                      color: "var(--button-color)",
                      borderRadius: "6px",
                      fontWeight: 700,
                      marginTop: "23px",
                      marginBottom: "30px",
                      marginLeft: "10px",
                      "&:hover": {
                        backgroundColor: "var(--button-color)",
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
