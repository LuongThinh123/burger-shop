// import { useState } from 'react';
import classNames from 'classnames/bind';

import Toast from '~/components/Toast';
import ShopSideBar from '~/components/ShopSideBar';
import ProductList from '~/components/ProductList';
import { useFilterContext } from '~/customHook';
import Banner from '~/components/Banner';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
  // const path = [{
  //   link: 'products',
  const [filterState, filterDispatch] = useFilterContext();
  console.log('food');
  // }]
  return (
    <>
      <Banner heading={'Shop'}>Shop</Banner>
      <div className={cx('inner')}>
        <ShopSideBar filterDispatch={filterDispatch} />
        <ProductList filterState={filterState} filterDispatch={filterDispatch} />
      </div>
      <Toast position={'top-right'} />
    </>
  );
}

export default Product;
