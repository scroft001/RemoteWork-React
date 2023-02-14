import React from 'react'
import "./DropDown.scss"

const Dropdown = (props) => {
  return (
    <div className='app__dropdown'>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index}>{item}</li>
        })
        }
      </ul>
    </div>
  )
}

export default Dropdown