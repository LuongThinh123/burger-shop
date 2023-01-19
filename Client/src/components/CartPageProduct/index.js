import { useRef } from 'react';
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
  const inputRef = useRef();
  const productRef = useRef();

  const handleDeleteItem = (e) => {
    productRef.current.remove();
    const productId = e.target.dataset.id;
    cartApi.deleteCartItem(getAccessToken(), productId);
  };

  const handleOnchageQuantity = () => {
    const product = {
      productId: inputRef.current.dataset.id,
      amount: inputRef.current.value,
    };
    cartApi.updateCartItem(getAccessToken(), product);
  };

  return (
    <div className={cx('product')} ref={productRef}>
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
      <div className={cx('product_quantity')}>
        <InputQuantity
          ref={inputRef}
          productId={data.productId._id}
          value={data.quantity}
          className={cx('cartItem_quantity')}
          onCallApi={handleOnchageQuantity}
        />
      </div>
      <div className={cx('product_total')}>
        <span className={cx('total_amount')}>$500</span>
      </div>
    </div>
  );
}

export default CartPageProduct;
