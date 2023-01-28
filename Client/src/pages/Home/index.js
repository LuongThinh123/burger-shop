// import { useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('homeInner')}>
      <div></div>
      <div className={cx('elementor-container')}>
        <div className={cx('element')}>
          <div className={cx('element-item')}>
            <div className={cx('element-title')}>
              <h2>SPECIAL FOR YOU MONSTER PIZZA</h2>
            </div>
            <div className={cx('element-button')}>
              <Button primary className={cx('element-btn')}>
                ORDER NOW
              </Button>
            </div>
            <div className={cx('food-element-imgBox')}>
              <Image className={cx('food-element-img')} src={images.element} />
            </div>
          </div>
        </div>
        <div className={cx('element')}>
          <div className={cx('element-item')}>
            <div className={cx('element-title')}>
              <h2>BURGER COMBO</h2>
            </div>
            <div className={cx('food-element-imgBox')}>
              <Image className={cx('food-element-img')} src={images.element2} />
            </div>
            <div className={cx('price-only')}>
              <div className={cx('price')}>$6.90 ONLY</div>
              <div className={cx('element-button')}>
                <Button primary className={cx('element-btn')}>
                  ORDER NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('element')}>
          <div className={cx('element-item')}>
            <div className={cx('element-title')}>
              <h2>
                Delicious FOOD MENU <span>This weekend only</span>
              </h2>
            </div>
            <div className={cx('element-button')}>
              <Button primary className={cx('element-btn')}>
                ORDER NOW
              </Button>
            </div>
            <div className={cx('food-element-imgBox')}>
              <Image className={cx('food-element-img')} src={images.element3} />
            </div>
          </div>
        </div>
      </div>
      <div className={cx('menu-cointainer')}>
        <div className={cx('menu-board')}>
          <div className={cx('menu-heading')}>
            <h2 className={cx('menu-heading-name')}>Our Menu</h2>
            <h2 className={cx('menu-heading-title')}>CT-FOOD menu board</h2>
          </div>
          <div className={cx('menu-box')}>
            <div className={cx('menu-item')}>
              <h4 className={cx('menu-title')}>
                <i>Special Combo</i> :
              </h4>
              <div className={cx('menu-products')}>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('menu-item')}>
              <h4 className={cx('menu-title')}>
                <i>Special Combo</i> :
              </h4>
              <div className={cx('menu-products')}>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('menu-box')}>
            <div className={cx('menu-item')}>
              <h4 className={cx('menu-title')}>
                <i>Special Combo</i> :
              </h4>
              <div className={cx('menu-products')}>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('menu-item')}>
              <h4 className={cx('menu-title')}>
                <i>Special Combo</i> :
              </h4>
              <div className={cx('menu-products')}>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
                <div className={cx('menu-product')}>
                  <div className={cx('menu-product-imgBox')}>
                    <Image className={cx('menu-product-img')} src={images.test} />
                  </div>
                  <div className={cx('menu-combo-list')}>
                    <div className={cx('menu-combo-header')}>
                      <div className={cx('combo-header')}>Happy Lunch Combo</div>
                      <div className={cx('combo-price')}>$8.95</div>
                    </div>
                    <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
