import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import AuthenFormWrapper from '~/components/AuthenFormWrapper';
import Button from '~/components/Button';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
  return (
    <AuthenFormWrapper className={cx('register_container')}>
      {/* <div className={cx('name')}>
        <h1>Xin chào</h1>
      </div> */}
      <form className={cx('register_form')}>
        <h1>Register Form</h1>
        <div className={cx('register_body')}>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input type="text" name="fullname" placeholder="Enter your fullname" />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input type="text" name="email" placeholder="Enter your email" />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input type="text" name="username" placeholder="Enter your username" />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input type="password" name="password" placeholder="Enter your password" />
            </div>
            <span className={cx('input_error')}>This field is required!</span>
          </div>
          <div className={cx('form_group')}>
            <div className={cx('feild')}>
              <input type="password" name="comfirmPassword" placeholder="Comfirm your password" />
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
