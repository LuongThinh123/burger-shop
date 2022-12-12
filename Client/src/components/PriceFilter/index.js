import { useState, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './PriceFilter.module.scss';
import Button from '~/components/Button';
import { setPriceFilter } from '~/reducers/actions/filterAction';
import { useFilterContext } from '~/customHook';

const cx = classNames.bind(styles);

function PriceFilter() {
  // const [priceMin, setPriceMin] = useState('');
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(40);
  const [filterState, filterDispatch] = useFilterContext();

  console.log('re-render');
  const maxRangeRef = useRef(),
    minRangeRef = useRef(),
    // maxPrice = useRef(),
    // minPrice = useRef(),
    progressRef = useRef();

  // const HandleOnchangeNumber = (e) => {
  //   const priceGap = 1000;
  //   let isMin = false;

  //   console.log(e.target.value);
  //   if (e.target.className === 'input-min') {
  //     minRangeRef.current.value = e.target.value;
  //     isMin = true;
  //   } else {
  //     maxRangeRef.current.value = e.target.value;
  //   }

  //   if (maxRangeRef.current.value - minRangeRef.current.value <= priceGap && maxRangeRef.current.value <= 10000) {
  //     isMin ? setRangeMin(minRangeRef.current.value) : setRangeMax(maxRangeRef.current.value);
  //     progressRef.current.style.left = (minRangeRef.current.value / 10000) * 100 + '%';
  //     progressRef.current.style.right = 100 - (maxRangeRef.current.value / 10000) * 100 + '%';
  //   }
  // };

  const HandleOnchange = (e) => {
    // filterDispatch(setPriceFilter([minRangeRef.current.value, maxRangeRef.current.value]));
    const priceGap = 4;
    let isMin = false;
    if (e.target.className === 'range-min') {
      minRangeRef.current.value = e.target.value;
      isMin = true;
    } else {
      maxRangeRef.current.value = e.target.value;
    }

    if (maxRangeRef.current.value - minRangeRef.current.value <= priceGap) {
      // // return;
      // if (isMin) {
      //   minRangeRef.current.value = parseInt(maxRangeRef.current.value) - 1000;
      //   // setRangeMin(minRangeRef.current.value);
      //   return;
      // } else {
      //   maxRangeRef.current.value = parseInt(minRangeRef.current.value) + 1000;
      //   // setRangeMax(maxRangeRef.current.value);
      return;
      // }
      // isMin ? setRangeMin(minRangeRef.current.value - 1000) : setRangeMax(maxRangeRef.current.value + 1000);
    } else {
      isMin ? setRangeMin(minRangeRef.current.value) : setRangeMax(maxRangeRef.current.value);
      progressRef.current.style.left = (minRangeRef.current.value / 40) * 100 + '%';
      progressRef.current.style.right = 100 - (maxRangeRef.current.value / 40) * 100 + '%';
    }
  };

  const HandleOnMouseUpPriceFilter = (e) => {
    filterDispatch(setPriceFilter([minRangeRef.current.value, maxRangeRef.current.value]));
  };

  // const handleFilterBtnClick = () => {
  //   filterDispatch(setPriceFilter([rangeMin, rangeMax]));
  // };

  console.log(filterState);
  return (
    <div className={cx('shop-filter_price')}>
      <h3 className={cx('price_title')}>Filter by price ($)</h3>
      <div className={cx('filter_price')}>
        <div className={cx('price_input')}>
          <div className={cx('field')}>
            <span>Min</span>
            <input
              // ref={maxPrice}
              type="number"
              className={cx('input-min')}
              value={rangeMin}
              onInput={(e) => HandleOnchange(e)}
            />
          </div>
          <div className={cx('separator')}>-</div>
          <div className={cx('field')}>
            <span>Max</span>
            <input
              // ref={minPrice}
              type="number"
              className={cx('input-max')}
              value={rangeMax}
              onInput={(e) => HandleOnchange(e)}
            />
          </div>
        </div>
        <div className={cx('slider')}>
          <div ref={progressRef} className={cx('progress')}></div>
          <input
            ref={minRangeRef}
            type="range"
            className={cx('range-min')}
            min="0"
            max="40"
            value={rangeMin}
            onChange={(e) => HandleOnchange(e)}
            onMouseUp={(e) => HandleOnMouseUpPriceFilter(e)}
            step="5"
          />
          <input
            ref={maxRangeRef}
            type="range"
            className={cx('range-max')}
            min="0"
            max="40"
            value={rangeMax}
            onChange={(e) => HandleOnchange(e)}
            onMouseUp={(e) => HandleOnMouseUpPriceFilter(e)}
            step="5"
          />
        </div>
      </div>

      {/* <div className={cx('filter-btn')}> */}
      {/* <button>Filter</button> */}
      <Button className={cx('filter-btn')} primary>
        Filter
      </Button>
      {/* </div> */}
    </div>
  );
}

export default PriceFilter;
