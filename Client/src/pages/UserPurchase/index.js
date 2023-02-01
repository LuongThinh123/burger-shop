import classNames from 'classnames/bind';

import styles from './UserPurchase.module.scss';
import UserSideBar from '~/components/UserSideBar';
import UserOrders from '~/components/UserOrders';

const cx = classNames.bind(styles);

function UserPurchase() {
  return (
    <div className={cx('inner')}>
      <UserSideBar />
      <UserOrders />
    </div>
  );
}

export default UserPurchase;
