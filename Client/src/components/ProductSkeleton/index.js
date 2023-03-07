import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import classNames from 'classnames/bind';

import styles from './ProductSkeleton.module.scss';

const cx = classNames.bind(styles);
// baseColor="#fff4ec" highlightColor="#e5e5e5"
function ProductSkeleton({ cards }) {
  return (
    <SkeletonTheme>
      {Array(cards)
        .fill(0)
        .map((item, i) => (
          <div className={cx('skeleton-card')} key={i}>
            <div className={cx('skeleton-img')}>
              <Skeleton height={'100%'} />
            </div>
            <div className={cx('skeleton-information')}>
              <div className={cx('skeleton-name')}>
                <h3 className={cx('name')}>
                  <Skeleton width={140} height={24} />
                </h3>
              </div>
              <div className={cx('skeleton-description')}>
                <p className={cx('description')}>
                  <Skeleton count={2} />
                </p>
              </div>
              <div className={cx('skeleton-price')}>
                <p className={cx('price')}>
                  <Skeleton width={60} height={24} />
                </p>
              </div>
              <div className={cx('addToCart-skeleton')}>
                <Skeleton height={45} />
              </div>
            </div>
          </div>
        ))}
    </SkeletonTheme>
  );
}

export default ProductSkeleton;
