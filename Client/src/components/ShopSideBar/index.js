import { memo } from 'react';
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './ShopSideBar.module.scss';
import CategoryList from '../CategoryList';
import PriceFilter from '~/components/PriceFilter';
import ShopSideBarProducts from '../ShopSideBarProducts';
// import { useFilterContext } from '~/customHook'

const cx = classNames.bind(styles);

function ShopSideBar({ filterState, filterDispatch, ...passProps }) {
  // const [, filterDispatch] = useFilterContext();
  // const { categoryIdList } = filterState;
  console.log('re-render shop side bar');

  // console.log(filterState);
  // console.log(categories);
  return (
    <div className={cx('shop_sidebar')}>
      <CategoryList categoryFilter={filterState.categoryIdList} filterDispatch={filterDispatch} />
      <PriceFilter priceFilter={filterState.price} filterDispatch={filterDispatch} />
      <ShopSideBarProducts />
    </div>
  );
}

export default memo(ShopSideBar);
