// import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import OrderDetail from '~/components/OrderDetail';
import styles from './CheckoutDone.module.scss';

const cx = classNames.bind(styles);

function CheckoutDone() {
  return (
    <>
      <Banner heading={'Checkout'}>Order recived</Banner>
      <div className={cx('inner')}>
        <h1 className={cx('thanks-title')}>Thank you. your order has been received.</h1>
        <ul className={cx('order-infor')}>
          <li className={cx('infor', 'order-number')}>
            <span>Order number:</span>
            <strong>489</strong>
          </li>
          <li className={cx('infor', 'order-date')}>
            <span>Date:</span>
            <strong>December 19, 2022</strong>
          </li>
          <li className={cx('infor', 'order-total')}>
            <span>Total:</span>
            <strong>$16.00</strong>
          </li>
          <li className={cx('infor', ' order-payment')}>
            <span>Payment method:</span>
            <strong>Direct bank transfer</strong>
          </li>
        </ul>

        <div className={cx('order-details')}>
          <h1 className={cx('order-details-title')}>Order details</h1>
          <OrderDetail />
        </div>
      </div>
    </>
  );
}

export default CheckoutDone;
