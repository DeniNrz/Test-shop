import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Card from '../components/Card/Card'

function Orders() {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'https://63de0fdef1af41051b0d01eb.mockapi.io/orders'
        )
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка при запросе заказов')
      }
    })()
  }, [])

  return (
    <div className="content">
      <div className="search">
        <h1>Мои заказы</h1>
      </div>
      <div className="sneakers">
        {isLoading
          ? [...Array(8)]
          : orders.map((item, index) => (
              <Card key={index} loading={isLoading} {...item} />
            ))}
      </div>
    </div>
  )
}

export default Orders
