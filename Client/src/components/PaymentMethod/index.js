import classNames from 'classnames/bind';
import { useState, memo } from 'react';

import styles from './PaymentMethod.module.scss';

const cx = classNames.bind(styles);

function PaymentMethod() {
  return <ul className={cx('payment-method')}>
    <li className={cx('payment-method')}>
        <input />
    </li>
  </ul>;
}

export default memo(PaymentMethod);
