import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import { getUser } from '~/utils/localStorage';
import styles from './UserSideBar.module.scss';

const cx = classNames.bind(styles);

function UserSideBar() {
  const userInfor = getUser();

  return (
    <div className={cx('user-options')}>
      <div className={cx('user-display')}>
        <div className={cx('user-imgBox')}>
          <Image
            className={cx('user-img')}
            src={
              'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/308855318_1765329653819861_649421416552517202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6MDPEqim8SMAX-4iaOd&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCjbv3s4xMljrNqGwqMPc8CM00uLIZ63ZUsfk1khjSG-Q&oe=63D2BAB2'
            }
          />
        </div>
        <div className={cx('mini-infor')}>
          <h4 className={cx('mini-nick-name')}>{userInfor.username}</h4>
          <span className={cx('mini-full-name')}>{userInfor.fullname}</span>
        </div>
      </div>
      <div className={cx('options')}>
        <Link className={cx('option-link')} to={'/user/account'}>
          <div className={cx('account-option', 'option')}>
            <FontAwesomeIcon className={cx('account-icon')} icon={faUser} />
            <span className={cx('account-title')}>Account</span>
          </div>
        </Link>

        <Link className={cx('option-link')} to={'/user/purchase'}>
          <div className={cx('purchase-option', 'option')}>
            <FontAwesomeIcon className={cx('purchase-icon')} icon={faMoneyBill} />
            <span className={cx('purchase-title')}>Purchase order</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserSideBar;
