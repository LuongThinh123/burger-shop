import routesConfig from '~/config/routes';

import { AuthenLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Product from '~/pages/Product';
import Detail from '~/pages/Detail';
import CartPage from '~/pages/CartPage';
import Checkout from '~/pages/Checkout';
import CheckoutDone from '~/pages/CheckoutDone';
import UserPurchase from '~/pages/UserPurchase';
import UserProfile from '~/pages/UserProfile';
import Contact from '~/pages/Contact';

export const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.login, component: Login, layout: AuthenLayout },
  { path: routesConfig.register, component: Register, layout: AuthenLayout },
  { path: routesConfig.products, component: Product },
  { path: routesConfig.detail, component: Detail },
  { path: routesConfig.cart, component: CartPage },
  { path: routesConfig.checkoutDone, component: CheckoutDone },
  { path: routesConfig.checkout, component: Checkout },
  { path: routesConfig.userPurchase, component: UserPurchase },
  { path: routesConfig.userAccount, component: UserProfile },
  { path: routesConfig.contact, component: Contact },
];

export const privateRoutes = [];
