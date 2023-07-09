import React from 'react'
import "../styles/graphics.css"
import GraphicsCard from './GraphicsCard'

function Graphics({titulo, cantidad, total}) {
  return (
    <>
        <GraphicsCard
        titulo={titulo}
        cantidad={cantidad}
        total={total}
        />
    </>
  )
}

export default Graphics