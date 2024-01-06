import React, { useContext } from 'react'
import { Context } from '../Context/Context'

function useAuth() {
  return useContext(Context)
}

export default useAuth