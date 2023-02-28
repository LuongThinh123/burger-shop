import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Banner from '~/components/Banner';
import Input from '~/components/Input';
import CheckoutOrder from '~/components/CheckoutOrder';
import {
  getCartProducts,
  setShippingInfor,
  getTotalCartProducts,
  setOrderDetails,
  getAccessToken,
  setCartProducts,
} from '~/utils/localStorage';
import { getCurrentDateTime } from '~/utils/dateFormat';
import * as orderApi from '~/api/orderApi';
import styles from './Checkout.module.scss';
import CartEmpty from '~/components/CartEmpty';

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

  const validationSchema = yup
    .object({
      firstName: yup.string().required('This field is required'),
      lastName: yup.string().required('This field is required'),
      region: yup.string().required('This field is required'),
      streetAddress: yup.string().required('This field is required'),
      town: yup.string().required('This field is required'),
      postCode: yup.string().required('This field is required'),
      phone: yup.string().required('This field is required'),
      email: yup.string().email('Please enter a valid email').required('This field is required'),
      payment: yup.string().required('This field is required'),
    })
    .required();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const cartProducts = getCartProducts();

  const navigate = useNavigate();

  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleCheckout = (data) => {
    console.log(data);
    const orderNumber = randomNumber(99999999, 10000000);
    const orderDate = getCurrentDateTime();

    const shippingInfor = {
      firstName: data.firstName,
      lastName: data.lastName,
      company: companyRef.current.value,
      region: data.region,
      streetAddressRef: data.streetAddress,
      streetAddress2Ref: streetAddress2Ref.current.value,
      city: data.town,
      country: countryRef.current.value,
      postCode: data.postCode,
      phone: data.phone,
      email: data.email,
      payment: data.payment,
      orderDate,
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
    <>
      <Banner heading={'Checkout'}>Checkout</Banner>
      <div className={cx('inner')}>
        {cartProducts.length !== 0 ? (
          <form className={cx('checkout-form')} onSubmit={handleSubmit(handleCheckout)}>
            <div className={cx('Billing-details')}>
              <h2 className={cx('Billing-details-title')}>Billing details</h2>
              <div className={cx('name-details')}>
                <Input
                  // ref={fristNameRef}
                  className={cx('input-form-name')}
                  inputClass={cx('bill-input')}
                  {...register('firstName', {
                    required: true,
                  })}
                  // onChange={(e) => setValue('firstName', e.target.value, { shouldValidate: true })} // Using setValue
                  error={errors.firstName}
                  type={'text'}
                  label="First name*"
                  placeholder="First Name"
                />
                <Input
                  className={cx('input-form-name')}
                  inputClass={cx('bill-input')}
                  label="Last name*"
                  {...register('lastName', {
                    required: true,
                  })}
                  // onChange={(e) => setValue('lastName', e.target.value, { shouldValidate: true })} // Using setValue
                  error={errors.lastName}
                  type={'text'}
                  placeholder="Last Name"
                />
              </div>
              <Input
                ref={companyRef}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Company name (optional)"
              />
              <Input
                type={'select'}
                defaultValue={'Select a country / region'}
                options={['Viet Nam', 'Afghanistan', 'Åland Islands', 'American Samoa']}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                {...register('region')}
                onChange={(e) => setValue('region', e.target.value, { shouldValidate: true })} // Using setValue
                error={errors.region}
                label="Country / Region *"
              />
              <Input
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Street address *"
                {...register('streetAddress')}
                error={errors.streetAddress}
                type={'text'}
                placeholder="Street address"
              />
              <Input
                ref={streetAddress2Ref}
                type={'text'}
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                errors={'hello'}
              />
              <Input
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Town / City *"
                {...register('town')}
                error={errors.town}
                type={'text'}
                placeholder="Town / City"
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
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Postcode *"
                {...register('postCode')}
                error={errors.postCode}
                type={'text'}
                placeholder="Postcode"
              />
              <Input
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Phone *"
                {...register('phone')}
                error={errors.phone}
                type={'text'}
                placeholder="Phone"
              />
              <Input
                className={cx('input-form')}
                inputClass={cx('bill-input')}
                label="Email address *"
                {...register('email')}
                error={errors.email}
                type={'text'}
                placeholder="Email"
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
              register={register}
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
