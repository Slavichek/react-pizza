import React, {useState} from 'react';

function Categories({categories}) {
	const[activeItem, setActiveItem] = useState(0); 

	const onSelectItem = (index) => {
		setActiveItem(index)
	}
	return (
		<div className="categories">
			<ul>
				{categories.map((item, index) => (
					<li key={index}
						className={activeItem === index ? 'active' : ''}
						onClick={() => onSelectItem(index)}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default Categories;