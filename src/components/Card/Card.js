import { useContext, useState } from 'react'
import ContentLoader from 'react-content-loader'
import styles from './Card.module.scss'
import AppContext from '../../context'

function Card({
  id,
  image,
  name,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(favorited)
  const obj = { id, parentId: id, image, name, price }

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorite = () => {
    onFavorite(obj)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="120" />
          <rect x="0" y="105" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="126" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="158" rx="5" ry="5" width="80" height="24" />
          <rect x="115" y="148" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onFavorite}>
              <img
                width={33}
                height={30}
                onClick={onClickFavorite}
                src={isFavorite ? '/img/favorite2.svg' : '/img/favorit.svg'}
                alt="Unliked"
              />
            </div>
          )}
          <img
            className={styles.cardImage}
            style={{ borderRadius: 40 }}
            src={image}
            alt="Sneakers"
          />
          <h5>{name}</h5>
          <div className={styles.cardSize}>
            <div>Высота:</div>
            <p>60 см</p>
            <p>90 см</p>
            <p>120 см</p>
            <p>150 см</p>
            <p>180 см</p>
            <p>210 см</p>
            <p>240 см</p>
            <p>270 см</p>
            <p>300 см</p>
          </div>

          <div className={styles.cardBottom}>
            <div className={styles.cardPrice}>
              <b>{price} р.</b>
            </div>
            {onPlus && (
              <div className={styles.plus} onClick={onClickPlus}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 17C7.16421 17 7.5 16.6642 7.5 16.25C7.5 15.8358 7.16421 15.5 6.75 15.5C6.33579 15.5 6 15.8358 6 16.25C6 16.6642 6.33579 17 6.75 17Z"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 17C15.4142 17 15.75 16.6642 15.75 16.25C15.75 15.8358 15.4142 15.5 15 15.5C14.5858 15.5 14.25 15.8358 14.25 16.25C14.25 16.6642 14.5858 17 15 17Z"
                    fill="white"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.75 1.25H3.75L5.76 11.2925C5.82858 11.6378 6.01643 11.948 6.29066 12.1687C6.56489 12.3895 6.90802 12.5067 7.26 12.5H14.55C14.902 12.5067 15.2451 12.3895 15.5193 12.1687C15.7936 11.948 15.9814 11.6378 16.05 11.2925L17.25 5H4.5"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {isItemAdded(id) ? <p>В корзине</p> : <p>В корзину</p>}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
