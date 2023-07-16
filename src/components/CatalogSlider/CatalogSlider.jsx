import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './CatalogSlider.module.scss'

export const CatalogSlider = ({
  isLoading,
  filteredItems,
  onAddToFavorite,
  onAddToCart,
}) => {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        wrapperClass={styles.swiperWrapper}
        className={styles.swiper}
        spaceBetween={25}
        slidesPerView={'auto'}
      >
        {(isLoading ? Array(8) : filteredItems).map((item, index) => (
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <Card
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              loading={isLoading}
              {...item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
