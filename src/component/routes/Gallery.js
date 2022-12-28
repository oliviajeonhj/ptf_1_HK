import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

import gallery1 from '../../img/gallery/gallery1.jpg'
import gallery2 from '../../img/gallery/gallery2.jpg'
import gallery3 from '../../img/gallery/gallery3.jpg'
import gallery4 from '../../img/gallery/gallery4.jpg'

function Gallery() {
  let navigate = useNavigate();
  return (
    <Swiper
        slidesPerView={3}
        grid={{
          rows: 3,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper gallerySection" id="gallery"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  );
}




export default Gallery;