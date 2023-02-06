import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import AuthenFormWrapper from '~/components/AuthenFormWrapper';
import Button from '~/components/Button';
import { getUser } from '~/utils/localStorage';
import { useAuthenContext } from '~/customHook';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as authenApi from '~/api/authenApi';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
  // const validationSchema = yup
  //   .object({
  //     username: yup.string().required('This field is required'),
  //     password: yup.string().required('This field is required'),
  //   })
  //   .required();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: 'all',
  //   reValidateMode: 'onBlur',
  //   resolver: yupResolver(validationSchema),
  // });

  const userInfor = getUser();
  const [username, setUsername] = useState(userInfor.username);
  const [password, setPassword] = useState('');

  const [, authenDispatch] = useAuthenContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    authenApi.login(newUser, authenDispatch, navigate);
  };

  return (
    // <div className={cx('inner')}>
    <AuthenFormWrapper>
      <form className={cx('login_form')} onSubmit={handleLogin}>
        <h1>Wellcome</h1>
        <div className={cx('login_body')}>
          <div className={cx('feild')}>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={cx('feild')}>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={cx('login_options')}>
            <label className={cx('rememberMe_checkbox')}>
              <input type="checkbox" value="remember me"></input>
              <span className={cx('checkbox_title')}>Remember me</span>
            </label>
            <div className={cx('forgot_password')}>
              <Link className={cx('forgot_password_link')} to="/forgot">
                <span className={cx('forgot_password_title')}>Forgot password?</span>
              </Link>
            </div>
          </div>
          <Button className={cx('signIn_btn')} primary>
            Sign in
          </Button>
        </div>
      </form>
      <div className={cx('connect_options')}>
        <div className={cx('connect_facebook')}>
          <FontAwesomeIcon className={cx('facebook_icon')} icon={faFacebookF} />
          <span className={cx('connect_facebook_title')}>Sign in with facebook</span>
        </div>
        <div className={cx('connect_google')}>
          <FontAwesomeIcon className={cx('google_icon')} icon={faGoogle} />
          <span className={cx('connect_google_title')}>Sign in with google</span>
        </div>
      </div>
      <div className={cx('register_navigate')}>
        <span className={cx('question')}>Don't have account yet ?</span>
        <Link className={cx('register_link')} to="/register">
          <span className={cx('title')}> Register</span>
        </Link>
      </div>
    </AuthenFormWrapper>
  );
}

export default Login;
