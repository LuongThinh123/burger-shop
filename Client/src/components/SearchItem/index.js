import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SearchItem.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function SearchItem({ data }) {
  return (
    // /detail/${data.id}
    <Link to={`/detail`} className={cx('wrapper')}>
      <Image className={cx('product_img')} src={images.test} alt="Hoa" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {/* <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> */}
        </h4>
        <span className={cx('price')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default SearchItem;
