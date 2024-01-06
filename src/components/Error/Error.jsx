import React from 'react'
import '../../styles/error.css'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <h2 className='error__message'>Ocurrió un error</h2>
      <h2 className='error__code'>404</h2>
      <NavLink to='/' className='error__return' > Regresar al inicio </NavLink>
    </div>
  )
}

export default Error