import React from 'react'
import { useRoutes } from 'react-router'

const Routes = () => {

    const element = useRoutes([
        {
            path: "/",
        }
    ])
    
  return element
}

export default Routes