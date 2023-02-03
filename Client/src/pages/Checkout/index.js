import { useRef } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import Input from '~/components/Input';
import CheckoutOrder from '~/components/CheckoutOrder';
import styles from './Checkout.module.scss';
import CartEmpty from '~/components/CartEmpty';
import { getCartProducts } from '~/utils/localStorage';

const cx = classNames.bind(styles);

function Checkout() {
  const fristNameRef = useRef();
  const lastNameRef = useRef();
  const companyRef = useRef();
  const regionRef = useRef();
  const streetAddressRef = useRef();
  const streetAddress2Ref = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const postCodeRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const cartProducts = getCartProducts();
  return (
    <>
      <Banner heading={'Checkout'}>Checkout</Banner>
      <div className={cx('inner')}>
        {cartProducts.length !== 0 ? (
          <form className={cx('checkout-form')}>
            <div className={cx('Billing-details')}>
              <h2 className={cx('Billing-details-title')}>Billing details</h2>
              <div className={cx('name-details')}>
                <Input
                  ref={fristNameRef}
                  type={'text'}
                  className={cx('input-form-name')}
                  inputClass={cx('bill-input')}
                  label="First name*"
                  errors={'hello'}
                />
                <Input
                  ref={lastNameRef}
                  type={'text'}
                  className={cx('input-form-name')}
                  inputClass={cx('bill-input')}
                  label="Last name*"
                  errors={'hello'}
                />
              </div>
              <Input
                ref={companyRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Company name (optional)"
                errors={'hello'}
              />
              <Input
                ref={regionRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Country / Region *"
                errors={'hello'}
              />
              <Input
                ref={streetAddressRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Street address *"
                errors={'hello'}
              />
              <Input
                ref={streetAddress2Ref}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                errors={'hello'}
              />
              <Input
                ref={cityRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Town / City *"
                errors={'hello'}
              />
              <Input
                ref={countryRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="County (optional)"
                errors={'hello'}
              />
              <Input
                ref={postCodeRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Postcode *"
                errors={'hello'}
              />
              <Input
                ref={phoneRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Phone *"
                errors={'hello'}
              />
              <Input
                ref={emailRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Email address *"
                errors={'hello'}
              />
            </div>
            <CheckoutOrder
              fristNameRef={fristNameRef}
              lastNameRef={lastNameRef}
              companyRef={companyRef}
              regionRef={regionRef}
              streetAddressRef={streetAddressRef}
              streetAddress2Ref={streetAddress2Ref}
              cityRef={cityRef}
              countryRef={countryRef}
              postCodeRef={postCodeRef}
              phoneRef={phoneRef}
              emailRef={emailRef}
            />
          </form>
        ) : (
          <CartEmpty />
        )}
      </div>
    </>
  );
}

export default Checkout;
