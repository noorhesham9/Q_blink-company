import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./landing.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import "swiper/css";
import SendIcon from "@mui/icons-material/Send";
import "swiper/css/pagination";
import { Button, IconButton } from "@mui/material";
import { Image1, Shape, bubbleInfo } from "../../Constants";
import { Link } from "react-scroll";
const Landing = () => {
  return (
    <section id="home" className=" section landing__section">
      <div
        className="shape"
        style={{
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
      </div>

      <Container className="Landing__container container__1">
        <div className="LAnding__title ">
          Welcome <span>To</span>
          <h2 className="landing__title-h2">
            <span className="text-cs">Q-blink</span> Company
          </h2>
          <p className="landing__title-p">
            we are a <span>Frontend Company</span>. we are creating a full
            responsive websites
          </p>
          {/* <div className="landing__title-socials">
            <div className="socials">
              <IconButton>
                <FacebookOutlinedIcon
                  sx={{
                    color: "var(--primary-color)",
                    fontSize: "30px",
                  }}
                />
              </IconButton>
              <IconButton>
                <InstagramIcon
                  sx={{
                    color: "var(--primary-color)",
                    fontSize: "30px",
                  }}
                />
              </IconButton>
              <IconButton>
                <WhatsAppIcon
                  sx={{
                    color: "var(--primary-color)",
                    fontSize: "30px",
                  }}
                />
              </IconButton>
            </div>
          </div> */}
          <div className="landing__title-buttons">
            <Button
              className="landing__title-button landing__title-button-contact"
              variant="contained"
              sx={{
                posiyion: "relative",
                transition: "0.2s",
                backgroundColor: "var(--primary-color)",
                border: "1px solid var(--primary-color)",
                color: "black",
                "&:hover": {
                  border: "1px solid var(--primary-color)",
                  color: "var(--primary-color)",
                  backgroundColor: "black",
                  ">span": {
                    ".MuiSvgIcon-root": {
                      color: "var(--primary-color)",
                    },
                  },
                },
              }}
              endIcon={
                <SendIcon
                  sx={{
                    transition: "0.3s",
                    color: "black",
                  }}
                />
              }
              size="large">
              <Link
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
                to="contacts">
                Contact US
              </Link>
              <span
                className="sharta"
                style={{
                  width: "22px",
                  height: "2px",
                  backgroundColor: "var(--primary-color)",
                  position: "absolute",
                  right: "-22px",
                }}></span>
            </Button>
            <Button
              className="landing__title-button landing__title-button-project"
              sx={{
                color: "var(--primary-color)",
              }}>
              Projects
            </Button>
          </div>
        </div>

        <Stack className="Landing__Images">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            className="swiperContaienr"
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}>
            {bubbleInfo.map((info, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box
                    height="250px"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Typography
                      fontSize={{ xs: "16px", sm: "22px" }}
                      textAlign="center">
                      {info.at}{" "}
                      <span
                        style={{
                          color: "var(--primary-color)",
                          fontWeight: "bold",
                        }}>
                        {info.name}
                      </span>
                      <br />
                      {info.info}
                    </Typography>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        {/* </div> */}
      </Container>
      <div className="bottom-button"></div>
      <div className="custom-shape-divider-bottom-1689188262">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <defs>
            <linearGradient id="MyGradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#000000" />
              <stop offset="85%" stopColor="var(--primary-color)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Landing;
