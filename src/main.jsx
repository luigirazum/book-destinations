import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  MyReservations from './components/MyReservations.jsx'
import './index.css'


const router = createBrowserRouter([
  { path: '/', element: <Root />, },
  { path: 'my-reservations', element: <MyReservations />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
