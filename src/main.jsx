import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routers';
import AuthProvider from './Providers/AuthProvider';




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
