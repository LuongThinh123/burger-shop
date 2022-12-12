import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ className, children, heading, path = [], note }) {
  const classes = cx('banner', {
    [className]: className,
  });

  return (
    <div className={classes}>
      <h1 className={cx('banner_heading')}>{heading}</h1>
      <nav className={cx('banner_infor')}>
        <div className={cx('banner_link')}>
          <Link to="/">Home</Link>
          <FontAwesomeIcon className={cx('next_icon')} icon={faChevronRight} />
        </div>
        {path.length > 0
          ? path.map((data) => {
              return (
                <div className={cx('banner_link')}>
                  <Link to={`/${data.link}`}>{data.title}</Link>
                  <FontAwesomeIcon className={cx('next_icon')} icon={faChevronRight} />
                </div>
              );
            })
          : []}
        {children}
      </nav>
      <div className={cx('banner_note')}>{note}</div>
    </div>
  );
}

export default Banner;
