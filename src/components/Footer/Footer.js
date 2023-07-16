import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  const [compani, setCompani] = React.useState(false)
  const [areParagraphsVisible, setParagraphsVisible] = React.useState(false)

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  const toggleParagraphs = () => {
    setParagraphsVisible(!areParagraphsVisible)
  }

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  React.useEffect(() => {
    if (windowWidth < 500) {
      setParagraphsVisible(false)
      setCompani(false)
    } else {
      setParagraphsVisible(true)
      setCompani(true)
    }
  }, [windowWidth])

  const toggleCompani = () => {
    setCompani(!compani)
  }

  const textRightClass =
    !areParagraphsVisible && !setCompani
      ? styles.infoRight
      : styles.infoRightTwo

  return (
    <div className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.infoTop}>
          <div className={styles.infoLeft}>
            <div className={styles.companyFooter}>
              <h5 onClick={toggleCompani}>Компания</h5>
              {compani && (
                <>
                  <p>О компании</p>
                  <p>Блог</p>
                  <p>Стать поставщиком</p>
                  <p>Стать инвестором</p>
                  <p>Контакты</p>
                  <p>Пользовательское соглашение</p>
                  <p>Политика конфиденциальности и оферта</p>
                </>
              )}
            </div>

            <div className={styles.buyerFooter}>
              <h5 onClick={toggleParagraphs}>Покупателям</h5>
              {areParagraphsVisible && (
                <>
                  <p>Каталог</p>
                  <p>Корзина</p>
                  <p>Избранные товары</p>
                  <p>Личный кабинет</p>
                  <p>Доставка</p>
                  <p>Оплата</p>
                  <p>Обмен и возврат</p>
                </>
              )}
            </div>
          </div>
          <div className={textRightClass}>
            <p className={styles.nameRight}>Следите за новинками и акциями</p>

            <div className={styles.inputFooter}>
              <input
                type="email"
                pattern="[A-Za-z]+"
                placeholder="Адрес электронной почты"
              />
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_17_696)">
                  <g clip-path="url(#clip0_17_696)">
                    <rect
                      x="20"
                      y="20"
                      width="36"
                      height="36"
                      rx="18"
                      fill="white"
                    />
                    <path
                      d="M35.0001 29L32.8851 31.115L39.7551 38L32.8851 44.885L35.0001 47L44.0001 38L35.0001 29Z"
                      fill="#282828"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_17_696"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_17_696"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_17_696"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_17_696">
                    <rect
                      x="20"
                      y="20"
                      width="36"
                      height="36"
                      rx="18"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className={styles.textRightBig}>
              Нажимая кнопку, я соглашаюсь на получение информации, принимаю
              условия политики конфиденциальности и пользовательского
              соглашения, даю согласие на обработку персональных данных{' '}
            </p>
            <p className={styles.textRightSmall}>
              Нажимая кнопку отправить, я соглашаюсь на получение информации от
              интернет-магазина и уведомлений о состоянии моих заказов, а также
              принимаю условия политики конфиденциальности и пользовательского
              соглашения. даю согласие на обработку персональных данных и на
              получение рекламных сообщений и новостей о товарах и услугах
            </p>
            <div className={styles.connection}>
              <img src="../../img/phone.svg" alt="c" />
              <img src="../../img/mail.svg" alt="c" />
              <img src="../../img/home.svg" alt="c" />
            </div>
            <img src="../../img/vk.svg" alt="c" />
            <img src="../../img/tgBig.svg" alt="c" />
          </div>
        </div>
      </div>
      <div className={styles.footerBorder}></div>
      <div className={styles.infoFooter}>
        <p>© 2022</p>
        <div className={styles.payment}>
          <img src="../../img/masterCart 63.png" alt="d" />
          <img src="../../img/visa.png" alt="d" />
          <img src="../../img/mir.png" alt="d" />
        </div>
      </div>
    </div>
  )
}

export default Footer
