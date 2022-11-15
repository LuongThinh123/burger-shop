import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import image from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('nav_container')}>
          <div className={cx('logo')}>
            <a href="">
              <img src={image.logo} alt="Burger-shop" />
              <span>CT-FOOD</span>
            </a>
          </div>
          <ul className={cx('nav_list')}>
            <li className={cx('nav_item')}>
              <a href="">Trang chủ</a>
            </li>
            <li className={cx('nav_item')}>
              <a href="">Giới thiệu</a>
            </li>
            <li className={cx('nav_item')}>
              <a href="">Sản phẩm</a>
            </li>
            <li className={cx('nav_item')}>
              <a href="">Liên hệ</a>
            </li>
          </ul>

          <div className={cx('search')}>
            <input placeholder="Tìm kiếm sản phẩm" spellCheck={false} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>

        <div className={cx('nav_actions')}>
          <div className={cx('nav_user')}>
            <div className={cx('user_icon')}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className={cx('nav_cart')}>
            <FontAwesomeIcon className={cx('cart_icon')} icon={faCartShopping} />
            <span className={cx('cart_product_numbers')}></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
