import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import * as productApi from '~/api/productApi';
import styles from './ShopSideBarProducts.module.scss';
import Skeleton from 'react-loading-skeleton';

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
        {productList.length !== 0 ? (
          productList.map((product) => (
            <div key={product._id} className={cx('recomend-item')}>
              <div className={cx('recomend-img')}>
                <Link to={`/detail/${product._id}`}>
                  <img src={require(`../../assets/images/${product.image}`)} alt="" />
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
          ))
        ) : (
          <>
            <Skeleton height={40} style={{ marginBottom: 15 }} />
            <Skeleton height={40} />
          </>
        )}
      </div>
    </div>
  );
}

export default memo(ShopSideBarProducts);
