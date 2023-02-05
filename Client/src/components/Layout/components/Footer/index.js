import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import styles from './Footer.module.scss';
import { faFacebook, faTwitter, faWordpress, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('footer')}>
      <div className={cx('footer-infor')}>
        <div className={cx('footer-infor-container')}>
          <div className={cx('infor-items')}>
            <div className={cx('infor-item')}>
              <div className={cx('item-titleBox')}>
                <h2 className={cx('item-title')}>ADDRESS</h2>
              </div>
              <div className={cx('infor')}>
                <p className={cx('item-description')}>570 8th Ave,</p>
                <p className={cx('item-description')}>New York, NY 10018</p>
                <p className={cx('item-description')}>United States</p>
              </div>
            </div>
            <div className={cx('infor-item')}>
              <div className={cx('item-titleBox')}>
                <h2 className={cx('item-title')}>BOOK A TABLE</h2>
              </div>
              <div className={cx('infor')}>
                <p className={cx('item-description')}>Dogfood och Sliders foodtruck.</p>
                <p className={cx('item-description')}>Under Om oss kan ni läsa</p>
                <h2 className={cx('item-phone')}>(850) 435-4155</h2>
              </div>
            </div>
            <div className={cx('infor-item')}>
              <div className={cx('item-titleBox')}>
                <h2 className={cx('item-title')}>OPENING HOURS</h2>
              </div>
              <div className={cx('infor')}>
                <p className={cx('item-description')}>
                  Monday – Friday:
                  <span className={cx('item-time')}> 8am – 4pm</span>
                </p>
                <p className={cx('item-description')}>
                  Saturday:
                  <span className={cx('item-time')}> 9am – 5pm</span>
                </p>
                <div className={cx('item-social-icons')}>
                  <span className={cx('social-icon-wrapper')}>
                    <FontAwesomeIcon className={cx('social-icon')} icon={faFacebook} />
                  </span>
                  <span className={cx('social-icon-wrapper')}>
                    <FontAwesomeIcon className={cx('social-icon')} icon={faTwitter} />
                  </span>
                  <span className={cx('social-icon-wrapper')}>
                    <FontAwesomeIcon className={cx('social-icon')} icon={faYoutube} />
                  </span>
                  <span className={cx('social-icon-wrapper')}>
                    <FontAwesomeIcon className={cx('social-icon')} icon={faWordpress} />
                  </span>
                </div>
              </div>
            </div>
            <div className={cx('infor-item')}>
              <div className={cx('item-titleBox')}>
                <h2 className={cx('item-title')}>NEWSLETTER</h2>
              </div>
              <div className={cx('infor')}>
                <p className={cx('item-description')}>Subscribe to the weekly newsletter for all</p>
                <p className={cx('item-description')}>the latest updates</p>
                <div className={cx('item-subscribe-email')}>
                  <div className={cx('item-email-form')}>
                    <Input
                      placeholder={'Your Email...'}
                      type={'text'}
                      className={cx('email-input-wrapper')}
                      inputClass={cx('email-input')}
                    />
                    <Button className={cx('subscribe-btn')}>SUBSCRIBE</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('footer-copy-right')}>
        <div className={cx('copy-right-container')}>
          <div className={cx('copy-right-box')}>
            <div className={cx('copy-right-display')}>
              Copy right @ 2022<span className={cx('copy-right-brand')}> CT-FOOD</span>.All Rights Reserved.
            </div>
            <div className={cx('paypal-imgBox')}>
              <Image src={images.footerImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
