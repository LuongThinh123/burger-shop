// import { useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('homeInner')}>
      <div></div>
      <div className={cx('elementor-container')}>
        <div className={cx('element')}>
          <div className={cx('element-item')}>
            <div className={cx('element-title')}>
              <h2>SPECIAL FOR YOU MONSTER PIZZA</h2>
            </div>
            <div className={cx('element-button')}>
              <Button primary className={cx('element-btn')}>
                ORDER NOW
              </Button>
            </div>
            <div className={cx('food-element-imgBox')}>
              <Image className={cx('food-element-img')} src={images.element} />
            </div>
          </div>
        </div>
        <div className={cx('element')}>
          <div className={cx('element-item')}>
            <div className={cx('element-title')}>
              <h2>
                Delicious FOOD MENU <span>This weekend only</span>
              </h2>
            </div>
            <div className={cx('element-button')}>
              <Button primary className={cx('element-btn')}>
                ORDER NOW
              </Button>
            </div>
            <div className={cx('food-element-imgBox')}>
              <Image className={cx('food-element-img')} src={images.element3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
