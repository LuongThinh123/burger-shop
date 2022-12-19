import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import styles from './CartPageProduct.module.scss';
import * as cartApi from '~/api/cartApi';
import InputQuantity from '~/components/InputQuantity';
import { getAccessToken } from '~/utils/localStorage';
import image from '~/assets/images';
const cx = classNames.bind(styles);

function CartPageProduct({ data }) {
  const handleDeleteItem = (e) => {
    const productId = e.target.dataset.id;
    cartApi.deleteCartItem(getAccessToken(), productId);
  };

  const handleOnchage = () => {
      console.log('hello')
  }
  return (
    <div className={cx('product')}>
      <div className={cx('product_item')}>
        <div className={cx('product_imgBox')}>
          <img className={cx('product_img')} src={image.test} alt="" />
        </div>
        <div className={cx('product_infor')}>
          <h3 className={cx('product_name')}>{data.productId.title}</h3>
          <div className={cx('delete_icon')}>
            <FontAwesomeIcon
              className={cx('deleteIcon')}
              icon={faCircleXmark}
              data-id={data.productId._id}
              onClick={(e) => handleDeleteItem(e)}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className={cx('product_price')}>
        <span className={cx('price_amount')}>${data.productId.sale}</span>
      </div>
      <InputQuantity value={data.quantity} className={cx('cartItem_quantity')} onChange={handleOnchage}/>
      <div className={cx('product_total')}>
        <span className={cx('total_amount')}>$500</span>
      </div>
    </div>
  );
}

export default CartPageProduct;
