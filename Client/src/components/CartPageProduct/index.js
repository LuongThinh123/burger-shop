import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CartPageProduct.module.scss';

import image from '~/assets/images';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

function CartPageProduct({ data }) {
  const [inputQuantity, setInputQuantity] = useState('1');
  return (
    <div className={cx('product')}>
      <div className={cx('product_item')}>
        <div className={cx('product_imgBox')}>
          <img className={cx('product_img')} src={image.test} alt="" />
        </div>
        <div className={cx('product_infor')}>
          <h3 className={cx('product_name')}>chicken hamburger</h3>
          <div className={cx('delete_icon')}>
            <FontAwesomeIcon className={cx('deleteIcon')} icon={faCircleXmark}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className={cx('product_price')}>
        <span className={cx('price_amount')}>$35</span>
      </div>
      <div className={cx('quantity_input')}>
        {/* <div class="modal__cart-item-input"> */}
        <button className={cx('decrement')} data-id="">
          -
        </button>
        <input
          type="number"
          min="1"
          max="9999"
          step="1"
          value={inputQuantity}
          className={cx('quantity')}
          data-id=""
          inputMode="numeric"
          onChange={(e) => setInputQuantity(e.target.value)}
        />
        <button className={cx('increment')} data-id="">
          +
        </button>
        {/* </div> */}
      </div>
      <div className={cx('product_total')}>
        <span className={cx('total_amount')}>$500</span>
      </div>
    </div>
  );
}

export default CartPageProduct;
