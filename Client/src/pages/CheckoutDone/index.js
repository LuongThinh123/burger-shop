// import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import styles from './CheckoutDone.module.scss';
import images from '~/assets/images';

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
          <div className={cx('order-box')}>
            <div className={cx('order-id')}>
              <h3>ORDER ID: </h3>
              <span> 123456789</span>
            </div>
            <div className={cx('order-product-list')}>
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
        </div>
      </div>
    </>
  );
}

export default CheckoutDone;
