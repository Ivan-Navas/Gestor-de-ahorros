import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <section>
      <Outlet />
    </section>
    )
}

export default PublicLayout