import { useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import styles from './CartPageProduct.module.scss';
import * as cartApi from '~/api/cartApi';
import InputQuantity from '~/components/InputQuantity';
import {
  getAccessToken,
  updateCartProductsItem,
  removeCartProductsItem,
  getTotalCartProducts,
} from '~/utils/localStorage';
import image from '~/assets/images';
const cx = classNames.bind(styles);

function CartPageProduct({ data, subTotalRef, totalRef, ...passProp }) {
  console.log('re-render cart product');
  const inputRef = useRef();
  const totalAmountRef = useRef();
  const productRef = useRef();

  const handleDeleteItem = (e) => {
    productRef.current.remove();
    const productId = e.target.dataset.id;

    removeCartProductsItem(productId);
    passProp.onUpdateRemoveChange();
    subTotalRef.current.innerHTML = `$${getTotalCartProducts()}`;
    totalRef.current.innerHTML = `$${getTotalCartProducts()}`;

    cartApi.deleteCartItem(getAccessToken(), productId);
  };

  const handleOnchageQuantity = () => {
    const productId = inputRef.current.dataset.id;
    const amount = inputRef.current.value;

    totalAmountRef.current.innerHTML = `$${amount * data.sale}`;
    updateCartProductsItem(productId, amount);
    subTotalRef.current.innerHTML = `$${getTotalCartProducts()}`;
    totalRef.current.innerHTML = `$${getTotalCartProducts()}`;

    const product = {
      productId,
      amount,
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
          <h3 className={cx('product_name')}>{data.title}</h3>
          <div className={cx('delete_icon')}>
            <FontAwesomeIcon
              className={cx('deleteIcon')}
              icon={faCircleXmark}
              data-id={data._id}
              onClick={(e) => handleDeleteItem(e)}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className={cx('product_price')}>
        <span className={cx('price_amount')}>${data.sale}</span>
      </div>
      <div className={cx('product_quantity')}>
        <InputQuantity
          ref={inputRef}
          productId={data._id}
          value={data.quantity}
          className={cx('cartItem_quantity')}
          onCallApi={handleOnchageQuantity}
        />
      </div>
      <div className={cx('product_total')}>
        <span ref={totalAmountRef} className={cx('total_amount')}>
          ${data.sale * data.quantity}
        </span>
      </div>
    </div>
  );
}

export default CartPageProduct;
