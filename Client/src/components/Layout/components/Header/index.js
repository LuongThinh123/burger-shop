import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCircleXmark,
  faFileInvoiceDollar,
  faMagnifyingGlass,
  faRightToBracket,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import SearchItem from '~/components/SearchItem';
import { useAuthenContext } from '~/customHook';
import * as authenApi from '~/api/authenApi';
import { getAccessToken } from '~/utils/localStorage';
import image from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  const [, authenDispatch] = useAuthenContext();
  const navigate = useNavigate();
  const accessToken = getAccessToken();

  const MENU_ITEMS = accessToken
    ? [
        {
          icon: <FontAwesomeIcon icon={faUser} />,
          title: 'Profile',
          to: '/profile/account',
        },
        {
          icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
          title: 'Purchase',
          to: '/profile/purchase',
        },
        {
          icon: <FontAwesomeIcon icon={faRightToBracket} />,
          title: 'Logout',
        },
      ]
    : [
        {
          icon: <FontAwesomeIcon icon={faRightToBracket} />,
          title: 'Login',
          to: '/login',
        },
        {
          icon: <FontAwesomeIcon icon={faRightToBracket} />,
          title: 'Register',
          to: '/register',
        },
      ];

  // const MENU_ITEMS = useRef(items);

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    // if (accessToken) {
    //   MENU_ITEMS.current = [
    //     {
    //       icon: <FontAwesomeIcon icon={faRightToBracket} />,
    //       title: 'Login',
    //       to: '/login',
    //     },
    //     {
    //       icon: <FontAwesomeIcon icon={faRightToBracket} />,
    //       title: 'Register',
    //       to: '/register',
    //     },
    //   ];
    //   //   console.log(MENU_ITEMS.current);
    // }
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  const handleLogout = () => {
    authenApi.logout(accessToken, authenDispatch, navigate);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('nav_container')}>
          <div className={cx('logo')}>
            <Link to="/">
              <img src={image.logo} alt="Burger-shop" />
              <span>CT-FOOD</span>
            </Link>
          </div>
          <ul className={cx('nav_list')}>
            <li className={cx('nav_item')}>
              <Link to="/">Home</Link>
            </li>
            <li className={cx('nav_item')}>
              <Link to="/about">About</Link>
            </li>
            <li className={cx('nav_item')}>
              <Link to="/products">Shop</Link>
            </li>
            <li className={cx('nav_item')}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Tippy
            // visible={searchResult.length > 0}
            // interactive
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>Search results...</h4>
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  {/* <SearchItem /> */}
                  {/* <SearchItem /> */}
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('search')}>
              <input placeholder="Tìm kiếm sản phẩm" spellCheck={false} />
              <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
              <button className={cx('search-btn')}>
                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
        </div>

        <div className={cx('nav_actions')}>
          <Menu items={MENU_ITEMS} menuItemClass={cx('menu_item')}>
            <div className={cx('nav_user')}>
              <div className={cx('user_icon')}>
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </Menu>
          <div className={cx('nav_cart')}>
            {/* <Link to="/cart"> */}
            <FontAwesomeIcon className={cx('cart_icon')} icon={faCartShopping} />
            <span className={cx('cart_product_numbers')}></span>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
