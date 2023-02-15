import { useEffect, useState, useRef, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useDebounce } from '~/customHook';
import styles from './InputQuantity.module.scss';
const cx = classNames.bind(styles);

const InputQuantity = forwardRef(({ value, productId, className, rounded = false, onCallApi }, ref) => {
  const [inputQuantity, setInputQuantity] = useState(value);
  const [isBlur, setIsBlur] = useState(true);
  const currentValue = useRef(value);

  const quantityDebounced = useDebounce(inputQuantity, 530);
  const blurDebounced = useDebounce(isBlur, 530);

  const classes = cx('quantity_input', {
    [className]: className,
    rounded,
  });

  const handleMinusClick = () => {
    if (inputQuantity > 1) {
      setInputQuantity(Number(inputQuantity) - 1);
    }
  };

  useEffect(() => {
    if (!onCallApi || !quantityDebounced) return;
    if (Number(quantityDebounced) !== Number(currentValue.current) && blurDebounced) {
      currentValue.current = quantityDebounced;
      // console.log(currentValue.current);
      onCallApi();
    }
  }, [quantityDebounced, blurDebounced, onCallApi, value]);

  return (
    <div className={classes}>
      <button className={cx('decrement')} data-id="" onMouseDown={handleMinusClick}>
        <FontAwesomeIcon className={cx('decrement-icon')} icon={faMinus} />
      </button>
      <input
        ref={ref}
        type="number"
        min="1"
        max="9999"
        step="1"
        value={inputQuantity}
        className={cx('quantity')}
        data-id={productId}
        inputMode="numeric"
        onChange={(e) => {
          setInputQuantity(Number(e.target.value));
        }}
        onFocus={() => setIsBlur(false)}
        onBlur={(e) => {
          if (e.target.value === '') setInputQuantity(1);
          setIsBlur(true);
        }}
      />
      <button className={cx('increment')} data-id="" onMouseDown={() => setInputQuantity(Number(inputQuantity) + 1)}>
        <FontAwesomeIcon className={cx('increment-icon')} icon={faPlus} />
      </button>
    </div>
  );
});

export default InputQuantity;
