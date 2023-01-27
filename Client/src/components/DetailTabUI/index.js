import classNames from 'classnames/bind';
import { useState, memo } from 'react';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './DetailTabUI.module.scss';

const cx = classNames.bind(styles);

function DetailTabUI() {
  console.log('re-render Detail Tab UI');
  const [index, setIndex] = useState(0);

  return (
    <div className={cx('more-infor')}>
      <div className={cx('infor-buttons')}>
        <Button className={cx('infor-btn', index === 0 && 'active')} onClick={() => setIndex(0)}>
          Description
        </Button>
        <Button className={cx('infor-btn', index === 1 && 'active')} onClick={() => setIndex(1)}>
          Product Details
        </Button>
      </div>
      <div className={cx('infor-content')}>
        <div className={cx('description', index !== 0 && 'hidden')}>
          <p>
            Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
            Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Morbi commodo, ipsum sed
            pharetra
          </p>
          <p>
            gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
            velit vitae ligula volutpat condimentum. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus
            neque, id pulvinar odio lorem non turpis.
          </p>
          <p>
            Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Morbi commodo, ipsum sed
            pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
            Suspendisse id velit vitae ligula volutpat ipsum sed pharetra gravida, orci magna condimentum.
          </p>
        </div>
        <div className={cx('product-details', index !== 1 && 'hidden')}>
          <div className={cx('product-manufacturer')}>
            <Image
              className={cx('product-img')}
              src={'https://demos.codezeel.com/prestashop/PRS19/PRS190473/img/m/6.jpg'}
            />
          </div>
          <div className={cx('product-reference')}>
            <label className={cx('label')}>Reference</label>
            <span>product 20</span>
          </div>
          <div className={cx('product-condition')}>
            <label className={cx('label')}>Condition</label>
            <span>Used</span>
          </div>
          <div className={cx('product-quantities')}>
            <label className={cx('label')}>In stock</label>
            <span>269 Items</span>
          </div>
          <div className={cx('product-features')}>
            <h3 className={cx('features-title')}>Data sheet</h3>
            <div className={cx('feature-wrapper')}>
              <div className={cx('name')}>Composition</div>
              <div className={cx('value')}>Ceramic</div>
            </div>
            <div className={cx('feature-wrapper')}>
              <div className={cx('name')}>Property</div>
              <div className={cx('value')}>Long sleeves</div>
            </div>
            <div className={cx('feature-wrapper')}>
              <div className={cx('name')}>Styles</div>
              <div className={cx('value')}>Classic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(DetailTabUI);
