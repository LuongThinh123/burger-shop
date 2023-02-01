// import { useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { getCurrentDateTime } from '~/utils/dateFormat';
import styles from './OrderDetail.module.scss';

const cx = classNames.bind(styles);

function OrderDetail({ itemList, status, orderNumber, orderId }) {
  let totalPrice = 0;

  const handleChangeStatus = (status) => {};

  return (
    <div data-id={orderId} className={cx('order-box')}>
      <div className={cx('order-id-status')}>
        <div className={cx('order-id')}>
          <h3>ORDER NUMBER: </h3>
          <span> {orderNumber}</span>
        </div>
        {status && <h2 className={cx('order-status')}>{status.title}</h2>}
      </div>
      <div className={cx('order-product-list')}>
        {itemList
          ? itemList.map((item) => {
              totalPrice += item.sale * item.quantity;
              return (
                <div key={item._id} className={cx('order-product')}>
                  <div className={cx('product-item')}>
                    <div className={cx('product-imgBox')}>
                      <img className={cx('product_img')} src={images.test} alt="" />
                    </div>
                    <div className={cx('product-info')}>
                      <span className={cx('product-name')}>{item.title}</span>
                      <span className={cx('product-quantity')}>X{item.quantity}</span>
                      <span className={cx('product-price')}>${item.sale}</span>
                    </div>
                  </div>
                  <span className={cx('product-total')}>${item.sale * item.quantity}</span>
                </div>
              );
            })
          : []}
      </div>
      <div className={cx('order-footer')}>
        <div className={cx('order-footer-date')}>
          Order date:
          <span> {getCurrentDateTime()}</span>
        </div>
        <div className={cx('order-footer-total')}>
          Total:
          <span> ${totalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
