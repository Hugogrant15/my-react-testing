import PropTypes from 'prop-types';
import React from 'react'

const List = (props) => {
   
      // fruits.sort((a,b) => a.name.localeCompare(b.name)); alphabetical order
      // fruits.sort((a,b) => b.name.localeCompare(a.name)); reverse alphabetical order
    // fruits.sort((a,b) => b.calories - a.calories); sort by calories ALPHABETICALLY
    // fruits.sort((a,b) => a.calories - b.calories); sort by calories  REVERSE ALPHABETICALLY

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const category = props.category
    const itemList = props.items;


    const listItem = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                {item.calories}
                                                </li>);
  return (
    <>
      <h3>{category}</h3>
      <ol>{listItem}</ol>
    </>
  ) 
}

List.prototype = {
  category: PropTypes.string,
  items: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number
  }))
}

export default List
