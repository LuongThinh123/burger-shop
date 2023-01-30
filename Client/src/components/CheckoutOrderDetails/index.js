import classNames from 'classnames/bind';
import { memo } from 'react';
import Image from '~/components/Image';
import images from '~/assets/images';
import styles from './CheckoutOrderDetails.module.scss';

const cx = classNames.bind(styles);

function CheckoutOrderDetails({ data }) {
  console.log('re-render order details');
  return (
    <div className={cx('order-details')}>
      <div className={cx('order-products')}>
        <div className={cx('product-item')}>
          <div className={cx('product-name')}>
            <div className={cx('product-thumb')}>
              <Image className={cx('product-img')} src={images.test} />
            </div>
            <div className={cx('name')}>
              SHRIMP BURGER
              <strong className={cx('product-quantity')}> X 3</strong>
            </div>
          </div>
          <div className={cx('product-price')}>$35.00</div>
        </div>
      </div>
      <div className={cx('subtotal')}>
        <h4 className={cx('subtotal_title')}>Subtotal</h4>
        <span className={cx('subtotal_amount')}>$150.00</span>
      </div>
      <div className={cx('total')}>
        <h4 className={cx('total_title')}>Total</h4>
        <span className={cx('total_amount')}>$150.00</span>
      </div>
    </div>
  );
}

export default memo(CheckoutOrderDetails);