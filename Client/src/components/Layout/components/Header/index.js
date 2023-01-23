import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faFileInvoiceDollar, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import { useAuthenContext } from '~/customHook';
import * as authenApi from '~/api/authenApi';
import { getAccessToken } from '~/utils/localStorage';
import Image from '~/components/Image';
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
          to: '/user/account',
        },
        {
          icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
          title: 'Purchase',
          to: '/user/purchase',
        },
        {
          icon: <FontAwesomeIcon icon={faRightToBracket} />,
          title: 'Logout',
          separate: true,
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
          <Search />
        </div>

        <div className={cx('nav_actions')}>
          <Menu items={MENU_ITEMS} menuItemClass={cx('menu_item')}>
            {accessToken ? (
              <Image
                className={cx('user-avatar')}
                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/308855318_1765329653819861_649421416552517202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6MDPEqim8SMAX-4iaOd&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCjbv3s4xMljrNqGwqMPc8CM00uLIZ63ZUsfk1khjSG-Q&oe=63D2BAB2"
                alt="avatar"
              />
            ) : (
              <div className={cx('nav_user')}>
                <div className={cx('user_icon')}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
            )}
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
