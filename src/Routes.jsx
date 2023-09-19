import { BaseLayout } from './layouts/BaseLayout/BaseLayout';
import { Contacts } from './pages/Contacts/Contacts';
import { Products } from './pages/Products/Products';
import { About } from './pages/About/About';
import { Product } from './pages/Product/Product';
import { Collection } from './pages/Collection/Collection';
import { Information } from './pages/Information/Information';
import { Deals } from './pages/Deals/Deals';

export const routes = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/home',
        element: <Products />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'deals',
        element: <Deals />,
      },
      {
        path: 'collection',
        element: <Collection />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'catalog',
        element: <Products />,
      },
      {
        path: 'product/:productId',
        element: <Product />,
      },
      {
        path: 'information',
        element: <Information />,
      }
    ],
  },
];
