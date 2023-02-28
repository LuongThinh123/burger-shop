import { memo, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
const cx = classNames.bind(styles);

const Input = forwardRef(
  (
    {
      label,
      labelClass,
      inputClass,
      className,
      id,
      type,
      name,
      error,
      rounded,
      defaultValue,
      options,
      onChange,
      ...inputProps
    },
    ref,
  ) => {
    // const [inputValue, setInputValue] = useState('');

    const classes = cx('form_group', {
      [className]: className,
    });

    return (
      <div
        className={classes}
        style={
          error && {
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
        {type === 'select' ? (
          <select
            className={cx('form_input', 'form-select', error && 'red-outline', inputClass, { rounded })}
            onChange={onChange}
            {...inputProps}
          >
            <option value="">{defaultValue}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
            {/* <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option> */}
          </select>
        ) : (
          <input
            className={cx('form_input', error && 'red-outline', inputClass, { rounded })}
            ref={ref}
            id={id}
            type={type}
            name={name}
            // value={inputValue}
            onChange={onChange}
            {...inputProps}
            // onChange={(e) => setInputValue(e.target.value)}
            //   name="fullname"
            //   placeholder="Enter your fullname"
            //   onChange={(e) => setFullname(e.target.value)}
          />
        )}
        {/* </div> */}
        {error && <span className={cx('input_error')}>{error.message}</span>}
      </div>
    );
  },
);

export default memo(Input);
