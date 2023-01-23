import { useRef } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import AuthenFormWrapper from '~/components/AuthenFormWrapper';
import { useAuthenContext } from '~/customHook';
import Input from '~/components/Input';
import * as authenApi from '~/api/authenApi';
import Button from '~/components/Button';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
  // const [fullname, setFullname] = useState('');
  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [comfirmPassword, setComfirmPassword] = useState('');

  const fullNameRef = useRef();
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const comfirmPasswordRef = useRef();

  const [, authenDispatch] = useAuthenContext();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      fullname: fullNameRef.current.value,
      email: emailRef.current.value,
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    authenApi.register(newUser, authenDispatch, navigate);
  };

  return (
    <AuthenFormWrapper className={cx('register_container')}>
      <form className={cx('register_form')} onSubmit={handleRegister}>
        <h1>Register Form</h1>
        <div className={cx('register_body')}>
          <Input ref={fullNameRef} type={'text'} name={'fullname'} placeholder="Enter your full name" rounded />
          <Input ref={emailRef} type={'text'} name={'email'} placeholder="Enter your email" rounded />
          <Input ref={userNameRef} type={'text'} name={'username'} placeholder="Enter your username" rounded />
          <Input ref={passwordRef} type={'password'} name={'password'} placeholder="Enter your password" rounded />
          <Input
            ref={comfirmPasswordRef}
            type={'password'}
            name={'comfirmPassword'}
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
