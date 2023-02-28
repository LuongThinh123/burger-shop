import { memo } from 'react';
import classNames from 'classnames/bind';

import ProductCard from '~/components/ProductCard';
import Carousel from '~/components/Carousel';

import styles from './DetailRecommendProducts.module.scss';

const cx = classNames.bind(styles);

function DetailRecommendProducts({ data, toastDispatch }) {
  return (
    <div className={cx('recommend-food')}>
      <h1 className={cx('recommend-food-title')}>YOU MAY ALSO LIKE</h1>
      <Carousel amountItemAppear={4} marginLeftRight={15} surfingNumber={2}>
        {data.map((product) => (
          <ProductCard key={product._id} data={product} className={cx('product')} toastDispatch={toastDispatch} />
        ))}
      </Carousel>
    </div>
  );
}

export default memo(DetailRecommendProducts);
