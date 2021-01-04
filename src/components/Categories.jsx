import React, { memo } from 'react'
// import PropTypes from 'prop-types'

const Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
})

// Categories.propTypes = {
//   activeCategory: PropTypes.number.isRequired,
//   items: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onClickCategory: PropTypes.func.isRequired,
// }

// Categories.defaultProps = { activeCategory: null, items: [] }

export default Categories
