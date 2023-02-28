import { memo, useState } from 'react';
import classNames from 'classnames/bind';

import CheckoutOrderDetails from '../CheckoutOrderDetails';
import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './CheckoutOrder.module.scss';
import { getCartProducts } from '~/utils/localStorage';

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
  register,
}) {
  const [radioChecked, setRadioChecked] = useState(1);

  // const handlePlaceOrder = (e) => {
  //   e.preventDefault();

  //   let payment = '';
  //   switch (radioChecked) {
  //     case 1:
  //       payment = 'Direct bank transfer';
  //       break;
  //     case 2:
  //       payment = 'Check payments';
  //       break;
  //     case 3:
  //       payment = 'Cash on delivery';
  //       break;
  //     case 4:
  //       payment = 'PayPal';
  //       break;
  //     default:
  //   }

  //   const orderNumber = randomNumber(99999999, 10000000);
  //   const orderDate = getCurrentDateTime();

  //   const shippingInfor = {
  //     firstName: fristNameRef.current.value,
  //     lastNameRef: lastNameRef.current.value,
  //     companyRef: companyRef.current.value,
  //     regionRef: regionRef.current.value,
  //     streetAddressRef: streetAddressRef.current.value,
  //     streetAddress2Ref: streetAddress2Ref.current.value,
  //     cityRef: cityRef.current.value,
  //     countryRef: countryRef.current.value,
  //     postCodeRef: postCodeRef.current.value,
  //     phoneRef: phoneRef.current.value,
  //     emailRef: emailRef.current.value,
  //     payment: payment,
  //     orderDate,
  //     orderNumber,
  //   };

  //   const products = getCartProducts();
  //   const totalPrice = getTotalCartProducts();

  //   setShippingInfor({ ...shippingInfor, totalPrice: totalPrice });
  //   setOrderDetails(products);
  //   setCartProducts([]);

  //   const orderInfor = {
  //     products,
  //     totalPrice,
  //     shippingInfor,
  //   };

  //   orderApi.addOrder(getAccessToken(), orderInfor);

  //   navigate('/checkout-done');
  // };

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
                value="Direct bank transfer"
                type="radio"
                {...register('payment')}
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
                value="Check payments"
                {...register('payment')}
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
                value="Cash on delivery"
                {...register('payment')}
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
                value="PayPal"
                {...register('payment')}
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
          <Button primary className={cx('place-order-btn')}>
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(CheckoutOrder);
