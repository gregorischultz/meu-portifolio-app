import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home.jsx';
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




// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root') // O segundo argumento define o container DOM onde o React vai renderizar
);