import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './CartEmpty.module.scss';

const cx = classNames.bind(styles);

function CartEmpty() {
  return (
    <div className={cx('cartPage-empty')}>
      <FontAwesomeIcon className={cx('cartPage-empty-icon')} icon={faCartShopping} />
      <h2 className={cx('cartPage-empty-title')}>Your shopping cart is empty</h2>
      <p className={cx('cartPage-empty-description')}>Looks like you haven't made your choice yet...</p>
      <Button primary className={cx('cartPage-empty-btn')} to={'/products'}>
        Continue shopping
      </Button>
      <Button primary className={cx('cartPage-empty-btn')} to={'/'}>
        Return to home
      </Button>
    </div>
  );
}

export default CartEmpty;
