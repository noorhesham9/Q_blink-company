import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./landing2.css";
import "swiper/css";
import "swiper/css/pagination";
import image_1 from "../../assets/image/landing_2/landing__1.jpg";
import image_2 from "../../assets/image/landing_2/landing__2.jpg";
import image_3 from "../../assets/image/landing_2/landing__3.jpg";
const LAnding_2 = () => {
  return (
    <section className="section landing__section">
      <div className="landing__container">
        <div className="swiperCOntainer">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            speed={"3000"}
            navigation={true}
            className="swiperContaienr2"
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}>
            <SwiperSlide className="swiperContaienr2__slide">
              <img src={image_1} alt="" />
              <div className="text__container">
                <span className="text__container-span">
                  Hi my name <isindex />
                </span>
                <h2 className="text__container-h2">
                  <span>NOOR</span> ElDEEN
                </h2>{" "}
                <p className="text__container-p">iam a front end developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image_2} alt="" />
              <div className="text__container">
                <span className="text__container-span">
                  if you dont hire me
                </span>
                <h2 className="text__container-h2">
                  <span>NOOR</span> ElDEEN
                </h2>
                <p className="text__container-p">I Will Fuck You</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image_3} alt="" />
              <div className="text__container">
                <span className="text__container-span">
                  i will be under your bed
                </span>
                <h2 className="text__container-h2">
                  <span>NOOR</span> ElDEEN
                </h2>{" "}
                <p className="text__container-p">son of bitch HHHH</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LAnding_2;
