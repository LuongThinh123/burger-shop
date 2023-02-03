import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import styles from './Banner.module.scss';
import { setSearchTitle } from '~/reducers/actions/filterAction';

const cx = classNames.bind(styles);

function Banner({ className, children, heading, path = [], note, searchFilter, filterDispatch }) {
  const classes = cx('banner', {
    [className]: className,
  });

  const handleDeleteSearchTitle = () => {
    filterDispatch(setSearchTitle(''));
  };

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
      {note && <div className={cx('banner_note')}>{note}</div>}
      {searchFilter && (
        <div className={cx('search-result')}>
          <h3 className={cx('search-result-title')}>Search result for '{searchFilter}'</h3>
          <FontAwesomeIcon
            className={cx('result-delete-icon')}
            icon={faCircleXmark}
            onClick={handleDeleteSearchTitle}
          />
        </div>
      )}
    </div>
  );
}

export default memo(Banner);
