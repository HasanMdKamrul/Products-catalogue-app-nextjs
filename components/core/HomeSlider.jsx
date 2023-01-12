// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper";
import Heading from "./Heading";

export default function HomeSlider({ products }) {
  return (
    <>
      <Heading>Our Leatest Products</Heading>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          scale: 1,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper my-12"
      >
        {products.slice(0, 3)?.map((product) => (
          <SwiperSlide key={product?.id}>
            <Image width={600} height={600} src={product.picture} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
