import { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import styles from './CartPage.module.scss';
import * as cartApi from '~/api/cartApi';
import { getAccessToken, setCartProducts } from '~/utils/localStorage';
import CartPageProduct from '~/components/CartPageProduct';
import CartEmpty from '~/components/CartEmpty';
import Button from '~/components/Button';
import { priceFormat } from '~/utils/priceFormat';

const cx = classNames.bind(styles);

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const subTotal = useRef();
  const total = useRef();
  const productBoxRef = useRef();

  let totalPrice = 0;

  console.log('re-render nè');
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const accessToken = getAccessToken();
        if (!accessToken) return;
        const response = await cartApi.getCartProducts(accessToken);
        setCartItems(response);
        setCartProducts(response);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };
    // const cartItems = getCartProducts();
    // if (cartItems) {
    //   setCartItems(cartItems);
    //   console.log(cartItems);
    // } else {
    fetchProductList();
    // }
  }, []);

  const onUpdateRemoveChange = useCallback(() => {
    if (productBoxRef.current.childElementCount <= 0) {
      setCartItems([]);
    }
  }, []);

  return (
    <>
      <Banner heading={'Cart'}>Cart</Banner>
      <div className={cx('inner')}>
        {cartItems.length !== 0 ? (
          <div className={cx('cartList__box')}>
            <div className={cx('cartPage_header')}>
              <div className={cx('product_title')}>Product</div>
              <div className={cx('product_price')}>Price</div>
              <div className={cx('product_quantity')}>Quantity</div>
              <div className={cx('product_total')}>Total</div>
            </div>
            <div ref={productBoxRef} className={cx('product-box')}>
              {cartItems
                ? cartItems.map((item) => {
                    totalPrice += item.sale * item.quantity;
                    return (
                      <CartPageProduct
                        key={item._id}
                        data={item}
                        subTotalRef={subTotal}
                        totalRef={total}
                        onUpdateRemoveChange={onUpdateRemoveChange}
                      />
                    );
                  })
                : []}
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}

        {cartItems.length !== 0 && (
          <div className={cx('cart_footer')}>
            <div className={cx('total_container')}>
              <h2 className={cx('title')}>Cart totals</h2>
              <div className={cx('subtotal')}>
                <h4 className={cx('subtotal_title')}>Subtotal</h4>
                <span ref={subTotal} className={cx('subtotal_amount')}>
                  ${priceFormat(totalPrice)}
                </span>
              </div>
              <div className={cx('total')}>
                <h4 className={cx('total_title')}>Total</h4>
                <span ref={total} className={cx('total_amount')}>
                  ${priceFormat(totalPrice)}
                </span>
              </div>
              <Button to={'/checkout'} className={cx('checkout_btn')}>
                Proceed to checkout
              </Button>
              {/* <div className={cx('checkout_btn')}>
              <span className={cx('checkout_text')}>Proceed to checkout</span>
            </div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
