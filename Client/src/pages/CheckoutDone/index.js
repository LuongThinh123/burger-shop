// import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

import Banner from '~/components/Banner';
import OrderDetail from '~/components/OrderDetail';
import { getCartProducts, getTotalCartProducts, getShippingInfor } from '~/utils/localStorage';
import { getCurrentDateTime } from '~/utils/dateFormat';
import styles from './CheckoutDone.module.scss';

const cx = classNames.bind(styles);

function CheckoutDone() {
  const productList = getCartProducts();
  const shippingInfor = getShippingInfor();
  const totalPrice = getTotalCartProducts();

  console.log(shippingInfor);

  useEffect(() => {}, []);

  return (
    <>
      <Banner heading={'Checkout'}>Order recived</Banner>
      <div className={cx('inner')}>
        <h1 className={cx('thanks-title')}>Thank you. your order has been received.</h1>
        <ul className={cx('order-infor')}>
          <li className={cx('infor', 'order-number')}>
            <span>Order number:</span>
            <strong>{shippingInfor.orderNumber}</strong>
          </li>
          <li className={cx('infor', 'order-date')}>
            <span>Date:</span>
            <strong>{getCurrentDateTime()}</strong>
          </li>
          <li className={cx('infor', 'order-total')}>
            <span>Total:</span>
            <strong>${totalPrice}</strong>
          </li>
          <li className={cx('infor', ' order-payment')}>
            <span>Payment method:</span>
            <strong>{shippingInfor.payment}</strong>
          </li>
        </ul>

        <div className={cx('order-details')}>
          <h1 className={cx('order-details-title')}>Order details</h1>
          <OrderDetail itemList={productList} orderNumber={shippingInfor.orderNumber} />
        </div>
      </div>
    </>
  );
}

export default CheckoutDone;
