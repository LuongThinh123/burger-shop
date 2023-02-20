import { memo } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import { addNotification } from '~/reducers/actions/toastAction';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { setUser } from '~/utils/localStorage';
import * as userApi from '~/api/userApi';
import styles from './UserProfileInfor.module.scss';

const cx = classNames.bind(styles);

function UserProfileInfor({ userInfor, setUserInfor, toastDispatch }) {
  const validationSchema = yup
    .object({
      fullname: yup.string().required('This field is required'),
      email: yup.string().email('Please enter a valid email').required('This field is required'),
      username: yup.string().required('This field is required').min(4).max(12),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    reValidateMode: 'onBlur',
    defaultValues: {
      username: userInfor.username,
      fullname: userInfor.fullname,
      email: userInfor.email,
      phone: userInfor.phone,
    },
    resolver: yupResolver(validationSchema),
  });

  const handleOnSave = async (data) => {
    const userInformation = {
      username: data.username,
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
    };
    setUser({ ...userInfor, ...userInformation });
    const response = await userApi.updateUserInfor(userInformation, userInfor.accessToken);
    if (response.error) {
      toastDispatch(
        addNotification({
          id: uuidv4(),
          type: 'ERROR',
          title: response.errorMessage,
          message: 'Please try again',
        }),
      );
      return;
    } else {
      toastDispatch(
        addNotification({
          id: uuidv4(),
          type: 'SUCCESS',
          title: response.message,
          message: 'Successfully change information',
        }),
      );
    }
    setUserInfor({ ...userInfor, ...userInformation });
  };

  return (
    <>
      <div className={cx('user-profile')}>
        <div className={cx('profile-description')}>
          <h2 className={cx('profile-title')}>My profile</h2>
          <div className={cx('description')}>Manage profile information for account security</div>
        </div>
        <div className={cx('profile-information')}>
          <div className={cx('information')}>
            <form className={cx('infor-form')} onSubmit={handleSubmit(handleOnSave)}>
              <div className={cx('infor-item')}>
                <div className={cx('item-title')}>Username</div>
                <Input
                  {...register('username')}
                  error={errors.username}
                  type={'text'}
                  className={cx('item-input-field')}
                  inputClass={cx('item-input')}
                  // value={userInfor.username}
                />
              </div>
              <div className={cx('infor-item')}>
                <div className={cx('item-title')}>Fullname</div>
                <Input
                  {...register('fullname')}
                  error={errors.fullname}
                  type={'text'}
                  className={cx('item-input-field')}
                  inputClass={cx('item-input')}
                />
              </div>
              <div className={cx('infor-item')}>
                <div className={cx('item-title')}>Email</div>
                <Input
                  {...register('email')}
                  error={errors.email}
                  type={'text'}
                  className={cx('item-input-field')}
                  inputClass={cx('item-input')}
                />
              </div>
              <div className={cx('infor-item')}>
                <div className={cx('item-title')}>Phone</div>
                <Input
                  {...register('phone')}
                  error={errors.phone}
                  type={'text'}
                  className={cx('item-input-field')}
                  inputClass={cx('item-input')}
                />
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
    </>
  );
}

export default memo(UserProfileInfor);
