import { HeaderOnly } from '~/components/Layout';
import { AuthenLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import Product from '~/pages/Product';
import CartPage from '~/pages/CartPage';
import CheckoutDone from '~/pages/CheckoutDone';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/upload', component: Upload, layout: null },
  { path: '/login', component: Login, layout: AuthenLayout },
  { path: '/register', component: Register, layout: AuthenLayout },
  { path: '/profile', component: Profile, layout: HeaderOnly },
  { path: '/products', component: Product },
  { path: '/cart', component: CartPage },
  { path: '/checkout-done', component: CheckoutDone },
];

export const privateRoutes = [];
