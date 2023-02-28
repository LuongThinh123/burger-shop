import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx('about')} id="about">
      <div className={cx('about__infor')}>
        <div className={cx('about__description')}>
          <h2 className={cx('titleText')}>
            <span>About </span>Us
          </h2>
          <p>
            Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
            Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Morbi commodo, rhoncus neque
            lorem. Gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
            Suspendisse id velit vitae ligula volutpat condimentum. Morbi commodo, ipsum sed pharetra gravida, orci
            magna rhoncus neque, id pulvinar odio lorem non turpis.
            <br />
            <br />
            {/* <br /> */}
            Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Morbi commodo, ipsum sed
            pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
            {/* <br /> */}
            Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque.
          </p>
        </div>
        <div className={cx('about__image')}>
          <div className={cx('about__imgBx')}>
            <img src={require('../../assets/images/about-image.png')} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
