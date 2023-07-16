import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Footer from '../components/Footer/Footer'
import { CatalogSlider } from '../components/CatalogSlider/CatalogSlider'
import { MainSlider } from '../components/MainSlider/MainSlider'

function Home({ items, onAddToFavorite, onAddToCart, isLoading, searchValue }) {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className="content">
      <MainSlider />
      <div className="frame">
        <img className="frameBigImg" src="/img/Frame1.png" alt="Frame" />
        <img className="frameSmallImg" src="/img/Frame6.png" alt="Frame" />
        <img className="frameBigImg" src="/img/Frame2.png" alt="Frame" />
        <img className="frameSmallImg" src="/img/Frame7.png" alt="Frame" />
        <img className="frameBigImg" src="/img/Frame3.png" alt="Frame" />
        <img className="frameSmallImg" src="/img/Frame8.png" alt="Frame" />
        <img className="frameBigImg" src="/img/Frame4.png" alt="Frame" />
        <img className="frameBigImg" src="/img/Frame5.png" alt="Frame" />
      </div>
      <div className="product">
        <p className="product-catalog">Каталог</p>
        <p className="product-all">/</p>
        <p className="product-all">Все товары</p>
      </div>
      <CatalogSlider
        isLoading={isLoading}
        filteredItems={filteredItems}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
      />
      <div className="weInfo">
        <div className="weInfo-left">
          <h5>О нас</h5>
          <p className="weInfoBIgText">
            Мы надежный поставщик для маркетплейсов. Мы рады предложить вам
            недорогие, но качественные товары с качественными описаниями и
            фотографиями.
            <br />У нас вы можете купить замечательные товары: искуственные
            елки, гирлянды, пиротехнику, электронику, одежду, обувь, аксессуары.
            <br />
            Минимальная сумма заказа всего 10 000 руб.
          </p>
          <p className="weInfoSmallText">
            Оптовый Базар - это надежный поставщик для маркетплейсов. Мы рады
            предложить вам недорогие, но качественные товары с качестченными
            описаниями и фотографиями.
            <br />У нас вы можете купить замечательные товары: искуственные
            елки, гирлянды, пиротехнику, электронику, одежду, обувь, аксессуары
          </p>
        </div>
        <div className="weInfo-right">
          <img src="/img/infoImg.png" alt="d" />
        </div>
        <img className="infoSmallImg" src="/img/infoSmallImg.png" alt="d" />
      </div>

      <Footer />
    </div>
  )
}

export default Home
