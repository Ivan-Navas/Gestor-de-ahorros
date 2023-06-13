import React from 'react'
import '../styles/modal.css'
import logoInput from '../images/add.png'

function ModalAddObjetive() {
  return (
    <div className='modalContainer'>
        <h2 className='tituloModal'>Nuevo Objetivo</h2>

        <form className='form' >
            <input className='input' type="text" placeholder='Objetivo' />
            <input className='input' type="number" placeholder='Cantidad' />
            <div className='fileContainer'>
              <img className='logoInput' src={logoInput} alt="logoInput" />
              <input className='file' type="file" />
            </div>
        </form>
    </div>
  )
}

export default ModalAddObjetive

