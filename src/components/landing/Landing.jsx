import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./landing.css";
import "swiper/css";
import SendIcon from "@mui/icons-material/Send";

import "swiper/css/pagination";
import { Button, IconButton } from "@mui/material";
const Image1 = (width) => {
  return (
    <svg
      height={width.width}
      width={width.width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 496.158 496.158"
      xmlSpace="preserve">
      <path
        style={{ fill: "rgb(255, 247, 0)" }}
        className="nnn"
        d="M278.767,145.419c-3.126-4.003-7.276-6.006-12.451-6.006c-4.591,0-7.716,0.879-9.375,2.637
          c-1.662,1.758-5.226,6.445-10.693,14.063c-5.47,7.617-11.744,14.502-18.823,20.654c-7.082,6.152-16.53,12.012-28.345,17.578
          c-7.91,3.712-13.429,6.738-16.553,9.082c-3.126,2.344-4.688,6.006-4.688,10.986c0,4.298,1.586,8.082,4.761,11.353
          c3.172,3.273,6.812,4.907,10.913,4.907c8.592,0,25.292-9.521,50.098-28.564V335.41c0,7.814,1.806,13.722,5.42,17.725
          c3.612,4.003,8.397,6.006,14.355,6.006c13.378,0,20.068-9.814,20.068-29.443V161.972
          C283.455,154.941,281.892,149.425,278.767,145.419z"
      />
    </svg>
  );
};
const Image2 = (width) => {
  return (
    <svg
      height={width.width}
      width={width.width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 496.158 496.158"
      xmlSpace="preserve">
      <path
        style={{ fill: "rgb(255, 247, 0)" }}
        d="M319.783,325.595c-4.005-3.124-9.814-4.688-17.432-4.688h-76.465c2.44-3.71,4.834-6.885,7.178-9.521
c5.468-6.64,15.55-15.967,30.249-27.979c14.696-12.012,25.17-20.824,31.421-26.44c6.249-5.614,12.378-13.378,18.384-23.291
c6.006-9.911,9.009-20.922,9.009-33.032c0-7.713-1.442-15.161-4.321-22.339c-2.882-7.178-6.91-13.5-12.085-18.97
c-5.177-5.468-11.183-9.764-18.018-12.891c-10.547-4.688-23.291-7.031-38.232-7.031c-12.403,0-23.218,1.831-32.446,5.493
s-16.846,8.473-22.852,14.429c-6.006,5.958-10.524,12.598-13.55,19.922c-3.028,7.324-4.541,14.355-4.541,21.094
c0,5.566,1.611,9.961,4.834,13.184s7.274,4.834,12.158,4.834c5.566,0,9.789-1.758,12.671-5.273
c2.879-3.516,5.468-8.544,7.764-15.088c2.293-6.542,3.93-10.547,4.907-12.012c7.324-11.229,17.381-16.846,30.176-16.846
c6.054,0,11.646,1.369,16.772,4.102c5.127,2.735,9.178,6.569,12.158,11.499c2.978,4.933,4.468,10.524,4.468,16.772
c0,5.763-1.392,11.646-4.175,17.651s-6.837,11.865-12.158,17.578c-5.324,5.713-11.989,11.403-19.995,17.065
c-4.493,3.028-11.964,9.352-22.412,18.97c-10.451,9.62-22.169,21.167-35.156,34.644c-3.126,3.321-6.006,7.887-8.643,13.696
c-2.637,5.812-3.955,10.474-3.955,13.989c0,5.47,2.051,10.231,6.152,14.282c4.102,4.054,9.814,6.079,17.139,6.079H306.6
c6.445,0,11.254-1.659,14.429-4.98c3.172-3.319,4.761-7.372,4.761-12.158C325.789,332.97,323.786,328.722,319.783,325.595z"
      />
    </svg>
  );
};
const Image3 = (width) => {
  return (
    <svg
      height={width.width}
      width={width.width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 496.158 496.158"
      xmlSpace="preserve">
      <path
        style={{ fill: "rgb(255, 247, 0)" }}
        d="M319.637,269.711c-2.637-6.395-6.569-12.231-11.792-17.505c-5.226-5.273-11.646-9.961-19.263-14.063
	c7.91-6.64,13.989-13.451,18.237-20.435c4.248-6.981,6.372-15.355,6.372-25.122c0-7.42-1.465-14.355-4.395-20.801
	s-7.276-12.108-13.037-16.992c-5.763-4.882-12.55-8.617-20.361-11.206c-7.814-2.586-16.457-3.882-25.928-3.882
	c-10.84,0-20.654,1.538-29.443,4.614s-16.139,7.155-22.046,12.231c-5.91,5.079-10.4,10.426-13.477,16.04
	c-3.076,5.617-4.614,10.963-4.614,16.04c0,5.273,1.634,9.499,4.907,12.671c3.271,3.175,6.859,4.761,10.767,4.761
	c3.319,0,6.249-0.586,8.789-1.758c2.538-1.172,4.296-2.783,5.273-4.834c1.659-3.809,3.49-7.86,5.493-12.158
	c2-4.296,4.125-7.812,6.372-10.547c2.245-2.733,5.296-4.93,9.155-6.592c3.856-1.659,8.764-2.49,14.722-2.49
	c8.789,0,15.77,2.71,20.947,8.13c5.175,5.42,7.764,11.891,7.764,19.409c0,9.865-3.248,17.432-9.741,22.705
	c-6.496,5.273-14.234,7.91-23.218,7.91h-6.006c-6.935,0-12.158,1.442-15.674,4.321c-3.516,2.882-5.273,6.665-5.273,11.353
	c0,4.786,1.465,8.521,4.395,11.206c2.93,2.687,7.079,4.028,12.451,4.028c1.172,0,3.809-0.194,7.91-0.586
	c4.102-0.389,7.127-0.586,9.082-0.586c11.133,0,19.823,3.248,26.074,9.741c6.249,6.496,9.375,15.454,9.375,26.88
	c0,7.716-1.831,14.502-5.493,20.361s-8.302,10.279-13.916,13.257c-5.617,2.98-11.451,4.468-17.505,4.468
	c-10.547,0-18.727-3.296-24.536-9.888c-5.812-6.592-11.256-16.674-16.333-30.249c-0.783-2.245-2.442-4.175-4.98-5.786
	c-2.541-1.611-5.177-2.417-7.91-2.417c-5.47,0-10.034,1.735-13.696,5.2c-3.662,3.468-5.493,8.034-5.493,13.696
	c0,4.395,1.538,9.961,4.614,16.699s7.617,13.257,13.623,19.556s13.646,11.549,22.925,15.747c9.276,4.198,19.775,6.299,31.494,6.299
	c11.522,0,22.046-1.831,31.567-5.493s17.748-8.739,24.683-15.234c6.933-6.493,12.181-13.891,15.747-22.192
	c3.563-8.299,5.347-16.894,5.347-25.781C323.592,283.018,322.273,276.109,319.637,269.711z"
      />
    </svg>
  );
};
const Image4 = (width) => {
  return (
    <svg
      height={width.width}
      width={width.width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 496.158 496.158"
      xmlSpace="preserve">
      <path
        style={{ fill: "rgb(255, 247, 0)" }}
        d="M324.983,279.892c-4.541-2.051-10.572-3.076-18.091-3.076h-6.299V163.437
	c0-16.992-7.423-25.488-22.266-25.488c-4.591,0-8.521,1.538-11.792,4.614c-3.273,3.076-7.448,8.034-12.524,14.868l-77.637,103.857
	c-2.149,2.833-3.955,5.226-5.42,7.178c-1.465,1.955-2.882,3.98-4.248,6.079c-1.369,2.101-2.394,4.102-3.076,6.006
	c-0.685,1.904-1.025,3.786-1.025,5.64c0,7.228,2.318,12.941,6.958,17.139c4.637,4.2,11.595,6.299,20.874,6.299h73.535v27.246
	c0,7.324,1.685,12.868,5.054,16.626s7.787,5.64,13.257,5.64c5.566,0,10.009-1.831,13.33-5.493c3.319-3.662,4.98-9.251,4.98-16.772
	V309.63h8.936c7.42,0,12.987-1.293,16.699-3.882c3.71-2.586,5.566-6.713,5.566-12.378
	C331.795,286.436,329.524,281.943,324.983,279.892z M263.973,276.816h-62.988l62.988-85.107V276.816z"
      />
    </svg>
  );
};
const Shape = (className) => {
  return (
    <svg
      className={className.className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="var(--primary-color)"
      viewBox="0 0 200 200">
      <path
        fillRule="evenodd"
        d="M200 98.523A41.9 41.9 0 0 1 188.941 100h-44.708c-23.116 0-41.855 18.739-41.855 41.854v49.465c0 2.976-.311 5.88-.901 8.681A41.888 41.888 0 0 1 100 188.941v-44.708c0-23.116-18.739-41.855-41.854-41.855H8.68a42.08 42.08 0 0 1-8.68-.901A41.888 41.888 0 0 1 11.06 100h44.707c23.116 0 41.855-18.739 41.855-41.854V8.68c0-2.976.31-5.88.901-8.681A41.9 41.9 0 0 1 100 11.06v44.707c0 23.116 18.739 41.855 41.855 41.855h49.464c2.976 0 5.88.31 8.681.901Z"
        clipRule="evenodd"></path>
      <defs>
        {/* <linearGradient
          id="paint0_linear_105_296"
          x1="100"
          x2="100"
          y1="0"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#DF99F7"></stop>
          <stop offset="1" stopColor="#FFDBB0"></stop>
        </linearGradient> */}
      </defs>
    </svg>
  );
};
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Landing = () => {
  return (
    <section className=" section landing__section">
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
      <div className="Landing__container container__1 container ">
        <div className="LAnding__title ">
          Welcome <span>To</span>
          <h2 className="landing__title-h2">
            <span className="text-cs">Q-blink</span> Company
          </h2>
          <p className="landing__title-p">
            we are a <span>Bamboo Company</span>. we are selling bamboo products
          </p>
          <div className="landing__title-socials">
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
          </div>
          <Button
            href="#contact"
            className="landing__title-button landing__title-button-contact"
            variant="contained"
            sx={{
              posiyion: "relative",
              transition: "0.2s",
              backgroundColor: "var(--primary-color)",
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
            Contact US
            <span
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
              position: "relative",
              right: "-30px",
              color: "var(--primary-color)",
            }}>
            Projects
          </Button>
        </div>

        <div className="Landing__Images">
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
            <SwiperSlide className="landing__Images_image">
              <div className="svgContain">
                <Image1 width={"300px"} />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className="landing__Images_image">
              <div className="svgContain">
                <Image2 width={"300px"} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="landing__Images_image">
              <div className="svgContain">
                <Image3 width={"300px"} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="landing__Images_image">
              <div className="svgContain">
                <Image4 width={"300px"} />
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>

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
