import { useState, Children } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);
// let spacing = widthAllItem - amountItemAppear * widthItem;
function Carousel(props) {
  const [slidePosition, setSlidePosition] = useState(0);
  const [countSpace, setCountSpace] = useState(0);
  const { children, amountItemAppear } = props;
  const spacing = 297 * children.length - amountItemAppear * 297;

  const prevSlideHandler = () => {
    let newPosition = slidePosition;
    let count = countSpace - 297;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    }
    if (count < 0) {
      count = spacing;
      newPosition = 4;
    }
    translateFullSlides(newPosition);
    setSlidePosition(newPosition);
    setCountSpace(count);
  };

  const nextSlideHandler = () => {
    let newPosition = slidePosition;
    let count = countSpace + 297;
    if (newPosition < children.length - 1) {
      newPosition = newPosition + 1;
    }
    if (count > spacing) {
      count = 0;
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setSlidePosition(newPosition);
    setCountSpace(count);
  };

  const translateFullSlides = (newPosition) => {
    let toTranslate = -297 * newPosition;
    for (let i = 0; i < children.length; i++) {
      let element = document.getElementById(`carouselProduct` + i);
      element.style.transform = `translateX(${toTranslate}px)`;
    }
  };

  const displayItems = Children.map(children, (child, index) => (
    <div className={cx('carouselProduct')} id={`carouselProduct` + index}>
      {child}
    </div>
  ));

  //   const displayItems = Children.map(children, (child, index) => {
  //     <div className={cx('carouselProduct')} id={`carouselProduct` + index}>
  //       {child}
  //     </div>;
  //   });

  return (
    <div className={cx('container')}>
      <div className={cx('left-arrow')} onClick={prevSlideHandler}>
        <FontAwesomeIcon className={cx('left-arrow-icon')} icon={faCircleChevronLeft} />
      </div>
      <div className={cx('displayFrame')}>{displayItems}</div>
      <div className={cx('right-arrow')} onClick={nextSlideHandler}>
        <FontAwesomeIcon className={cx('right-arrow-icon')} icon={faCircleChevronRight} />
      </div>
    </div>
  );
}

export default Carousel;
