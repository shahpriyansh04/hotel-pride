import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import Image from 'next/image'
import 'swiper/css/autoplay';
import CarouselImage1 from './images/IMAGE_CAROUSEL/IC_4.jpg'
import CarouselImage2 from './images/IMAGE_CAROUSEL/IC.jpg'
import CarouselImage3 from './images/IMAGE_CAROUSEL/Image_Carousel.jpg'
import CarouselImage4 from './images/IMAGE_CAROUSEL/Image_Carousel_1.jpg'

// Import Swiper styles
import 'swiper/css';

function ImageCarousel() {
  return (
    <div className="h-[800px]  flex  w-full justify-end">
  <Swiper
        modules={[ Pagination,  A11y, Autoplay]}
      className=""
      spaceBetween={50}
      slidesPerView={1}
     
      autoplay={{delay: 5000, disableOnInteraction: false}}
      pagination={{ clickable: true ,enabled: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <Image src={CarouselImage1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={CarouselImage2} />
        </SwiperSlide>
         <SwiperSlide>
          <Image src={CarouselImage3}  />
        </SwiperSlide>
         <SwiperSlide>
          <Image src={CarouselImage4}   />
        </SwiperSlide>
      ...
    </Swiper>    </div>
  );
}

export default ImageCarousel;
