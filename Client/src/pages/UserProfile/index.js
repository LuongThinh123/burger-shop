import classNames from 'classnames/bind';

import styles from './UserProfile.module.scss';
import UserSideBar from '~/components/UserSideBar';
import UserProfileInfor from '~/components/UserProfileInfor';

const cx = classNames.bind(styles);

function UserProfile() {
  return (
    <div className={cx('inner')}>
      <UserSideBar />
      <UserProfileInfor />
    </div>
  );
}

export default UserProfile;
