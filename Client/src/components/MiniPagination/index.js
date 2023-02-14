import { memo, useMemo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { changePage } from '~/reducers/actions/filterAction';
import styles from './MiniPagination.module.scss';

const cx = classNames.bind(styles);

function MiniPagination({ pageCurrent, totalCount, limit, filterDispatch }) {
  const totalPageCount = useMemo(() => {
    return Math.ceil(totalCount / limit);
  }, [totalCount, limit]);

  if (pageCurrent === 0 || totalPageCount < 2) {
    return null;
  }

  const onNext = () => {
    if (pageCurrent < totalPageCount) {
      filterDispatch(changePage(pageCurrent + 1));
    }
  };

  const onPrevious = () => {
    if (pageCurrent > 1) {
      filterDispatch(changePage(pageCurrent - 1));
    }
  };

  return (
    <div className={cx('mini_nagination')}>
      <div className={cx('mini_nagination_state')}>
        <span className={cx('mini_nagination_title')}>Page: </span>
        <span className={cx('mini_nagination_current')}>{pageCurrent}</span>/
        <span className={cx('mini_nagination_total')}>{totalPageCount}</span>
      </div>
      <button className={cx('mini_nagination_prev-btn')} onClick={onPrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={cx('mini_nagination_next-btn')} onClick={onNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default memo(MiniPagination);
