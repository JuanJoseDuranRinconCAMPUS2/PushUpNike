import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomeNike from './componets/home/HomeNike'
import Error404 from './componets/Error404'

const root = createBrowserRouter([
  {
    path: "*",
    element: <Error404/>
  },

])

let app = document.querySelector('#root')

ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <Error404/>
  </React.StrictMode>,
)