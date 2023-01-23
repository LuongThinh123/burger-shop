import classNames from 'classnames/bind';
import styles from './authLayout.module.scss';

const cx = classNames.bind(styles);

function AuthenLayout({ children }) {
  return (
    <div>
      <div className={cx('wrapper')}>{children}</div>
    </div>
  );
}

export default AuthenLayout;
