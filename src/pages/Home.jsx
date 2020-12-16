import React from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'

function Home({ items }) {
  // console.log(props.items)
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            categories={[
              'Все',
              'Мясные',
              'Вегетарианская',
              'Гриль',
              'Острые',
              'Закрытые',
            ]}
          />
          <SortPopup
            sortItem={[
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'alphabet' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((obj, index) => (
            <PizzaBlock key={index} {...obj} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
