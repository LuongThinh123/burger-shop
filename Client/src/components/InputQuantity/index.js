import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './InputQuantity.module.scss';
const cx = classNames.bind(styles);

function InputQuantity({ value, className, rounded = false, onChange }) {
  const [inputQuantity, setInputQuantity] = useState(value);

  const classes = cx('wrapper', {
    [className]: className,
  });

  //   const handleOncickPlusAndMinus = (e) => {
  //     if (e.target === e.currentTarget) {
  //       const increment = e.target.classList.contains('InputQuantity_increment__0e-aZ');
  //       const decrement = e.target.classList.contains('decrement');

  //       console.log(increment, decrement);
  //       if (increment) {
  //         setInputQuantity(inputQuantity + 1);
  //       } else if (decrement && inputQuantity > 0) {
  //         setInputQuantity(inputQuantity - 1);
  //       }
  //     }
  //   };

  return (
    <div className={classes}>
      <div className={cx('quantity_input', { rounded })}>
        {/* <div class="modal__cart-item-input"> */}
        <button
          className={cx('decrement')}
          data-id=""
          onClick={() => (inputQuantity > 1 ? setInputQuantity(Number(inputQuantity) - 1) : 1)}
          //   onChange={onChange}
        >
          <FontAwesomeIcon className={cx('decrement-icon')} icon={faMinus} />
        </button>
        <input
          type="number"
          min="1"
          max="9999"
          step="1"
          value={inputQuantity}
          className={cx('quantity')}
          data-id=""
          inputMode="numeric"
          onChange={(e) => setInputQuantity(e.target.value)}
        />
        <button
          className={cx('increment')}
          data-id=""
          onClick={() => setInputQuantity(Number(inputQuantity) + 1)}
          //   onChange={onChange}
        >
          <FontAwesomeIcon className={cx('increment-icon')} icon={faPlus} />
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default InputQuantity;
