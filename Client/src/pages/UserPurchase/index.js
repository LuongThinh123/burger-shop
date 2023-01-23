import classNames from 'classnames/bind';

import styles from './UserPurchase.module.scss';
import UserSideBar from '~/components/UserSideBar';
import Button from '~/components/Button';
import OrderDetail from '~/components/OrderDetail';

const cx = classNames.bind(styles);

function UserPurchase() {
  return (
    <div className={cx('inner')}>
      <UserSideBar />
      <div className={cx('user-orders')}>
        <div className={cx('order-status')}>
          <Button className={cx('status', 'active-status')}>All</Button>
          <Button className={cx('status')}>Pending</Button>
          <Button className={cx('status')}>Completed</Button>
          <Button className={cx('status')}>Canceled</Button>
        </div>
        <div className={cx('orders')}>
          <OrderDetail status />
        </div>
      </div>
    </div>
  );
}

export default UserPurchase;
