// import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import Input from '~/components/Input';
import Image from '~/components/Image';
import images from '~/assets/images';
import styles from './Checkout.module.scss';
// import * as cartApi from '~/api/cartApi';
// import { getAccessToken } from '~/utils/localStorage';
// import CartPageProduct from '~/components/CartPageProduct';

const cx = classNames.bind(styles);

function Checkout() {
  return (
    <>
      <Banner heading={'Checkout'}>Checkout</Banner>
      <div className={cx('inner')}>
        <form className={cx('checkout-form')}>
          <div className={cx('Billing-details')}>
            <h2 className={cx('Billing-details-title')}>Billing details</h2>
            <div className={cx('name-details')}>
              <Input
                type={'text'}
                className={cx('input-form-name')}
                inputClass={cx('bill-input')}
                label="First name*"
                errors={'hello'}
              />
              <Input
                type={'text'}
                className={cx('input-form-name')}
                inputClass={cx('bill-input')}
                label="Last name*"
                errors={'hello'}
              />
            </div>
            <Input
              type={'text'}
              className={cx('input-form')}
              inputClass={cx('bill-input')}
              label="Company name (optional)"
              errors={'hello'}
            />
            <Input
              type={'text'}
              className={cx('input-form')}
              inputClass={cx('bill-input')}
              label="Country / Region *"
              errors={'hello'}
            />
            <Input
              type={'text'}
              className={cx('input-form')}
              inputClass={cx('bill-input')}
              label="Street address *"
              errors={'hello'}
            />
            <Input type={'text'} className={cx('input-form')} inputClass={cx('bill-input')} errors={'hello'} />
            <Input
              type={'text'}
              className={cx('input-form')}
              inputClass={cx('bill-input')}
              label="Town / City *"
              errors={'hello'}
            />
            <Input
              type={'text'}
              className={cx('input-form')}
              inputClass={cx('bill-input')}
              label="County (optional)"
              errors={'hello'}
            />
            <Input
              type={'text'}
              className={cx('input-form')}
              inputClass={cx('bill-input')}
              label="Postcode *"
              errors={'hello'}
            />
            <Input
              type={'text'}
              className={cx('input-form')}
              inputClass={cx('bill-input')}
              label="Phone *"
              errors={'hello'}
            />
            <Input
              type={'text'}
              className={cx('input-form')}
              inputClass={cx('bill-input')}
              label="Email address *"
              errors={'hello'}
            />
          </div>
          <div className={cx('your-order')}>
            <h2 className={cx('your-order-title')}>Your order</h2>
            <div className={cx('order-review')}>
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;
