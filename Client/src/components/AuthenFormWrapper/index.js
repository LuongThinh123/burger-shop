import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';

import styles from './AuthenFormWrapper.module.scss';

const cx = classNames.bind(styles);

function AuthenFormWrapper({ children, className }) {
  const classes = cx('auth_container', {
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className={cx('content')}>{children}</div>
    </div>
  );
}

export default AuthenFormWrapper;
