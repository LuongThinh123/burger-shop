import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import CheckoutOrderDetails from '../CheckoutOrderDetails';
import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import * as orderApi from '~/api/orderApi';
import styles from './CheckoutOrder.module.scss';
import {
  getCartProducts,
  setShippingInfor,
  getTotalCartProducts,
  setOrderDetails,
  getAccessToken,
  setCartProducts,
} from '~/utils/localStorage';

const cx = classNames.bind(styles);

function CheckoutOrder({
  fristNameRef,
  lastNameRef,
  companyRef,
  regionRef,
  streetAddressRef,
  streetAddress2Ref,
  cityRef,
  countryRef,
  postCodeRef,
  phoneRef,
  emailRef,
}) {
  const [radioChecked, setRadioChecked] = useState(1);
  const navigate = useNavigate();

  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    let payment = '';
    switch (radioChecked) {
      case 1:
        payment = 'Direct bank transfer';
        break;
      case 2:
        payment = 'Check payments';
        break;
      case 3:
        payment = 'Cash on delivery';
        break;
      case 4:
        payment = 'PayPal';
        break;
      default:
    }

    const orderNumber = randomNumber(99999999, 10000000);

    const shippingInfor = {
      firstName: fristNameRef.current.value,
      lastNameRef: lastNameRef.current.value,
      companyRef: companyRef.current.value,
      regionRef: regionRef.current.value,
      streetAddressRef: streetAddressRef.current.value,
      streetAddress2Ref: streetAddress2Ref.current.value,
      cityRef: cityRef.current.value,
      countryRef: countryRef.current.value,
      postCodeRef: postCodeRef.current.value,
      phoneRef: phoneRef.current.value,
      emailRef: emailRef.current.value,
      payment: payment,
      orderNumber,
    };

    const products = getCartProducts();
    const totalPrice = getTotalCartProducts();

    setShippingInfor({ ...shippingInfor, totalPrice: totalPrice });
    setOrderDetails(products);
    setCartProducts([]);

    const orderInfor = {
      products,
      totalPrice,
      shippingInfor,
    };

    orderApi.addOrder(getAccessToken(), orderInfor);

    navigate('/checkout-done');
  };

  return (
    <div className={cx('your-order')}>
      <h2 className={cx('your-order-title')}>Your order</h2>
      <div className={cx('order-review')}>
        <CheckoutOrderDetails data={getCartProducts()} />
        <div className={cx('payment')}>
          <ul className={cx('payment-methods')}>
            <li className={cx('payment-method')}>
              <input
                checked={radioChecked === 1}
                className={cx('input-radio')}
                id="payment-direct"
                type="radio"
                onChange={() => setRadioChecked(1)}
              />
              <label htmlFor="payment-direct" onClick={() => setRadioChecked(1)}>
                Direct bank transfer
              </label>
              <div className={cx('payment-description', radioChecked !== 1 && 'hidden')}>
                <p className={cx('description')}>
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                  Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>
            </li>
            <li className={cx('payment-method')}>
              <input
                checked={radioChecked === 2}
                className={cx('input-radio')}
                id="payment-check"
                type="radio"
                onChange={() => setRadioChecked(2)}
              />
              <label htmlFor="payment-check" onClick={() => setRadioChecked(2)}>
                Check payments
              </label>
              <div className={cx('payment-description', radioChecked !== 2 && 'hidden')}>
                <p className={cx('description')}>
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                </p>
              </div>
            </li>
            <li className={cx('payment-method')}>
              <input
                checked={radioChecked === 3}
                className={cx('input-radio')}
                id="payment-delivery"
                type="radio"
                onChange={() => setRadioChecked(3)}
              />
              <label htmlFor="payment-delivery" onClick={() => setRadioChecked(3)}>
                Cash on delivery
              </label>
              <div className={cx('payment-description', radioChecked !== 3 && 'hidden')}>
                <p className={cx('description')}>Pay with cash upon delivery.</p>
              </div>
            </li>
            <li className={cx('payment-method')}>
              <input
                checked={radioChecked === 4}
                className={cx('input-radio')}
                id="payment-paypal"
                type="radio"
                onChange={() => setRadioChecked(4)}
              />
              <label htmlFor="payment-paypal" onClick={() => setRadioChecked(4)}>
                PayPal
                <Image className={cx('paypal-img')} src={images.paypal} />
              </label>
              <div className={cx('payment-description', radioChecked !== 4 && 'hidden')}>
                <p className={cx('description')}>
                  Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                </p>
              </div>
            </li>
          </ul>
          <Button primary className={cx('place-order-btn')} onClick={handlePlaceOrder}>
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutOrder;
