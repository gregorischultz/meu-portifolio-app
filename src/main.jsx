import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Apropos from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import './index.css';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {path:'/', element: <Home/>},
      {path:'Apropos', element: <Apropos/>},
      {path:'Projects', element: <Projects/>}
    ]
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);