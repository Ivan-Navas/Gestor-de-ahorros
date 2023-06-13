import React from 'react'
import ObjetivesCard from './ObjetivesCard'
import "../styles/caroucel.css"

function Caroucel({titulo}) {
  return (
    <div className='caroucelMain'>
        <h2 className='tittleCaroucel'>Objetivo reciente</h2>
        {/* <ObjetivesCard/> */}
    </div>
  )
}

export default Caroucel