import classNames from 'classnames/bind';
import { memo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import images from '~/assets/images';
import * as cartApi from '~/api/cartApi';
import { getAccessToken } from '~/utils/localStorage';
import InputQuantity from '~/components/InputQuantity';
import { useToastContext } from '~/customHook';
import { addNotification } from '~/reducers/actions/toastAction';
import { v4 as uuidv4 } from 'uuid';
import styles from './DetailItem.module.scss';

const cx = classNames.bind(styles);

function DetailItem({ data }) {
  const navigate = useNavigate();
  const [, toastDispatch] = useToastContext();
  const inputQuantityRef = useRef();
  console.log('re-renderr detail item');

  const handleAddToCart = (productId) => {
    console.log('Add to cart');
    console.log(productId);

    const product = {
      productId,
      amount: inputQuantityRef.current.value,
    };
    cartApi.addToCart(getAccessToken(), product, navigate);

    toastDispatch(
      addNotification({
        id: uuidv4(),
        type: 'SUCCESS',
        title: 'Successfuly add to cart',
        message: 'Successfully received cart product',
      }),
    );
  };

  return (
    <div className={cx('detail-item')}>
      <div className={cx('detail-item__slider')}>
        <div className={cx('item-imgBx')}>
          <img className={cx('item-img')} src={images.test} alt="" />
        </div>
      </div>

      <div className={cx('item-infor')}>
        <h1 className={cx('item-title')}>{data.title}</h1>
        <div className={cx('item-price-status')}>
          <span className={cx('item-price')}>${data.sale}</span>
          <span className={cx('item-status')}>On stock</span>
        </div>

        <div className={cx('item-description')}>{data.description}</div>

        <div className={cx('item__variation')}>
          <InputQuantity ref={inputQuantityRef} value={1} rounded className={cx('item-input')} />
          <button className={cx('add-to-cart-btn', 'addToCart')} onClick={() => handleAddToCart(data._id)}>
            Add to cart
          </button>
        </div>

        <div className={cx('item__meta')}>
          <span className={cx('sku__wrapper')}>
            Product-id:
            <span className={cx('sku__value')}> 1</span>
          </span>
          <span className={cx('item__meta-Category')}>
            Category:
            <span className={cx('meta-Category_value')}> Pizza</span>
          </span>
          <span className={cx('item__meta-tags')}>
            Tags:
            <span className={cx('meta-tags_value')}> Pizza</span>
          </span>
        </div>

        <div className={cx('icon-bar')}>
          {/* <i class="fab fa-facebook icon-facebook"></i>
        <i class="fab fa-twitter icon-twitter"></i>
        <i class="fas fa-envelope icon-envelope"></i>
        <i class="fab fa-facebook-messenger icon-messenger"></i> */}
        </div>
      </div>
    </div>
  );
}

export default memo(DetailItem);
