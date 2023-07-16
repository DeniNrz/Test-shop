import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import styles from './MainSlider.module.scss'

export const MainSlider = () => {
  const [swiperOptions, setSwiperOptions] = React.useState({
    spaceBetween: 30,
  })

  React.useEffect(() => {
    function handleResize() {
      const newSpaceBetween = window.innerWidth < 450 ? 12 : 30
      setSwiperOptions((prevOptions) => ({
        ...prevOptions,
        spaceBetween: newSpaceBetween,
      }))
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.bigSlider}>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
        {...swiperOptions}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img
            className={styles.bigImage}
            src="/img/slide1.png"
            alt="Slide 1"
          />
          <img
            className={styles.smallImage}
            src="/img/slide6.png"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            className={styles.bigImage}
            src="/img/slide1.png"
            alt="Slide 2"
          />
          <img
            className={styles.smallImage}
            src="/img/slide6.png"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            className={styles.bigImage}
            src="/img/slide1.png"
            alt="Slide 3"
          />
          <img
            className={styles.smallImage}
            src="/img/slide6.png"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            className={styles.bigImage}
            src="/img/slide1.png"
            alt="Slide 4"
          />
          <img
            className={styles.smallImage}
            src="/img/slide6.png"
            alt="Slide 1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
