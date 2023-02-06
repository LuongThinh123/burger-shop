import classNames from 'classnames/bind';
import { useState, memo, useEffect } from 'react';

import * as productApi from '~/api/productApi';
import ProductCard from '../ProductCard';
import Button from '../Button';
import { useToastContext } from '~/customHook';
import styles from './HomeProduct.module.scss';

const cx = classNames.bind(styles);

function HomeProduct() {
  const [productList, setproductList] = useState([]);
  const [, toastDispatch] = useToastContext();
  console.log('re-render home product');

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getRandomProducts(8);
        console.log(response);
        setproductList(response);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className={cx('home-products-inner')}>
      <h2 className={cx('products-heading')}>Hot Fresh</h2>
      <h2 className={cx('products-title')}>Shop our favourites</h2>
      <div className={cx('home-products')}>
        {productList.map((product) => (
          <ProductCard key={product._id} data={product} className={cx('product-item')} toastDispatch={toastDispatch} />
        ))}
      </div>
      <Button primary className={cx('view-all-btn')} to={'/products'}>
        VIEW ALL PRODUCTS
      </Button>
    </div>
  );
}

export default HomeProduct;
