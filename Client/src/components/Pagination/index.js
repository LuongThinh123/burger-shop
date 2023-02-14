import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Pagination.module.scss';
import { usePagination, DOTS } from '~/customHook/usePagination';
const cx = classNames.bind(styles);

const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 2, currentPage, pageSize, className } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  console.log('re-render pagination');

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={cx('pagination-container', { [className]: className })}>
      {/* Left navigation arrow */}
      <li
        className={cx('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <FontAwesomeIcon className={cx('arrow-prev')} icon={faAngleLeft} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={index} className={cx('pagination-item', 'dots')}>
              {/* &#8230; */}
              {DOTS}
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={index}
            className={cx('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => {
              if (pageNumber !== currentPage) onPageChange(pageNumber);
            }}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={cx('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <FontAwesomeIcon className={cx('arrow-next')} icon={faAngleRight} />
      </li>
    </ul>
  );
};

export default memo(Pagination);
