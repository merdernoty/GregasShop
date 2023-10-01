import { BaseLayout } from './layouts/BaseLayout/BaseLayout';
import { Contacts } from './pages/Contacts/Contacts';
import { Products } from './pages/Products/Products';
import { About } from './pages/About/About';
import { Deals } from './pages/Deals/Deals';
import { Wholesale } from './pages/Wholesale/Wholesale';
import { Payment } from './pages/Payment/Payment';
import { Cargo } from './pages/Cargo/Cargo';
import { Product } from './pages/Product/Product';
import { Collection } from './pages/Collection/Collection';
import { Information } from './pages/Information/Information';
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
        element: < Deals />,
      },
      {
        path: 'wholesale',
        element: <Wholesale />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path:'cargo',
        element: <Cargo />
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
        path: 'product/:productId/:title/:price/:image/:id',
        element: <Product />,
      },
      {
        path: 'information',
        element: <Information />,
      },
    ],
  },
];
