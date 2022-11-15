import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './SortBar.module.scss';
import { useFilterContext } from '~/customHook';
import { setSort } from '~/reducers/actions/filterAction';
// import image from '~/assets/images';

const cx = classNames.bind(styles);

function SortBar() {
  const [, filterDispatch] = useFilterContext();

  const handleSelectChange = (e) => {
    // console.log(e.target.name);
    let sortBy = [];

    if (e.target.value === '') {
      sortBy = ['default', e.target.value];
    } else sortBy = [e.target.name, e.target.value];

    filterDispatch(setSort(sortBy));
  };

  return (
    <div className={cx('sortBar')}>
      <div className={cx('select_content')}>
        <h3 className={cx('sort_by')}>Sort by:</h3>
        <div className={cx('sort_select')}>
          <select name="price" id="price" onChange={(e) => handleSelectChange(e)}>
            <option value="">Price</option>
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
          </select>
        </div>
      </div>

      <div className={cx('mini_nagination')}>
        <div className={cx('mini_nagination_state')}>
          <span className={cx('mini_nagination_current')}>1</span>/
          <span className={cx('mini_nagination_total')}>50</span>
        </div>
        <button className={cx('mini_nagination_prev-btn')}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={cx('mini_nagination_next-btn')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default SortBar;
