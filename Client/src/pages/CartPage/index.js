import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Banner from '~/components/Banner';
import styles from './CartPage.module.scss';
import * as cartApi from '~/api/cartApi';
import { getAccessToken } from '~/utils/localStorage';
import CartPageProduct from '~/components/CartPageProduct';

const cx = classNames.bind(styles);

function CartPage() {
  // const path = [{
  //   link: 'products',

  // }]

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const accessToken = getAccessToken();
        const response = await cartApi.getCartProducts(accessToken);
        console.log(response);
        setCartItems(response);
        // console.log([...response]);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };
    fetchProductList();
  }, []);
  // console.log(cartItems);
  return (
    <>
      <Banner heading={'Cart'}>Cart</Banner>
      <div className={cx('inner')}>
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
                  return <CartPageProduct key={item._id} data={item} />;
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

        <div className={cx('cart_footer')}>
          <div className={cx('total_container')}>
            <h2 className={cx('title')}>Cart totals</h2>
            <div className={cx('subtotal')}>
              <h4 className={cx('subtotal_title')}>Subtotal</h4>
              <span className={cx('subtotal_amount')}>$150.00</span>
            </div>
            <div className={cx('total')}>
              <h4 className={cx('total_title')}>Total</h4>
              <span className={cx('total_amount')}>$150.00</span>
            </div>
            <div className={cx('checkout_btn')}>
              <span className={cx('checkout_text')}>Proceed to checkout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
