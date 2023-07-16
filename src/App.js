import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './App.scss'
import Header from './components/Header'
import Drawer from './components/Drawer/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AppContext from './context'
import Orders from './pages/Orders'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [cardResponse, favoriteRespons, itemsResponse] =
          await Promise.all([
            axios.get('https://63d25adc4abff8883408a5bc.mockapi.io/card'),
            axios.get('https://63d614a994e769375bab6ed2.mockapi.io/favorite'),
            axios.get('https://64b1065a062767bc48258782.mockapi.io/items'),
          ])

        setIsLoading(false)

        setCartItems(cardResponse.data)
        setFavorites(favoriteRespons.data)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Ошибка запроса данных')
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      )
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        )
        await axios.delete(
          `https://63d25adc4abff8883408a5bc.mockapi.io/card/${findItem.id}`
        )
      } else {
        setCartItems((prev) => [...prev, obj])
        const { data } = await axios.post(
          'https://63d25adc4abff8883408a5bc.mockapi.io/card',
          obj
        )
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              }
            }
            return item
          })
        )
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
      console.error(error)
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://63d614a994e769375bab6ed2.mockapi.io/favorite/${obj.id}`
        )
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        )
      } else {
        const { data } = await axios.post(
          'https://63d614a994e769375bab6ed2.mockapi.io/favorite',
          obj
        )
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      console.log('Не удалось добавить в избранное!')
      console.error(error)
    }
  }

  const ocChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://63d25adc4abff8883408a5bc.mockapi.io/card/${id}`)
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      )
    } catch (error) {
      alert('Ошибка при удалении из корзины')
      console.error(error)
    }
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
        onAddToCart,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header
          onClickCard={() => setCartOpened(true)}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          ocChangeSearchInput={ocChangeSearchInput}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites items={favorites} />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
