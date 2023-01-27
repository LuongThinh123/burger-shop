import classNames from 'classnames/bind';
import { memo } from 'react';

import images from '~/assets/images';
import InputQuantity from '~/components/InputQuantity';

import styles from './DetailItem.module.scss';

const cx = classNames.bind(styles);

function DetailItem({ data }) {
  //   console.log('re-render detail item');
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
          <InputQuantity value={1} rounded className={cx('item-input')} />
          <button className={cx('add-to-cart-btn', 'addToCart')}>Add to cart</button>
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
