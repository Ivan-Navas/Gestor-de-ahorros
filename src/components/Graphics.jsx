import React from 'react'
import "../styles/graphics.css"
import GraphicsCard from './GraphicsCard'

function Graphics({titulo, porcentaje, cantidad, total}) {
  return (
    <div className='graphicsMain'>
        <GraphicsCard
        titulo={titulo}
        porcentaje={porcentaje}
        cantidad={cantidad}
        total={total}
        />
    </div>
  )
}

export default Graphics