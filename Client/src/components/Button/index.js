import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      to,
      href,
      primary = false,
      outline = false,
      text = false,
      rounded = false,
      disabled = false,
      small = false,
      large = false,
      children,
      className,
      leftIcon,
      rightIcon,
      onClick,
      ...passProps
    },
    ref,
  ) => {
    let Comp = 'button';
    const props = {
      onClick,
      ...passProps,
    };

    if (disabled) {
      Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
          delete props[key];
        }
      });
    }

    if (to) {
      props.to = to;
      Comp = Link;
    } else if (href) {
      props.href = href;
      Comp = 'a';
    }

    const classes = cx('wrapper', {
      [className]: className,
      primary,
      outline,
      small,
      large,
      text,
      disabled,
      rounded,
    });

    return (
      <Comp ref={ref} className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
    );
  },
);

export default Button;
