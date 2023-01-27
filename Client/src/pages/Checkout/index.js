// import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import Input from '~/components/Input';
import CheckoutOrder from '~/components/CheckoutOrder';
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
          <CheckoutOrder />
        </form>
      </div>
    </>
  );
}

export default Checkout;
