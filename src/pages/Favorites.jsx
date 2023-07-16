import React from 'react'
import Card from '../components/Card/Card'
import AppContext from '../context'

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext)

  return (
    <div className="content">
      <div className="search">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {favorites.map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
