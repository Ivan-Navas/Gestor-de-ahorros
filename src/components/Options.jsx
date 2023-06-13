import React from 'react'
import user from "../images/user.png"
import plus from"../images/plus.png"
import "../styles/options.css"

function Options() {
  return (
    <div className='optionsMain'>
        <button className='buttonOption'>
            <img className='optionImage' src={plus} alt="Agregar" title='Agregar objetivo'/>
        </button>
        <button className='buttonOption'>
            <img className='optionImage' src={user} alt="Usuario" title='Usuario'/>
        </button>
    </div>
  )
}

export default Options