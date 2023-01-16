import { useState, Children, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

function Carousel(props) {
  // const [slidePosition, setSlidePosition] = useState(0);
  const [countSpace, setCountSpace] = useState(0);
  const [displayItems, setDisplayItems] = useState([]);
  const { children, amountItemAppear = 4, marginLeftRight = 15 } = props;

  const widthItem = useRef(0);
  const spacing = useRef(0);
  const displayFrame = useRef();

  useEffect(() => {
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
    // let newPosition = slidePosition;
    let count = countSpace - widthItem.current * 2; // 2 is number of products transalte
    if (count < 0) {
      count = spacing.current;
      // newPosition = children.length - amountItemAppear;
    }
    // else {
    //   newPosition = newPosition - 1;
    // }
    displayFrame.current.style.transform = `translateX(${-count}px)`;
    // setSlidePosition(newPosition);
    setCountSpace(count);
  };

  const nextSlideHandler = () => {
    // let newPosition = slidePosition;
    let count = countSpace + widthItem.current * 2;
    if (count > spacing.current) {
      count = 0;
      // newPosition = 0;
    }
    // else {
    //   newPosition = newPosition + 1;
    // }
    displayFrame.current.style.transform = `translateX(${-count}px)`;
    // setSlidePosition(newPosition);
    setCountSpace(count);
  };

  // const translateFullSlides = (newPosition) => {
  //   // let toTranslate = -widthItem.current * newPosition;
  //   // for (let i = 0; i < children.length; i++) {
  //   //   let element = document.getElementById(`carouselProduct` + i);
  //   displayFrame.current.style.transform = `translateX(${newPosition}px)`;
  //   // }
  // };

  return (
    <div className={cx('container')}>
      <div className={cx('left-arrow')} onClick={prevSlideHandler}>
        <FontAwesomeIcon className={cx('left-arrow-icon')} icon={faCircleChevronLeft} />
      </div>
      <div className={cx('items-container')}>
        <div className={cx('displayFrame')} ref={displayFrame}>
          {displayItems}
        </div>
      </div>
      <div className={cx('right-arrow')} onClick={nextSlideHandler}>
        <FontAwesomeIcon className={cx('right-arrow-icon')} icon={faCircleChevronRight} />
      </div>
    </div>
  );
}

export default Carousel;
