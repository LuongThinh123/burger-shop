import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

import { addNotification } from '~/reducers/actions/toastAction';
import * as cartApi from '~/api/cartApi';
import styles from './ProductCard.module.scss';
import image from '~/assets/images';

const cx = classNames.bind(styles);

function ProductCard({ data, toastDispatch }) {
  const navigate = useNavigate();

  let handleAddToCart = (e) => {
    e.preventDefault();
    console.log('Add to cart');

    const productId = e.target.dataset.id;
    // console.log(productId);
    const product = {
      productId,
      quantity: 1,
    };
    cartApi.addToCart(product, navigate);

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
    <div className={cx('product-card')}>
      <div className={cx('product-img')}>
        <img src={image.test} alt="" />
      </div>
      <div className={cx('product-information')}>
        <div className={cx('product-name')}>
          <h3 className={cx('name')}>{data.title}</h3>
        </div>
        <div className={cx('product-description')}>
          <p className={cx('description')}>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className={cx('product-price')}>
          <p className={cx('price')}>${data.sale}</p>
        </div>
        <div className={cx('addToCart-btn')}>
          <button className={cx('addToCart')} data-id={data._id} onClick={(e) => handleAddToCart(e)}>
            <div className={cx('addToCart-title')} data-id={data._id}>
              <FontAwesomeIcon className={cx('cart-plus_icon')} icon={faCartPlus} data-id={data._id} />
              <p className={cx('addToCart-text')} data-id={data._id}>
                Add to cart
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
