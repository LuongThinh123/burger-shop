import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductCard.module.scss';

import image from '~/assets/images';
const cx = classNames.bind(styles);

function ProductCard({ data }) {
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
          <button className={cx('addToCart')}>
            <div className={cx('addToCart-title')}>
              <FontAwesomeIcon className={cx('cart-plus_icon')} icon={faCartPlus} />
              <p className={cx('addToCart-text')}>Add to cart</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
