import Image2 from "../../assets/image/avatar-2.svg";
import Image3 from "../../assets/image/avatar-3.svg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import { Container } from "@mui/material";
const Tetimonials = () => {
  const data = [
    {
      id: 1,
      image: Image2,
      title: "Noor Hesham",
      comment:
        "I enjoy working with the Q-blink company they are a professional mens",
    },
    {
      id: 2,
      image: Image3,
      title: "Ezekiel salah",
      comment:
        "they did a great website for me i recomment them to do your website",
    },
  ];
  return (
    <section
      className="testimonials section"
      style={{ backgroundImage: "var(--first-gradient)" }}>
      <h2
        className="section__title"
        style={{
          fontFamily: "var(--second-font)",
          fontSize: "44px",
          color: "var(--primary-color)",
          paddingBottom: "30px",
        }}>
        Testimonials
      </h2>
      <Container>
        <Swiper
          className="testimonials__container grid"
          modules={[Pagination]}
          spaceBetween={30}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}>
          {data.map(({ id, image, title, comment }) => {
            return (
              <SwiperSlide key={id} className="testimonials__item">
                <div className="tumb">
                  <img src={image} alt="" />
                </div>
                <h3 className="testimonials__title"> {title}</h3>
                <div className="comment">{comment}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default Tetimonials;
