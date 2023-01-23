// import { useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './OrderDetail.module.scss';

const cx = classNames.bind(styles);

function OrderDetail({ itemList, status }) {
  return (
    <div className={cx('order-box')}>
      <div className={cx('order-id-status')}>
        <div className={cx('order-id')}>
          <h3>ORDER ID: </h3>
          <span> 123456789</span>
        </div>
        {status && <h2 className={cx('order-status')}>PENDING</h2>}
      </div>
      <div className={cx('order-product-list')}>
        {/* {itemList
          ? itemList.map((item) => {
              return (
                <div className={cx('order-product')}>
                  <div className={cx('product-item')}>
                    <div className={cx('product-imgBox')}>
                      <img className={cx('product_img')} src={images.test} alt="" />
                    </div>
                    <div className={cx('product-info')}>
                      <span className={cx('product-name')}>SHRIMP HAMBURGER</span>
                      <span className={cx('product-quantity')}>X26</span>
                      <span className={cx('product-price')}>$56.00</span>
                    </div>
                  </div>
                  <span className={cx('product-total')}>$156.00</span>
                </div>
              );
            })
          : []} */}
        <div className={cx('order-product')}>
          <div className={cx('product-item')}>
            <div className={cx('product-imgBox')}>
              <img className={cx('product_img')} src={images.test} alt="" />
            </div>
            <div className={cx('product-info')}>
              <span className={cx('product-name')}>SHRIMP HAMBURGER</span>
              <span className={cx('product-quantity')}>X26</span>
              <span className={cx('product-price')}>$56.00</span>
            </div>
          </div>
          <span className={cx('product-total')}>$156.00</span>
        </div>

        <div className={cx('order-product')}>
          <div className={cx('product-item')}>
            <div className={cx('product-imgBox')}>
              <img className={cx('product_img')} src={images.test} alt="" />
            </div>
            <div className={cx('product-info')}>
              <span className={cx('product-name')}>SHRIMP HAMBURGER</span>
              <span className={cx('product-quantity')}>X26</span>
              <span className={cx('product-price')}>$56.00</span>
            </div>
          </div>
          <span className={cx('product-total')}>$156.00</span>
        </div>

        <div className={cx('order-product')}>
          <div className={cx('product-item')}>
            <div className={cx('product-imgBox')}>
              <img className={cx('product_img')} src={images.test} alt="" />
            </div>
            <div className={cx('product-info')}>
              <span className={cx('product-name')}>SHRIMP HAMBURGER</span>
              <span className={cx('product-quantity')}>X26</span>
              <span className={cx('product-price')}>$56.00</span>
            </div>
          </div>
          <span className={cx('product-total')}>$156.00</span>
        </div>

        <div className={cx('order-product')}>
          <div className={cx('product-item')}>
            <div className={cx('product-imgBox')}>
              <img className={cx('product_img')} src={images.test} alt="" />
            </div>
            <div className={cx('product-info')}>
              <span className={cx('product-name')}>SHRIMP HAMBURGER</span>
              <span className={cx('product-quantity')}>X26</span>
              <span className={cx('product-price')}>$56.00</span>
            </div>
          </div>
          <span className={cx('product-total')}>$156.00</span>
        </div>

        <div className={cx('order-product')}>
          <div className={cx('product-item')}>
            <div className={cx('product-imgBox')}>
              <img className={cx('product_img')} src={images.test} alt="" />
            </div>
            <div className={cx('product-info')}>
              <span className={cx('product-name')}>SHRIMP HAMBURGER</span>
              <span className={cx('product-quantity')}>X26</span>
              <span className={cx('product-price')}>$56.00</span>
            </div>
          </div>
          <span className={cx('product-total')}>$156.00</span>
        </div>
      </div>
      <div className={cx('order-footer')}>
        <div className={cx('order-footer-date')}>
          Order date:
          <span> December 19, 2022</span>
        </div>
        <div className={cx('order-footer-total')}>
          Total:
          <span> $156.00</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
