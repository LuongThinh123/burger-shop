import { useRef } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthenFormWrapper from '~/components/AuthenFormWrapper';
import { useAuthenContext } from '~/customHook';
import Input from '~/components/Input';
import * as authenApi from '~/api/authenApi';
import Button from '~/components/Button';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
  const validationSchema = yup
    .object({
      fullname: yup.string().required('This field is required'),
      email: yup.string().email('Please enter a valid email').required('This field is required'),
      username: yup.string().required('This field is required').min(4).max(12),
      password: yup.string().required('This field is required').min(6).max(15),
      confirmPassword: yup
        .string()
        .required('This field is required')
        .oneOf([yup.ref('password')], 'Passwords do not match'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const [, authenDispatch] = useAuthenContext();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    // preventDefault();

    const newUser = {
      fullname: data.fullname,
      email: data.email,
      username: data.username,
      password: data.password,
    };
    // console.log(newUser);

    const result = await authenApi.register(newUser, authenDispatch, navigate);
    if (result.error) {
      alert(result.errorMessage);
    }
  };

  return (
    <AuthenFormWrapper className={cx('register_container')}>
      <form className={cx('register_form')} onSubmit={handleSubmit(handleRegister)}>
        <h1>Register Form</h1>
        <div className={cx('register_body')}>
          <Input
            {...register('fullname')}
            error={errors.fullname}
            type={'text'}
            placeholder="Enter your full name"
            rounded
          />
          <Input type={'text'} {...register('email')} error={errors.email} placeholder="Enter your email" rounded />
          <Input
            type={'text'}
            {...register('username')}
            error={errors.username}
            placeholder="Enter your username"
            rounded
          />
          <Input
            {...register('password')}
            error={errors.password}
            type={'password'}
            placeholder="Enter your password"
            rounded
          />
          <Input
            {...register('confirmPassword')}
            error={errors.confirmPassword}
            type={'password'}
            placeholder="Comfirm your password"
            rounded
          />
          <Button className={cx('signIn_btn')} primary>
            Register
          </Button>
        </div>
      </form>
      <div className={cx('login_navigate')}>
        <span className={cx('question')}>Already have account ?</span>
        <Link className={cx('login_link')} to="/login">
          <span className={cx('title')}> Login</span>
        </Link>
      </div>
    </AuthenFormWrapper>
  );
}

export default Register;
