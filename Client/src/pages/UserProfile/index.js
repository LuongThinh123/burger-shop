import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserProfile.module.scss';
import UserSideBar from '~/components/UserSideBar';
import UserProfileInfor from '~/components/UserProfileInfor';
import { getUser } from '~/utils/localStorage';
import { useToastContext } from '~/customHook';
import Toast from '~/components/Toast';
const cx = classNames.bind(styles);

function UserProfile() {
  const [userInfor, setUserInfor] = useState(getUser());
  const [, toastDispatch] = useToastContext();

  return (
    <>
      <div className={cx('inner')}>
        <UserSideBar userInformation={userInfor} />
        <UserProfileInfor userInfor={userInfor} setUserInfor={setUserInfor} toastDispatch={toastDispatch} />
      </div>
      <Toast position={'top-right'} timeAutoDelete={2800} />
    </>
  );
}

export default UserProfile;
