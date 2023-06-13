import React from 'react'
import benelli from"../images/benelli.jpg"

function GraphicsCard({titulo, porcentaje, cantidad, total}) {
  return (
    <>
        <h2 className='titleGraphics'>{titulo}</h2>
        <div className='central'>
            <div style={{"--porcentaje": porcentaje}} className='porcentajeFondo' >
                <svg>
                    <circle className='circle' r={"55"} cx={"50%"} cy={"50%"} pathLength={100}/>
                    <circle className='circle2' r={"55"} cx={"50%"} cy={"50%"} pathLength={100}/>
                </svg>
                <p className='porcentaje'>{porcentaje}%</p>
                
            </div>
        </div>
        <div className='infoContainer'>
            <div className="info">
                <h6 className='overTittle'>Cantidad</h6>
                <p className='overInfo'>{cantidad}</p>
            </div>
            <div className="info2">
                <h6 className='overTittle'>Total</h6>
                <p className='overInfo'>{total}</p>
            </div>
        </div>
    </>
  )
}

export default GraphicsCard