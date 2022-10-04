import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Product from '~/pages/Product';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/upload', component: Upload, layout: null },
  { path: '/profile', component: Profile, layout: HeaderOnly },
  { path: '/products', component: Product },
  // { path: '/courses/', component: Product },
];

export const privateRoutes = [];
