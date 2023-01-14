import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import images from '~/assets/images';
import InputQuantity from '~/components/InputQuantity';
import Button from '~/components/Button';
import ProductCard from '~/components/ProductCard';
import styles from './Detail.module.scss';
import Carousel from '~/components/Carousel';

const cx = classNames.bind(styles);

const data = { _id: '123', title: 'SHRIMP HAMBURGER', sale: 35.0 };

function Detail() {
  return (
    <>
      <div className={cx('inner')}>
        <div className={cx('detail-item')}>
          <div className={cx('detail-item__slider')}>
            <div className={cx('item-imgBx')}>
              <img className={cx('item-img')} src={images.test} alt="" />
            </div>
          </div>

          <div className={cx('item-infor')}>
            <h1 className={cx('item-title')}>SHRIMP HAMBURGER</h1>
            <div className={cx('item-price-status')}>
              <span className={cx('item-price')}>$35.00</span>
              <span className={cx('item-status')}>On stock</span>
            </div>

            <div className={cx('item-description')}>
              Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
              Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.
            </div>

            <div className={cx('item__variation')}>
              <InputQuantity value={1} rounded className={cx('item-input')} />
              <button className={cx('add-to-cart-btn', 'addToCart')}>Mua hàng</button>
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

        <div className={cx('more-infor')}>
          <div className={cx('infor-buttons')}>
            <Button className={cx('infor-btn')} primary>
              Description
            </Button>
            <Button className={cx('infor-btn')} primary>
              Review
            </Button>
          </div>
          <div className={cx('infor-content')}>
            <div>
              Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
              Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Morbi commodo, ipsum sed
              pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
              Suspendisse id velit vitae ligula volutpat condimentum. Morbi commodo, ipsum sed pharetra gravida, orci
              magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae
              ligula volutpat condimentum. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
              pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
              condimentum.
            </div>
          </div>
        </div>

        <div className={cx('recommend-food')}>
          <h1 className={cx('recommend-food-title')}>YOU MAY ALSO LIKE</h1>
          <Carousel amountItemAppear={4}>
            <ProductCard data={data} className={cx('product')} />
            <ProductCard data={data} className={cx('product')} />
            <ProductCard data={data} className={cx('product')} />
            <ProductCard data={data} className={cx('product')} />
            <ProductCard data={data} className={cx('product')} />
            <ProductCard data={data} className={cx('product')} />
            <ProductCard data={data} className={cx('product')} />
            <ProductCard data={data} className={cx('product')} />
          </Carousel>
          {/* <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} /> */}
        </div>
      </div>
    </>
  );
}

export default Detail;
