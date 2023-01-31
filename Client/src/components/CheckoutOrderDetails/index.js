import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import Image from '~/components/Image';
import images from '~/assets/images';
import { getCartProducts } from '~/utils/localStorage';
import styles from './CheckoutOrderDetails.module.scss';

const cx = classNames.bind(styles);

function CheckoutOrderDetails({ data }) {
  console.log('re-render order details');
  const [productList] = useState(getCartProducts());
  let total = 0;

  console.log(productList);

  return (
    <div className={cx('order-details')}>
      <div className={cx('order-products')}>
        {productList.map((product) => {
          total += product.sale * product.quantity;
          return (
            <div key={product._id} className={cx('product-item')}>
              <div className={cx('product-name')}>
                <div className={cx('product-thumb')}>
                  <Image className={cx('product-img')} src={images.test} />
                </div>
                <div className={cx('name')}>
                  <h4 className={cx('product-titile')}>{product.title}</h4>
                  <strong className={cx('product-quantity')}> X {product.quantity}</strong>
                </div>
              </div>
              <div className={cx('product-price')}>${product.sale * product.quantity}</div>
            </div>
          );
        })}
      </div>
      <div className={cx('subtotal')}>
        <h4 className={cx('subtotal_title')}>Subtotal</h4>
        <span className={cx('subtotal_amount')}>${total}</span>
      </div>
      <div className={cx('total')}>
        <h4 className={cx('total_title')}>Total</h4>
        <span className={cx('total_amount')}>${total}</span>
      </div>
    </div>
  );
}

export default memo(CheckoutOrderDetails);
