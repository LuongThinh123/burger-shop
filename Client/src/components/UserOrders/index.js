import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserOrders.module.scss';
import Button from '~/components/Button';
import OrderDetail from '~/components/OrderDetail';
import { getAccessToken } from '~/utils/localStorage';
import * as OrderApi from '~/api/orderApi';

const cx = classNames.bind(styles);

function UserOrders() {
  const [orderStatus, setOrderStatus] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await OrderApi.getOrders(getAccessToken(), orderStatus);
      setOrders(orders);
    };
    fetchOrders();
  }, [orderStatus]);

  return (
    <div className={cx('user-orders')}>
      <div className={cx('order-status')}>
        <Button className={cx('status', orderStatus === 0 && 'active-status')} onClick={() => setOrderStatus(0)}>
          All
        </Button>
        <Button className={cx('status', orderStatus === 1 && 'active-status')} onClick={() => setOrderStatus(1)}>
          Pending
        </Button>
        <Button className={cx('status', orderStatus === 2 && 'active-status')} onClick={() => setOrderStatus(2)}>
          Completed
        </Button>
        <Button className={cx('status', orderStatus === 3 && 'active-status')} onClick={() => setOrderStatus(3)}>
          Canceled
        </Button>
      </div>
      <div className={cx('orders')}>
        {orders.map((order) => {
          return (
            <OrderDetail
              orderNumber={order.orderNumber}
              orderId={order._id}
              key={order._id}
              status={order.status}
              itemList={order.products}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserOrders;
