import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({
  searchValue,
  setSearchValue,
  ocChangeSearchInput,
  onClickCard,
}) {
  const [isLoginClicked, setIsLoginClicked] = useState(false)
  const [isFavoritesActive, setIsFavoritesActive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.icon') && !isLoginClicked) {
        setIsFavoritesActive(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isLoginClicked])

  useEffect(() => {
    if (location.pathname !== '/orders') {
      setIsLoginClicked(false)
    }
  }, [location.pathname])

  const handleLoginClick = () => {
    setIsLoginClicked(true)
    setIsFavoritesActive(false)
  }

  const handleLogoutClick = () => {
    setIsLoginClicked(false)
    setIsFavoritesActive(false)
  }

  const handleFavoritesClick = () => {
    setIsFavoritesActive((prevFavoritesActive) => !prevFavoritesActive)
  }

  return (
    <header>
      <div className="header-info">
        <div className="header-href">
          <a href="/">О нас</a>
          <a href="/">Оплата и доставка</a>
          <a href="/">Товары из Китая</a>
          <a href="/">Статьи</a>
        </div>
        <div className="header-messenger">
          <img src="/img/tg.png" alt="d" />
          <img src="/img/whatsApp.png" alt="d" />
        </div>
      </div>

      <div className="header-bottom">
        <Link to="/">
          <img className='smallBurger' src="../../img/burger.svg" alt="e" />
          <div className="headerLeft cu-p">
            <img src="/img/catalog.png" alt="c" />
            <button className="header-catalog">Каталог</button>
          </div>
        </Link>

        <div className="search">
          <div className="search-block">
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="searchBtn"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={ocChangeSearchInput}
              value={searchValue}
              placeholder="Напишите, что вы ищете..."
            />
            <p>Найти</p>
          </div>
        </div>

        <ul className="headerRight">
          <li
            className={`icon ${isLoginClicked ? 'active' : ''}`}
            onClick={isLoginClicked ? handleLogoutClick : handleLoginClick}
          >
            <Link to="/orders">
              <svg
                className="icon-login"
                width="20"
                height="20"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="leading-icon">
                  <g id="Group 73">
                    <path
                      id="Vector"
                      d="M16.6667 16.3333V18H3.33337V16.3333C3.33337 15.4493 3.68456 14.6014 4.30968 13.9763C4.93481 13.3512 5.78265 13 6.66671 13H13.3334C14.2174 13 15.0653 13.3512 15.6904 13.9763C16.3155 14.6014 16.6667 15.4493 16.6667 16.3333Z"
                      stroke="#282828"
                      stroke-width="1.43015"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M10.0001 9.66667C11.8411 9.66667 13.3335 8.17428 13.3335 6.33333C13.3335 4.49238 11.8411 3 10.0001 3C8.15919 3 6.66681 4.49238 6.66681 6.33333C6.66681 8.17428 8.15919 9.66667 10.0001 9.66667Z"
                      stroke="#282828"
                      stroke-width="1.43015"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
              </svg>
              <p>Войти</p>
            </Link>
          </li>
          <li
            className={`icon ${isFavoritesActive ? 'active' : ''}`}
            onClick={handleFavoritesClick}
          >
            <Link to="/favorites" relative="path">
              <svg
                className="icon-favorites"
                width="21"
                height="20"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                  fill="#282828"
                />
              </svg>
              <p>Избранное</p>
            </Link>
          </li>
          <li onClick={onClickCard}>
            <svg
              className="icon-cart"
              width="20"
              height="20"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50039 18.8333C7.96062 18.8333 8.33372 18.4602 8.33372 18C8.33372 17.5397 7.96062 17.1666 7.50039 17.1666C7.04015 17.1666 6.66705 17.5397 6.66705 18C6.66705 18.4602 7.04015 18.8333 7.50039 18.8333Z"
                stroke="#282828"
                stroke-width="1.43015"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6669 18.8333C17.1271 18.8333 17.5002 18.4602 17.5002 18C17.5002 17.5397 17.1271 17.1666 16.6669 17.1666C16.2067 17.1666 15.8336 17.5397 15.8336 18C15.8336 18.4602 16.2067 18.8333 16.6669 18.8333Z"
                fill="#282828"
                stroke="#282828"
                stroke-width="1.43015"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.833679 1.33331H4.16701L6.40035 12.4916C6.47655 12.8753 6.68527 13.2199 6.98997 13.4652C7.29466 13.7105 7.67593 13.8408 8.06701 13.8333H16.167C16.5581 13.8408 16.9394 13.7105 17.2441 13.4652C17.5488 13.2199 17.7575 12.8753 17.8337 12.4916L19.167 5.49998H5.00035"
                stroke="#282828"
                stroke-width="1.43015"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Корзина</p>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
