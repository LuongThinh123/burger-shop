import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import image from '~/assets/images';
import * as productApi from '~/api/productApi';

import styles from './ShopSideBarProducts.module.scss';
// import { useFilterContext } from '~/customHook'

const cx = classNames.bind(styles);

function ShopSideBarProducts() {
  const [productList, setproductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getRandomProducts(5);
        console.log(response);
        setproductList(response);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className={cx('food-recomend')}>
      <h3 className={cx('recomend-title')}>We recomend</h3>
      <div className={cx('recomend-box')}>
        {productList.map((product) => (
          <div key={product._id} className={cx('recomend-item')}>
            <div className={cx('recomend-img')}>
              <Link to={`/detail/${product._id}`}>
                <img src={image.test} alt="" />
              </Link>
            </div>
            <div className={cx('item-information')}>
              <div className={cx('item-name')}>
                <Link to={`/detail/${product._id}`} className={cx('item-link')}>
                  {product.title}
                </Link>
              </div>
              <div className={cx('item-price')}>
                <p className={cx('price')}>${product.sale}</p>
              </div>
            </div>
          </div>
        ))}
        {/* <div className={cx('recomend-item')}>
          <div className={cx('recomend-img')}>
            <Link to={`/detail/${product._id}`}>
              <img src={image.test} alt="" />
            </Link>
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
        </div> */}
        {/* <div className={cx('recomend-item')}>
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
        </div> */}
      </div>
    </div>
  );
}

export default ShopSideBarProducts;
