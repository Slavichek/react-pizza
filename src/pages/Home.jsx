import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'
import { setCategory, setSortBy } from '../redux/actions/filterAC'
import { fetchPizzas } from '../redux/actions/pizzaAC'
import LoadingBlock from '../components/LoadingBlock'

const categoryNames = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
]

function Home() {
  //redux hook (selector)

  const items = useSelector((state) => state.pizzasss.itemssss)
  const isLoaded = useSelector((state) => state.pizzasss.isLoaded)
  const { category, sortBy } = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index)) //прокидываем категорию в редакс чтоб сервер отдавал нужные пицыыы исходя изкатегории
  }, [])

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])
  // console.log(sortBy)
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            items={categoryNames}
            onClickCategory={onSelectCategory}
          />
          <SortPopup
            activeSortType={sortBy.type}
            onClickSortType={onSelectSortType}
            itemss={sortItems}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded ? (
            items.map((obj, index) => <PizzaBlock key={index} {...obj} />)
          ) : (
            <LoadingBlock />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
