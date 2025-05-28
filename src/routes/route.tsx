import App from "@/App";
import About from "@/pages/AboutPage";
import Collection from "@/pages/CollectionPage";
import Home from "@/pages/HomePage";
import { createBrowserRouter } from 'react-router-dom';
// import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
       index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/collection',
        element: <Collection />
      },
    
    ]
  },
])


export default routes;