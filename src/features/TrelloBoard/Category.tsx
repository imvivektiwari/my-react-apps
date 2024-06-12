import React from 'react'
import Items from './Items';

const Category = ({category}: any) => {
  return (
    <div className='category'>
        <p>{category.name}</p>        
        <Items />
        <Items />
        <Items />

        <button className='add-item-button' onClick={()=>{}}>Add Item</button>
    </div>
  )
}

export default Category;