import React from 'react'
import './Header.scss'
import Remove from '../../images/icon-remove.svg'

const Header = ({filteredItems, clearFilter, setFilteredItems}) => {

  const removeItem =(data) =>{
    const updatedFilteredItems = filteredItems.filter(item =>(
        item !== data
    ))

    setFilteredItems(updatedFilteredItems)
  }

  return (
    <div className='Header'>
        <div className="filteredTitle">
            {
                filteredItems.map((keyword, id) =>(
                    <div className='keyword' key={id}>
                        <p>{keyword}</p>
                        <button onClick={() => removeItem(keyword)}><img src={Remove} alt="Remove" /></button>
                    </div>
                ))
            }
        </div>
        <button onClick={clearFilter}>Clear</button>
    </div>
  )
}

export default Header