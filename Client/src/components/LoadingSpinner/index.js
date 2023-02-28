// import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoadingSpinner.module.scss';

const cx = classNames.bind(styles);

function LoadingSpinner() {
  return (
    <div className={cx('spinner-container')}>
      <div className={cx('loading-spinner')}></div>
      <div className={cx('loading-overlay')}></div>
    </div>
  );
}

export default LoadingSpinner;

// export default function LoadingSpinner() {
//   return (
//     <div className={cx('spinner-container')}>
//       <div className="loading-spinner"></div>
//     </div>
//   );
// }
