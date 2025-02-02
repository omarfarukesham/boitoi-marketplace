import { createBrowserRouter } from 'react-router-dom';
import App from "@/App";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import CheckoutPage from "@/pages/CheckoutPage";
import AboutPage from "@/pages/AboutPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivateRoutes from "./PrivateRoutes";
import FavoriteProductPage from '@/pages/FavoriteProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/product/:id',
        element: <ProductDetailsPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/favorite',
        element: <FavoriteProductPage />
      },
      {
        path: '/checkout',
        element: <PrivateRoutes />,
        children: [
          {
            index: true,
            element: <CheckoutPage />
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

export default router;
