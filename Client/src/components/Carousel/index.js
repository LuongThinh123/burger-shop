import { memo, useState, Children, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

function Carousel(props) {
  const [displayItems, setDisplayItems] = useState([]);
  const { children, amountItemAppear = 4, marginLeftRight = 0, prevBtnClass, nextBtnClass, surfingNumber = 1 } = props;
  console.log('re-render carousel');
  const countSpace = useRef(0);
  const widthItem = useRef(0);
  const spacing = useRef(0);
  const displayFrame = useRef();

  useEffect(() => {
    // console.log('re-render carousel');
    widthItem.current = displayFrame.current.getBoundingClientRect().width / amountItemAppear;
    spacing.current = widthItem.current * children.length - amountItemAppear * widthItem.current;

    const itemsDisplay = Children.map(children, (child, index) => (
      <div
        className={cx('carouselProduct')}
        id={`carouselProduct` + index}
        style={{
          width: widthItem.current - marginLeftRight * 2 + 'px',
          marginLeft: marginLeftRight,
          marginRight: marginLeftRight,
        }}
      >
        {child}
      </div>
    ));
    setDisplayItems(itemsDisplay);
  }, [children, amountItemAppear, marginLeftRight]);

  const prevSlideHandler = () => {
    let count = countSpace.current - widthItem.current * surfingNumber;
    if (count < 0) {
      count = spacing.current;
    }
    displayFrame.current.style.transform = `translateX(${-count}px)`;
    countSpace.current = count;
  };

  const nextSlideHandler = () => {
    let count = countSpace.current + widthItem.current * surfingNumber;
    if (count > spacing.current) {
      count = 0;
    }
    displayFrame.current.style.transform = `translateX(${-count}px)`;
    countSpace.current = count;
  };

  return (
    <div className={cx('container')}>
      <div className={cx('left-arrow', prevBtnClass)} onClick={prevSlideHandler}>
        <FontAwesomeIcon className={cx('left-arrow-icon')} icon={faAngleLeft} />
      </div>
      <div className={cx('items-container')}>
        <div className={cx('displayFrame')} ref={displayFrame}>
          {displayItems}
        </div>
      </div>
      <div className={cx('right-arrow', nextBtnClass)} onClick={nextSlideHandler}>
        <FontAwesomeIcon className={cx('right-arrow-icon')} icon={faAngleRight} />
      </div>
    </div>
  );
}

export default memo(Carousel);
