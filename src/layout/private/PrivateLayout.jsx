import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

function PrivateLayout() {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export default PrivateLayout