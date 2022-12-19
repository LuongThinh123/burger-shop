// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './SearchItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SearchItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('product_img')} src={images.test} alt="Hoa" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>SHRIMP HAMBURGER</span>
          {/* <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> */}
        </h4>
        <span className={cx('price')}>$35.10</span>
      </div>
    </div>
  );
}

export default SearchItem;
