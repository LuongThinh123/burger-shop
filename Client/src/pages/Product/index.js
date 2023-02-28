import { useState, useCallback } from 'react';
import classNames from 'classnames/bind';

import Toast from '~/components/Toast';
import ShopSideBar from '~/components/ShopSideBar';
import ProductList from '~/components/ProductList';
import LoadingSpinner from '~/components/LoadingSpinner';
import { useFilterContext, useLoadingSpinner } from '~/customHook';
import Banner from '~/components/Banner';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
  // const path = [{
  //   link: 'products',
  const [filterState, filterDispatch] = useFilterContext();
  // const [loading, setLoading] = useLoadingSpinner();

  console.log('food');
  // }]
  return (
    <>
      {/* {loading} */}
      <Banner heading={'Shop'} searchFilter={filterState.searchTitle} filterDispatch={filterDispatch}>
        Shop
      </Banner>
      <div className={cx('inner')}>
        <ShopSideBar
          filterState={filterState}
          filterDispatch={filterDispatch}
          // showLoading={showLoading}
          // hideLoading={hideLoading}
        />
        <ProductList
          filterState={filterState}
          filterDispatch={filterDispatch}
          // setLoading={useCallback(() => setLoading, [setLoading])}
          // setLoading={setLoading}
        />
      </div>
      <Toast position={'top-left'} />
    </>
  );
}

export default Product;
