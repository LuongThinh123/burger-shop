import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './UserProfileInfor.module.scss';

const cx = classNames.bind(styles);

function UserProfileInfor() {
  // const []

  return (
    <div className={cx('user-profile')}>
      <div className={cx('profile-description')}>
        <h2 className={cx('profile-title')}>My profile</h2>
        <div className={cx('description')}>Manage profile information for account security</div>
      </div>
      <div className={cx('profile-information')}>
        <div className={cx('information')}>
          <form className={cx('infor-form')}>
            <div className={cx('infor-item')}>
              <div className={cx('item-title')}>Username</div>
              <Input className={cx('item-input-field')} inputClass={cx('item-input')} />
            </div>
            <div className={cx('infor-item')}>
              <div className={cx('item-title')}>Fullname</div>
              <Input className={cx('item-input-field')} inputClass={cx('item-input')} />
            </div>
            <div className={cx('infor-item')}>
              <div className={cx('item-title')}>Email</div>
              <Input className={cx('item-input-field')} inputClass={cx('item-input')} />
            </div>
            <div className={cx('infor-item')}>
              <div className={cx('item-title')}>Phone</div>
              <Input className={cx('item-input-field')} inputClass={cx('item-input')} />
            </div>
            <Button primary className={cx('save-btn')}>
              Save
            </Button>
          </form>
        </div>
        <div className={cx('profile-image-infor')}>
          <div className={cx('profile-image-inner')}>
            <div className={cx('profile-image-box')}>
              <Image
                className={cx('profile-img')}
                src={
                  'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/308855318_1765329653819861_649421416552517202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OK9cSCH7ZVgAX9T1Cmc&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCTHwqq5fVFNIj2xl7sz86kcxP9a1A7O6SF7fGmuSgFHA&oe=63F06472'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileInfor;
