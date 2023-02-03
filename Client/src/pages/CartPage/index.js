import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import styles from './CartPage.module.scss';
import * as cartApi from '~/api/cartApi';
import { getAccessToken, setCartProducts } from '~/utils/localStorage';
import CartPageProduct from '~/components/CartPageProduct';
import CartEmpty from '~/components/CartEmpty';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const subTotal = useRef();
  const total = useRef();

  let totalPrice = 0;

  console.log('re-render nè');
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const accessToken = getAccessToken();
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
            <div className={cx('product-box')}>
              {cartItems
                ? cartItems.map((item) => {
                    totalPrice += item.sale * item.quantity;
                    return <CartPageProduct key={item._id} data={item} subTotalRef={subTotal} totalRef={total} />;
                  })
                : []}
              {/* <div className={cx('product')}>
              <div class="cartPage__product-item">
                <div class="cartPage__product-imgBox">
                  <img class="cartPage__product-img" src="${product.img}" alt="" />
                </div>

                <div class="cartPage__product-item-infor">
                  <h3 class="cartPage__product-name">chicken hamburger</h3>

                  <div class="modal__cart-delete-icon">
                    <i class="far fa-times-circle deleteIcon" data-id=""></i>
                  </div>
                </div>
              </div>
              <div class="cartPage__product-item-price">
                <span class="cartPage__product-cost">$35</span>
              </div>
              <div class="cartPage__item-input">
                <div class="modal__cart-item-input">
                  <button class="cart__item-decrement" data-id="">
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="9999"
                    step="1"
                    value=""
                    class="cart_item-input"
                    data-id=""
                    inputmode="numeric"
                  />
                  <button class="cart__item-increment" data-id="">
                    +
                  </button>
                </div>
              </div>
              <div class="cartPage__product-total">
                <span class="cartPage__product-total-cost">$500</span>
              </div>
            </div> */}
              {/* <CartPageProduct /> */}
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
                  ${totalPrice}
                </span>
              </div>
              <div className={cx('total')}>
                <h4 className={cx('total_title')}>Total</h4>
                <span ref={total} className={cx('total_amount')}>
                  ${totalPrice}
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
