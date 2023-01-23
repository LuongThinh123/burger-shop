import { useEffect, useState, useRef, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
const cx = classNames.bind(styles);

const Input = forwardRef(
  ({ label, labelClass, inputClass, className, id, type, name, errors, rounded, ...inputProps }, ref) => {
    const [inputValue, setInputValue] = useState('');

    const classes = cx('form_group', {
      [className]: className,
    });

    return (
      <div
        className={classes}
        style={
          errors && {
            marginBottom: 0,
          }
        }
      >
        {label && (
          <label className={cx('form_label', labelClass)} htmlFor={id}>
            {label}
          </label>
        )}
        {/* <div className={cx('feild', inputFeildClass, { rounded })}> */}
        <input
          className={cx('form_input', inputClass, { rounded })}
          ref={ref}
          id={id}
          type={type}
          name={name}
          value={inputValue}
          {...inputProps}
          onChange={(e) => setInputValue(e.target.value)}
          //   name="fullname"
          //   placeholder="Enter your fullname"
          //   onChange={(e) => setFullname(e.target.value)}
        />
        {/* </div> */}
        {errors && <span className={cx('input_error')}>This field is required!</span>}
      </div>
    );
  },
);

export default Input;
