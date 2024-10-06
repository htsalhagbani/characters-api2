import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Add from './components/Add.jsx';
import Update from './components/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Add",
    element: <Add/>,
  },
  {
    path: "/Update/:id",
    element: <Update/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
