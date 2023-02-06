import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './ShopSideBar.module.scss';
import CategoryList from '../CategoryList';
import PriceFilter from '~/components/PriceFilter';
import ShopSideBarProducts from '../ShopSideBarProducts';
// import { useFilterContext } from '~/customHook'

const cx = classNames.bind(styles);

function ShopSideBar({ filterState, filterDispatch }) {
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
      {/* <div className={cx('shop-filter_price')}>
        <h3 className={cx('price_title')}>Filter by price</h3>
        <div className={cx('filter_price')}>
          <div className={cx('slider-track')}></div>
          <input type="range" min="1" max="9999" className={cx('range-input')} />
          <input type="range" min="1" max="9999" className={cx('range-input')} />
        </div>
      </div> */}
    </div>
  );
}

export default memo(ShopSideBar);
