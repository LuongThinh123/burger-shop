import { HeaderOnly } from '~/components/Layout';
import { AuthenLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import Product from '~/pages/Product';
import Detail from '~/pages/Detail';
import CartPage from '~/pages/CartPage';
import CheckoutDone from '~/pages/CheckoutDone';
import Contact from '~/pages/Contact';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/upload', component: Upload, layout: null },
  { path: '/login', component: Login, layout: AuthenLayout },
  { path: '/register', component: Register, layout: AuthenLayout },
  { path: '/profile', component: Profile, layout: HeaderOnly },
  { path: '/products', component: Product },
  { path: '/detail', component: Detail },
  { path: '/cart', component: CartPage },
  { path: '/checkout-done', component: CheckoutDone },
  { path: '/contact', component: Contact },
];

export const privateRoutes = [];
