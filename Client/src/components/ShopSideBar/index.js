import { useState, useEffect, memo } from 'react';
import classNames from 'classnames/bind';

import styles from './ShopSideBar.module.scss';
import image from '~/assets/images';
import CategoryList from '../CategoryList';
import PriceFilter from '~/components/PriceFilter';
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
      {/* <div className={cx('shop-filter_price')}>
        <h3 className={cx('price_title')}>Filter by price</h3>
        <div className={cx('filter_price')}>
          <div className={cx('slider-track')}></div>
          <input type="range" min="1" max="9999" className={cx('range-input')} />
          <input type="range" min="1" max="9999" className={cx('range-input')} />
        </div>
      </div> */}

      <div className={cx('food-recomend')}>
        <h3 className={cx('recomend-title')}>We recomend</h3>
        <div className={cx('recomend-box')}>
          <div className={cx('recomend-item')}>
            <div className={cx('recomend-img')}>
              <a href="item-link">
                <img src={image.test} alt="" />
              </a>
            </div>
            <div className={cx('item-information')}>
              <div className={cx('item-name')}>
                <a href="/" className={cx('item-link')}>
                  Steak burger
                </a>
              </div>
              <div className={cx('item-price')}>
                <p className={cx('price')}>35.00$</p>
              </div>
            </div>
          </div>
          <div className={cx('recomend-item')}>
            <div className={cx('recomend-img')}>
              <a href="item-link">
                <img src={image.test} alt="" />
              </a>
            </div>
            <div className={cx('item-information')}>
              <h3 className={cx('item-name')}>Steak burger</h3>
              <div className={cx('item-price')}>
                <p className={cx('price')}>35.00$</p>
              </div>
            </div>
          </div>
          <div className={cx('recomend-item')}>
            <div className={cx('recomend-img')}>
              <a href="item-link">
                <img src={image.test} alt="" />
              </a>
            </div>
            <div className={cx('item-information')}>
              <h3 className={cx('item-name')}>Steak burger</h3>
              <div className={cx('item-price')}>
                <p className={cx('price')}>35.00$</p>
              </div>
            </div>
          </div>
          <div className={cx('recomend-item')}>
            <div className={cx('recomend-img')}>
              <a href="item-link">
                <img src={image.test} alt="" />
              </a>
            </div>
            <div className={cx('item-information')}>
              <h3 className={cx('item-name')}>Steak burger</h3>
              <div className={cx('item-price')}>
                <p className={cx('price')}>35.00$</p>
              </div>
            </div>
          </div>
          <div className={cx('recomend-item')}>
            <div className={cx('recomend-img')}>
              <a href="item-link">
                <img src={image.test} alt="" />
              </a>
            </div>
            <div className={cx('item-information')}>
              <h3 className={cx('item-name')}>Steak burger</h3>
              <div className={cx('item-price')}>
                <p className={cx('price')}>35.00$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ShopSideBar);
