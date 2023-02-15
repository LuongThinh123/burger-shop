import { memo, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import { getAccessToken } from '~/utils/localStorage';
import { priceFormat } from '~/utils/priceFormat';
import Button from '~/components/Button';
import * as OrderApi from '~/api/orderApi';
import styles from './OrderDetail.module.scss';

const cx = classNames.bind(styles);

function OrderDetail({ itemList, status, orderNumber, orderDate, orderId, allActiveStatusRef, ...passProps }) {
  let totalPrice = 0;
  const orderBoxRef = useRef();
  const statusChangeBtnRef = useRef();
  const statusTitleRef = useRef();

  // console.log('re-render order details');

  useEffect(() => {
    // console.log('call useEFFECT');
    orderBoxRef.current.style.display = 'block';
  }, [itemList]);

  const handleChangeStatus = (status) => {
    const orderId = orderBoxRef.current.dataset.id;
    const isAllActive = allActiveStatusRef.current.classList.contains('UserOrders_active-status__6vFHY');

    if (isAllActive) {
      if (status === 2) {
        statusTitleRef.current.innerHTML = 'COMPLETED';
      } else if (status === 3) {
        statusTitleRef.current.innerHTML = 'CANCELED';
      }
      statusChangeBtnRef.current.style.display = 'none';
    } else {
      passProps.onStatusChangeUpdate(orderId);
    }

    const orderStatusChangeInfor = {
      orderId,
      status,
    };
    OrderApi.updateOrderStatus(getAccessToken(), orderStatusChangeInfor);
  };

  return (
    <div ref={orderBoxRef} data-id={orderId} className={cx('order-box')}>
      <div className={cx('order-id-status')}>
        <div className={cx('order-id')}>
          <h3>ORDER NUMBER: </h3>
          <span> {orderNumber}</span>
        </div>
        {status && (
          <h2 ref={statusTitleRef} className={cx('order-status')}>
            {status.title}
          </h2>
        )}
      </div>
      <div className={cx('order-product-list')}>
        {itemList
          ? itemList.map((item) => {
              totalPrice += item.sale * item.quantity;
              return (
                <div key={item._id} className={cx('order-product')}>
                  <div className={cx('product-item')}>
                    <div className={cx('product-imgBox')}>
                      <img className={cx('product_img')} src={require(`../../assets/images/${item.image}`)} alt="" />
                    </div>
                    <div className={cx('product-info')}>
                      <span className={cx('product-name')}>{item.title}</span>
                      <span className={cx('product-quantity')}>X{item.quantity}</span>
                      <span className={cx('product-price')}>${item.sale}</span>
                    </div>
                  </div>
                  <span className={cx('product-total')}>${priceFormat(item.sale * item.quantity)}</span>
                </div>
              );
            })
          : []}
      </div>
      <div className={cx('order-footer')}>
        <div className={cx('order-footer-date')}>
          Order date:
          <span> {orderDate}</span>
        </div>
        <div className={cx('order-totalBox')}>
          <div className={cx('order-footer-total')}>
            Total:
            <span> ${priceFormat(totalPrice)}</span>
          </div>
          {status && status.code === 1 && (
            <div ref={statusChangeBtnRef} className={cx('order-status-change')}>
              <Button className={cx('status-change-btn')} onClick={() => handleChangeStatus(2)}>
                COMPLETED
              </Button>
              <Button className={cx('status-change-btn')} onClick={() => handleChangeStatus(3)}>
                CANCELED
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(OrderDetail);
