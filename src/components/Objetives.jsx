import React from 'react'
import "../styles/objetives.css"
import ObjetivesCard from '../components/ObjetivesCard'

function Objetives() {
  return (
    <div className='ObjetivesMain' >
        <div className='title'>
            <h1 className='tittleObjetives'>Objetivos</h1>
        </div>
        <div className='main' >
            <ObjetivesCard/>
        </div>
    </div>
  )
}

export default Objetives