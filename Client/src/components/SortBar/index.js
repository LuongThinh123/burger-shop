import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './SortBar.module.scss';
import { setSort } from '~/reducers/actions/filterAction';
import MiniPagination from '../MiniPagination';
// import image from '~/assets/images';

const cx = classNames.bind(styles);

function SortBar({ sortFilter, pageFilter, totalCount, limit, filterDispatch }) {
  console.log('re-render sort bar');
  const handleSelectChange = (e) => {
    let sortBy = [];
    if (e.target.value === '') {
      sortBy = ['default', e.target.value];
    } else sortBy = [e.target.name, e.target.value];

    filterDispatch(setSort(sortBy));
  };

  return (
    <div className={cx('sortBar')}>
      <div className={cx('select_content')}>
        {/* <h3 className={cx('sort_by')}>Sort by:</h3> */}
        <div className={cx('sort_select')}>
          <select value={sortFilter} name="price" id="price" onChange={(e) => handleSelectChange(e)}>
            <option value="">Default sorting</option>
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
          </select>
        </div>
      </div>

      {/* <div className={cx('mini_nagination')}>
        <div className={cx('mini_nagination_state')}>
          <span className={cx('mini_nagination_title')}>Page: </span>
          <span className={cx('mini_nagination_current')}>1</span>/
          <span className={cx('mini_nagination_total')}>50</span>
        </div>
        <button className={cx('mini_nagination_prev-btn')}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={cx('mini_nagination_next-btn')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div> */}
      <MiniPagination pageCurrent={pageFilter} totalCount={totalCount} limit={limit} filterDispatch={filterDispatch} />
    </div>
  );
}

export default memo(SortBar);
