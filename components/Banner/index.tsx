import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import styles from "./styles.module.css";

export function Banner() {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>Banner 1</SwiperSlide>
        <SwiperSlide className={styles.slide}>Banner 2</SwiperSlide>
      </Swiper>
    </div>
  );
}
