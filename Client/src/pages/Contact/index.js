import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx('contact-inner')}>
      <div className={cx('contact-information')}>
        <div className={cx('infor__item')}>
          <h5 className={cx('infor__item-header')}>Địa chỉ</h5>
          <div className={cx('infor__item-description')}>273 An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh.</div>
        </div>
        <div className={cx('infor__item')}>
          <h5 className={cx('infor__item-header')}>Số điện thoại</h5>
          <div className={cx('infor__item-description')}>19003769</div>
        </div>
        <div className={cx('infor__item')}>
          <h5 className={cx('infor__item-header')}>Email</h5>
          <div className={cx('infor__item-description')}>abc@gmail.com</div>
        </div>
      </div>
      <div className={cx('contact-form')}>
        <div className={cx('contact-form-header')}>
          <h3 className={cx('form-title')}>Gửi liên hệ</h3>
          <p className={cx('form-subtitle')}>Giữ liên lạc</p>
        </div>
        <div className={cx('contact-formList')}>
          <div className={cx('contact-form-user-infor')}>
            <input type="text" className={cx('user-infor__input')} placeholder="Họ tên bạn" />
            <input type="text" className={cx('user-infor__input')} placeholder="Email của bạn" />
          </div>
          <div className={cx('contact-form-user-message')}>
            <input type="text" className={cx('user-message__input')} placeholder="Tin nhắn" />
          </div>
        </div>
        <div className={cx('contact-send-btn')}>
          <span className={cx('contact-send-title')}>GỬI TIN NHẮN</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
