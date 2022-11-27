import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import AuthenFormWrapper from '~/components/AuthenFormWrapper';
import { useAuthenContext } from '~/customHook';
import * as authenApi from '~/api/authenApi';
import Button from '~/components/Button';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');

  const [, authenDispatch] = useAuthenContext();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      fullname: fullname,
      email: email,
      username: username,
      password: password,
    };

    authenApi.register(newUser, authenDispatch, navigate);
  };

  return (
    <AuthenFormWrapper className={cx('register_container')}>
      {/* <div className={cx('name')}>
        <h1>Xin chào</h1>
      </div> */}
      <form className={cx('register_form')} onSubmit={handleRegister}>
        <h1>Register Form</h1>
        <div className={cx('register_body')}>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input
                type="password"
                name="comfirmPassword"
                placeholder="Comfirm your password"
                onChange={(e) => setComfirmPassword(e.target.value)}
              />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>

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
