// import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBacon, faBowlFood } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import HomeProduct from '~/components/HomeProduct';
import Carousel from '~/components/Carousel';
import styles from './Home.module.scss';
import Toast from '~/components/Toast';

const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <div className={cx('homeInner')}>
        <div className={cx('Home-slider')}>
          <div className={cx('slider__container')}>
            <Carousel
              amountItemAppear={1}
              prevBtnClass={cx('slider-prev-btn')}
              nextBtnClass={cx('slider-next-btn')}
              marginLeftRight={0}
            >
              <div className={cx('slider')}>
                {/* <img src="" alt="" /> */}
                <Image src={images.homeSlide1} />
                <div className={cx('slide-content')}>
                  <h3 className={cx('text')}>WELCOME TO CT-FOOD</h3>
                  <p className={cx('slide-description')}>GOOD FOOD GOOD FELLINGS</p>
                  <Button to={'/products'} primary className={cx('slide-btn')}>
                    CHECK OUT OUR MENU
                  </Button>
                </div>
              </div>

              <div className={cx('slider')}>
                {/* <img src="" alt="" /> */}
                <Image src={images.homeSlide2} />
                <div className={cx('slide-content')}>
                  <h3 className={cx('text')}>SHARE YOUR LOVE WITH BURGER</h3>
                  <p className={cx('slide-description')}>
                    Buy the most appetizing burger you've never eaten before in your life
                  </p>
                  <Button to={'/products'} primary className={cx('slide-btn')}>
                    ORDER NOW
                  </Button>
                </div>
              </div>

              <div className={cx('slider')}>
                {/* <img src="" alt="" /> */}
                <Image src={images.homeSlide3} />
                <div className={cx('slide-content')}>
                  <h3 className={cx('text')}>FRESH AND HOT</h3>
                  <p className={cx('slide-description')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
                  </p>
                  <Button to={'/products'} primary className={cx('slide-btn')}>
                    ORDER NOW
                  </Button>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className={cx('elementor-inner')}>
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
        </div>
        <HomeProduct />
        <div className={cx('menu-cointainer')}>
          <div className={cx('menu-board')}>
            <div className={cx('menu-blur-imgBox')}>
              <Image className={cx('menu-blur')} src={images.blurImg} />
            </div>
            <div className={cx('menu-blur-imgBox2')}>
              <Image className={cx('menu-blur2')} src={images.blurImg2} />
            </div>
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
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist1.png')} />
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
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist2.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Weekend Combo</div>
                        <div className={cx('combo-price')}>$13.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist3.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Family Combo</div>
                        <div className={cx('combo-price')}>$33.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('menu-item')}>
                <h4 className={cx('menu-title')}>
                  <i>Kids Menus</i> :
                </h4>
                <div className={cx('menu-products')}>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist4.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Mostep Taco</div>
                        <div className={cx('combo-price')}>$7.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist5.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Chocolate Shake</div>
                        <div className={cx('combo-price')}>$9.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist6.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Ice Cream</div>
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
                  <i>Burgers</i> :
                </h4>
                <div className={cx('menu-products')}>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist7.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Bacon Burger</div>
                        <div className={cx('combo-price')}>$12.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist8.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Double Cheese Burger</div>
                        <div className={cx('combo-price')}>$14.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist9.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Seafood Burger</div>
                        <div className={cx('combo-price')}>$9.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('menu-item')}>
                <h4 className={cx('menu-title')}>
                  <i>Chicken</i> :
                </h4>
                <div className={cx('menu-products')}>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist10.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Chicken Crispy</div>
                        <div className={cx('combo-price')}>$6.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist11.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Fried Thigh</div>
                        <div className={cx('combo-price')}>$8.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                  <div className={cx('menu-product')}>
                    <div className={cx('menu-product-imgBox')}>
                      <Image className={cx('menu-product-img')} src={require('~/assets/images/menuboadlist12.png')} />
                    </div>
                    <div className={cx('menu-combo-list')}>
                      <div className={cx('menu-combo-header')}>
                        <div className={cx('combo-header')}>Teriyaki</div>
                        <div className={cx('combo-price')}>$3.95</div>
                      </div>
                      <div className={cx('menu-combo-description')}>Burger, coke, fries, chicken nuggets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('quality-food-container')}>
          <div className={cx('quality-food-populated')}>
            <h2 className={cx('quality-food-header')}>Always Quality</h2>
            <h2 className={cx('quality-food-title')}>The best quality for your health</h2>
            <div className={cx('quality-food-desription')}>
              Each freshly meal is perfectly sized for one person to enjoy at one sitting. Out fully prepared meals are
              delivered fresh, and ready to eat in 3 minutes.
            </div>
            <div className={cx('quality-food-view-stacked')}>
              <div className={cx('quality-food-icon-box')}>
                <FontAwesomeIcon className={cx('quality-food-icon')} icon={faBacon} />
              </div>
              <div className={cx('quality-food-box-content')}>
                <h3 className={cx('box-content-name')}>Choose your meal</h3>
                <p className={cx('box-content-title')}>80+ menus to choose from </p>
              </div>
            </div>
            <div className={cx('quality-food-view-stacked')}>
              <div className={cx('quality-food-icon-box')}>
                <FontAwesomeIcon className={cx('quality-food-icon')} icon={faBowlFood} />
              </div>
              <div className={cx('quality-food-box-content')}>
                <h3 className={cx('box-content-name')}>Authentical product</h3>
                <p className={cx('box-content-title')}>Keep healthy and regulate immune system.</p>
              </div>
            </div>
            <Button className={cx('discover-btn')}>DISCOVER NOW</Button>
          </div>
          <div className={cx('quality-food-images')}>
            <div className={cx('quality-food-imgBox')}>
              <Image src={images.qualityfood} className={cx('quality-food-img')} />
            </div>
          </div>
        </div>
        <div className={cx('explore-taste-menu')}>
          <div className={cx('explore-taste-imgBox')}>
            <div className={cx('explore-overlay')}></div>
            <div className={cx('explore-taste-elements')}>
              <h2 className={cx('explore-taste-heading')}>Explore the new taste</h2>
              <p className={cx('explore-taste-title')}>Enjoy our luscious dishes wherever you want</p>
              <Button primary className={cx('explore-taste-btn')}>
                ORDER NOW
              </Button>
            </div>
          </div>
          <div className={cx('taste-menu')}>
            <div className={cx('taste-menu-list')}>
              <div className={cx('taste-menu-item')}>
                <div className={cx('taste-menu-header')}>
                  <span className={cx('taste-menu-name')}>Pizza Hut</span>
                  <span className={cx('taste-menu-price')}>$4.95</span>
                </div>
                <div className={cx('taste-menu-combo-list')}>Shrimp, Squid, Pineapple</div>
              </div>
              <div className={cx('taste-menu-item')}>
                <div className={cx('taste-menu-header')}>
                  <span className={cx('taste-menu-name')}>Pepperoni Pizza</span>
                  <span className={cx('taste-menu-price')}>$5.95</span>
                </div>
                <div className={cx('taste-menu-combo-list')}>Shrimp, Squid, Pineapple</div>
              </div>
              <div className={cx('taste-menu-item')}>
                <div className={cx('taste-menu-header')}>
                  <span className={cx('taste-menu-name')}>Apricot Chicken</span>
                  <span className={cx('taste-menu-price')}>$5.65</span>
                </div>
                <div className={cx('taste-menu-combo-list')}>Shrimp, Squid, Pineapple</div>
              </div>
              <div className={cx('taste-menu-item')}>
                <div className={cx('taste-menu-header')}>
                  <span className={cx('taste-menu-name')}>Summer Pizza</span>
                  <span className={cx('taste-menu-price')}>$8.95</span>
                </div>
                <div className={cx('taste-menu-combo-list')}>Shrimp, Squid, Pineapple</div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('our-service')}>
          <h1 className={cx('our-service-heading')}>Our Service</h1>
          <h1 className={cx('our-service-title')}>Fastest delivery and easy pickup</h1>
          <div className={cx('our-service-items')}>
            <div className={cx('our-service-item')}>
              <div className={cx('service-item-box-icon')}>
                <svg
                  className={cx('service-item-icon')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M64 9.73913V13.913H0V9.73913C0 6.66563 2.49162 4.17387 5.56525 4.17387H58.4349C61.5083 4.17387 64 6.66563 64 9.73913Z"
                    fill="#A5A5A5"
                  ></path>
                  <path
                    d="M49.7391 8.27825V8.41737C49.7391 8.99362 49.2719 9.46087 48.6956 9.46087C48.1194 9.46087 47.6521 8.99362 47.6521 8.41737V8.27825C47.6521 7.702 48.1194 7.23475 48.6956 7.23475C49.2719 7.23475 49.7391 7.702 49.7391 8.27825ZM52.8696 7.23475C52.2934 7.23475 51.8261 7.702 51.8261 8.27825V8.41737C51.8261 8.99362 52.2934 9.46087 52.8696 9.46087C53.4459 9.46087 53.9131 8.99362 53.9131 8.41737V8.27825C53.913 7.702 53.4459 7.23475 52.8696 7.23475ZM57.0435 7.23475C56.4672 7.23475 56 7.702 56 8.27825V8.41737C56 8.99362 56.4672 9.46087 57.0435 9.46087C57.6197 9.46087 58.087 8.99362 58.087 8.41737V8.27825C58.087 7.702 57.6197 7.23475 57.0435 7.23475Z"
                    fill="#777777"
                  ></path>
                  <path
                    d="M64 12.5218V51.4782C64 54.5517 61.5084 57.0435 58.4347 57.0435H5.56525C2.49162 57.0435 0 54.5517 0 51.4782V12.5218H8.34787V2.78262C8.34787 1.24575 9.59362 0 11.1304 0H22.2607C23.7976 0 25.0434 1.24575 25.0434 2.78262V12.5218H64Z"
                    fill="#FFE6AE"
                  ></path>
                  <path
                    d="M57.0435 32.6956V48C57.0435 49.5369 55.7978 50.7826 54.2609 50.7826H9.73913C8.20225 50.7826 6.9565 49.5369 6.9565 48V32.6956C6.9565 31.1588 8.20225 29.913 9.73913 29.913H54.2609C55.7978 29.913 57.0435 31.1589 57.0435 32.6956ZM9.73913 24.3479H22.2609C23.7978 24.3479 25.0435 23.1021 25.0435 21.5653C25.0435 20.0284 23.7978 18.7826 22.2609 18.7826H9.73913C8.20225 18.7826 6.9565 20.0284 6.9565 21.5653C6.9565 23.102 8.20225 24.3479 9.73913 24.3479ZM32 24.3479H54.2609C55.7978 24.3479 57.0435 23.1021 57.0435 21.5653C57.0435 20.0284 55.7978 18.7826 54.2609 18.7826H32C30.4631 18.7826 29.2174 20.0284 29.2174 21.5653C29.2174 23.102 30.4631 24.3479 32 24.3479Z"
                    fill="#FFD880"
                  ></path>
                  <path
                    d="M25.0434 2.78262V12.5218H8.34787V2.78262C8.34787 1.24575 9.59362 0 11.1304 0H22.2607C23.7976 0 25.0434 1.24575 25.0434 2.78262Z"
                    fill="#FCC159"
                  ></path>
                  <path
                    d="M22.2609 4.86963V7.65225C22.2609 8.42062 21.638 9.0435 20.8696 9.0435H12.5218C11.7534 9.0435 11.1305 8.42062 11.1305 7.65225V4.86963C11.1305 4.10125 11.7534 3.47837 12.5218 3.47837H20.8696C21.638 3.47825 22.2609 4.10113 22.2609 4.86963Z"
                    fill="#FFA522"
                  ></path>
                  <path
                    d="M57.0435 32.8348V58.4347C57.0435 61.5082 54.5517 64 51.4782 64H34.3545C31.281 64 28.7892 61.5084 28.7892 58.4347V32.8348C28.7892 29.7613 31.281 27.2695 34.3545 27.2695H51.4782C54.5517 27.2696 57.0435 29.7613 57.0435 32.8348Z"
                    fill="#D0F7D6"
                  ></path>
                  <path
                    d="M41.5033 27.2696L28.7892 54.5349V32.8348C28.7892 29.7613 31.2809 27.2695 34.3545 27.2695L41.5033 27.2696ZM56.2982 30.0544L43.5941 57.2986H34.2416L48.2444 27.2695H44.6208L30.1281 58.3493H28.7892V58.4349C28.7892 61.5084 31.281 64 34.3545 64H51.4782C54.5517 64 57.0435 61.5085 57.0435 58.4349V32.8348C57.0435 31.8215 56.7714 30.8726 56.2982 30.0544Z"
                    fill="#A3CCAA"
                  ></path>
                  <path
                    d="M57.0435 56.4655V58.4347C57.0435 61.5082 54.5517 64 51.4782 64H34.3545C31.281 64 28.7892 61.5084 28.7892 58.4347V56.4655H57.0435Z"
                    fill="#777777"
                  ></path>
                  <path
                    d="M45.8435 60.2327C45.8435 60.809 45.3762 61.2762 44.8 61.2762H41.0327C40.4565 61.2762 39.9893 60.809 39.9893 60.2327C39.9893 59.6565 40.4565 59.1893 41.0327 59.1893H44.8C45.3762 59.1893 45.8435 59.6565 45.8435 60.2327Z"
                    fill="#D0F7D6"
                  ></path>
                </svg>
              </div>
              <div className={cx('our-service-box-content')}>
                <h3 className={cx('service-content-title')}>Easy To Order</h3>
                <p className={cx('service-content-description')}>You only need a few steps in ordering food.</p>
              </div>
            </div>
            <div className={cx('our-service-item')}>
              <div className={cx('service-item-box-icon')}>
                <svg
                  className={cx('service-item-icon')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="64"
                  viewBox="0 0 73 64"
                  fill="none"
                >
                  <path
                    d="M13.6875 47.5429C16.5349 47.5429 19.043 48.9949 20.5163 51.2H36.5H47.45V21.9429V16.4571H31.9375H29.2V27.4286L23.725 21.9429L18.25 27.4286V16.4571H15.5125H0V36.5714H5.475V42.0571V47.5429H0V51.2H6.85872C8.33204 48.9949 10.8401 47.5429 13.6875 47.5429Z"
                    fill="#CCF8F3"
                  ></path>
                  <path
                    d="M62.05 21.9429H47.45V51.2H52.4837C53.957 48.9949 56.4651 47.5429 59.3125 47.5429C62.1599 47.5429 64.668 48.9949 66.1413 51.2H73V47.5429H69.35L67.525 42.0571H73V38.4L62.05 21.9429ZM52.925 38.4V27.4286H59.1198L66.4198 38.4H52.925Z"
                    fill="#00D7DF"
                  ></path>
                  <path d="M52.925 27.4286V38.4H66.4198L59.1198 27.4286H52.925Z" fill="white"></path>
                  <path
                    d="M20.5163 51.2C21.3899 52.5074 21.9 54.0796 21.9 55.7714C21.9 56.0806 21.8814 56.3853 21.8484 56.6857H36.5V51.2H20.5163Z"
                    fill="#786145"
                  ></path>
                  <path
                    d="M52.4837 51.2H47.45H36.5V56.6857H51.1516C51.1184 56.3853 51.1 56.0806 51.1 55.7714C51.1 54.0796 51.6101 52.5074 52.4837 51.2Z"
                    fill="#50412E"
                  ></path>
                  <path
                    d="M10.95 55.7714C10.95 54.2566 12.1757 53.0286 13.6875 53.0286V47.5429C10.8401 47.5429 8.33204 48.9949 6.85872 51.2H0V56.6857H5.52665C5.98071 60.7998 9.46043 64 13.6875 64V58.5143C12.1757 58.5143 10.95 57.2862 10.95 55.7714Z"
                    fill="#786145"
                  ></path>
                  <path
                    d="M20.5163 51.2C19.043 48.9949 16.5349 47.5429 13.6875 47.5429V53.0286C15.1993 53.0286 16.425 54.2566 16.425 55.7714C16.425 57.2862 15.1993 58.5143 13.6875 58.5143V64C17.9146 64 21.3943 60.7998 21.8484 56.6857C21.8816 56.3853 21.9 56.0806 21.9 55.7714C21.9 54.0796 21.3899 52.5074 20.5163 51.2Z"
                    fill="#50412E"
                  ></path>
                  <path
                    d="M56.575 55.7714C56.575 54.2566 57.8007 53.0286 59.3125 53.0286V47.5429C56.4651 47.5429 53.957 48.9949 52.4837 51.2C51.6101 52.5074 51.1 54.0796 51.1 55.7714C51.1 56.0806 51.1186 56.3853 51.1516 56.6857C51.6057 60.7998 55.0854 64 59.3125 64V58.5143C57.8007 58.5143 56.575 57.2862 56.575 55.7714Z"
                    fill="#786145"
                  ></path>
                  <path
                    d="M59.3125 47.5429V53.0286C60.8243 53.0286 62.05 54.2566 62.05 55.7714C62.05 57.2862 60.8243 58.5143 59.3125 58.5143V64C63.5396 64 67.0191 60.7998 67.4734 56.6857H73V51.2H66.1413C64.668 48.9949 62.1599 47.5429 59.3125 47.5429Z"
                    fill="#50412E"
                  ></path>
                  <path
                    d="M13.6875 58.5143C15.1993 58.5143 16.425 57.2862 16.425 55.7714C16.425 54.2566 15.1993 53.0286 13.6875 53.0286C12.1757 53.0286 10.95 54.2566 10.95 55.7714C10.95 57.2862 12.1757 58.5143 13.6875 58.5143Z"
                    fill="white"
                  ></path>
                  <path
                    d="M59.3125 58.5143C60.8243 58.5143 62.05 57.2862 62.05 55.7714C62.05 54.2566 60.8243 53.0286 59.3125 53.0286C57.8007 53.0286 56.575 54.2566 56.575 55.7714C56.575 57.2862 57.8007 58.5143 59.3125 58.5143Z"
                    fill="white"
                  ></path>
                  <path d="M5.475 42.0571H0V47.5429H5.475V42.0571Z" fill="#FF9811"></path>
                  <path d="M5.475 36.5714H0V42.0571H5.475V36.5714Z" fill="#00D7DF"></path>
                  <path d="M69.35 47.5429H73V42.0571H67.525L69.35 47.5429Z" fill="#FF9811"></path>
                  <path
                    d="M31.9375 16.4571C36.4734 16.4571 40.15 12.7731 40.15 8.22857C40.15 3.68402 36.4734 0 31.9375 0C27.4016 0 23.725 3.68402 23.725 8.22857C23.725 3.68402 20.0484 0 15.5125 0C10.9766 0 7.3 3.68402 7.3 8.22857C7.3 12.7731 10.9766 16.4571 15.5125 16.4571H31.9375ZM29.2 8.22857C29.2 6.71616 30.428 5.48571 31.9375 5.48571C33.447 5.48571 34.675 6.71616 34.675 8.22857C34.675 9.74098 33.447 10.9714 31.9375 10.9714H29.2V8.22857ZM12.775 8.22857C12.775 6.71616 14.003 5.48571 15.5125 5.48571C17.022 5.48571 18.25 6.71616 18.25 8.22857V10.9714H15.5125C14.003 10.9714 12.775 9.74098 12.775 8.22857Z"
                    fill="#FFDA44"
                  ></path>
                  <path d="M18.25 16.4571V27.4286L23.725 21.9429L29.2 27.4286V16.4571H18.25Z" fill="#FF9811"></path>
                </svg>
              </div>
              <div className={cx('our-service-box-content')}>
                <h3 className={cx('service-content-title')}>Fast Delivery</h3>
                <p className={cx('service-content-description')}>You only need a few steps in ordering food.</p>
              </div>
            </div>
            <div className={cx('our-service-item')}>
              <div className={cx('service-item-box-icon')}>
                <svg
                  className={cx('service-item-icon')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="64"
                  viewBox="0 0 73 64"
                  fill="none"
                >
                  <path d="M64.8627 2.37037H53.0695V24.8889H64.8627V2.37037Z" fill="#680B09"></path>
                  <path d="M66.042 0H51.8901V2.37037H66.042V0Z" fill="#C43D27"></path>
                  <path d="M71.9386 59.2593H0V64H71.9386V59.2593Z" fill="#207700"></path>
                  <path
                    d="M8.25525 48.9481L10.6139 47.763L12.9725 48.9481V61.7481L10.6139 62.9333L8.25525 61.7481V48.9481Z"
                    fill="#207700"
                  ></path>
                  <path
                    d="M0 48.9481L2.35864 47.763L4.71729 48.9481V61.7481L2.35864 62.9333L0 61.7481V48.9481Z"
                    fill="#207700"
                  ></path>
                  <path d="M10.6139 53.3333H2.35864V55.7037H10.6139V53.3333Z" fill="#239B02"></path>
                  <path d="M64.8627 28.4444H16.5105V61.6296H64.8627V28.4444Z" fill="white"></path>
                  <path d="M16.5105 28.4444H64.8627V61.6296" fill="#E8F9FC"></path>
                  <path
                    d="M37.7383 59.2593V37.0963C37.7383 36.0296 37.3845 35.5556 36.3231 35.5556H25.3554C24.294 35.5556 23.5864 36.1481 23.5864 37.0963V59.2593H37.7383Z"
                    fill="#FCA12A"
                  ></path>
                  <path
                    d="M37.7383 48.5926V37.0963C37.7383 36.0296 37.3845 35.5556 36.3231 35.5556H25.3554C24.294 35.5556 23.5864 36.1481 23.5864 37.0963"
                    fill="#E58613"
                  ></path>
                  <path
                    d="M36.3231 47.5259C36.3231 48.5926 35.4976 49.5407 34.3183 49.5407C33.2569 49.5407 32.3134 48.7111 32.3134 47.5259C32.3134 46.4593 33.1389 45.5111 34.3183 45.5111C35.3796 45.5111 36.3231 46.3407 36.3231 47.5259Z"
                    fill="#DB5435"
                  ></path>
                  <path
                    d="M35.7334 46.1037C36.559 46.8148 36.441 48.1185 35.7334 48.9481C35.0258 49.7778 33.7286 49.6593 32.9031 48.9481"
                    fill="#C43D27"
                  ></path>
                  <path
                    d="M50.7108 41.4815H57.7868V37.0963C57.7868 36.0296 56.6074 35.5556 55.546 35.5556H50.7108V41.4815Z"
                    fill="#0E75AF"
                  ></path>
                  <path
                    d="M49.5315 41.4815V35.5556H44.2246C43.1632 35.5556 42.4556 36.1481 42.4556 37.0963V41.4815H49.5315Z"
                    fill="#1EA4C4"
                  ></path>
                  <path
                    d="M49.5315 42.6667H42.4556V47.2889C42.4556 48.3556 43.1632 48.5926 44.2246 48.5926H49.5315V42.6667Z"
                    fill="#0E75AF"
                  ></path>
                  <path
                    d="M50.7108 42.6667V48.5926H55.546C56.6074 48.5926 57.7868 48.3556 57.7868 47.2889V42.6667H50.7108Z"
                    fill="#1EA4C4"
                  ></path>
                  <path d="M73 28.4444L40.6866 3.08148L8.49111 28.4444H73Z" fill="#C43D27"></path>
                  <path d="M73 28.4444L40.6866 3.08148L24.294 28.4444H73Z" fill="#AA1E0F"></path>
                  <path d="M17.5719 21.3333H63.9192L60.9709 18.963H20.5202L17.5719 21.3333Z" fill="#C43D27"></path>
                  <path d="M28.0678 13.037H53.4233L51.8901 11.8519H29.601L28.0678 13.037Z" fill="#C43D27"></path>
                </svg>
              </div>
              <div className={cx('our-service-box-content')}>
                <h3 className={cx('service-content-title')}>Pick Up</h3>
                <p className={cx('service-content-description')}>Pickup delivery at your doorstep.</p>
              </div>
            </div>
            <div className={cx('our-service-item')}>
              <div className={cx('service-item-box-icon')}>
                <svg
                  className={cx('service-item-icon')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="64"
                  viewBox="0 0 66 64"
                  fill="none"
                >
                  <path
                    d="M2.93078 48.3198C3.44424 50.7509 4.74363 52.7874 6.60688 54.4614H51.3646C52.1277 53.3549 52.574 52.0649 52.574 50.5292C52.574 49.7542 52.4924 48.9911 52.3365 48.2459C52.1721 47.4579 52.1277 46.6602 52.1638 45.8637L44.2825 38.0326C45.8962 40.3707 48.0065 43.0761 47.7078 45.7588C47.3634 48.8469 44.2044 51.2016 39.9201 46.7806C36.2223 42.9652 34.4755 39.7973 33.9333 37.1873C32.5152 36.6566 31.4953 35.5728 30.8942 35.0614C25.4568 30.4293 20.4586 29.6507 16.3661 30.9671C15.8238 30.4901 15.3091 29.9787 14.8412 29.4159C14.2893 28.7507 13.519 28.3714 12.7151 28.2832C6.96814 29.2561 9.36419 33.9025 9.36419 33.9025C9.67247 34.2745 9.96169 34.6596 10.2401 35.0531C6.77121 38.8934 2.08853 44.3327 2.93078 48.3198Z"
                    fill="#F4C44E"
                  ></path>
                  <path
                    d="M14.7968 8.73039C26.5103 -2.91013 45.5015 -2.91013 57.2149 8.73039C68.9284 20.3709 68.9284 39.2439 57.2149 50.8844L14.7968 8.73039Z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    d="M60.0016 64H2.41241L0.1736 58.0659C-0.484988 56.3216 0.811953 54.4616 2.6859 54.4616H59.728C61.6021 54.4616 62.899 56.3216 62.2403 58.0659L60.0016 64Z"
                    fill="#E6E6E6"
                  ></path>
                  <path
                    d="M1.49993 21.9453C1.85384 21.5136 2.30737 21.2561 2.78733 21.15C3.08724 21.0833 3.32722 20.8853 3.45082 20.6063C3.64762 20.1581 3.98825 19.7646 4.48265 19.5023C5.36214 19.0349 6.48986 19.1911 7.20618 19.8838C7.77494 20.4334 7.99443 21.1774 7.89248 21.8797C7.77726 22.6726 7.93334 23.4798 8.44551 24.0986L12.0436 28.4361C9.95717 28.9583 9.16055 30.0338 8.94468 31.0998L5.28416 26.6882C4.77186 26.0706 4.00398 25.7641 3.19769 25.7248C2.48497 25.6914 1.79159 25.3349 1.35725 24.6744C0.81002 23.8446 0.86995 22.7155 1.49993 21.9453Z"
                    fill="#D2D5D7"
                  ></path>
                  <path
                    d="M12.7154 28.283C13.5181 28.3724 14.2895 28.7504 14.8414 29.4158C17.0166 32.0377 20.07 33.7344 23.4174 34.4306C25.2278 34.8061 26.9243 35.7779 28.1865 37.3148C30.9748 40.7082 30.5944 45.8196 27.3262 48.7598C23.7521 51.9742 18.2451 51.5439 15.2132 47.8894C14.0819 46.5253 13.4603 44.911 13.326 43.274C13.044 39.8235 11.5792 36.5733 9.36316 33.9025C9.36316 33.9025 6.9684 29.2561 12.7154 28.283Z"
                    fill="#DC9628"
                  ></path>
                  <path
                    d="M36.0905 29.8913C33.1174 32.9281 31.6381 38.2339 39.9202 46.7816C44.2046 51.2027 47.3637 48.8466 47.7068 45.7598C48.0055 43.0759 45.8963 40.3706 44.2826 38.0325L36.0905 29.8913Z"
                    fill="#DC9628"
                  ></path>
                  <path
                    d="M57.2154 8.7304C58.3024 9.81062 59.2886 10.954 60.174 12.1487C60.6348 11.9234 61.0739 11.6408 61.4578 11.2592C63.3319 9.39679 63.3319 6.37795 61.4578 4.51427C59.5826 2.65186 56.5447 2.65186 54.6706 4.51427C54.2867 4.89582 54.0024 5.33218 53.7756 5.79007C54.9778 6.6701 56.1284 7.65017 57.2154 8.7304Z"
                    fill="#AAA7A5"
                  ></path>
                  <path
                    d="M53.8217 13.2945C53.5146 13.2945 53.2074 13.1777 52.9734 12.9451C51.698 11.6776 50.293 10.5581 48.797 9.61978C48.2367 9.26807 48.0699 8.53123 48.4239 7.97434C48.7766 7.41758 49.5205 7.253 50.0783 7.60355C51.7244 8.63728 53.2697 9.86659 54.6699 11.2592C55.139 11.7254 55.139 12.4789 54.6699 12.9451C54.436 13.1777 54.1288 13.2945 53.8217 13.2945Z"
                    fill="#AAA7A5"
                  ></path>
                  <path
                    d="M22.4336 10.7655C22.0533 10.7655 21.679 10.5867 21.445 10.2503C21.0682 9.70905 21.205 8.96619 21.7498 8.59297C28.0306 4.27681 35.9755 2.77097 43.0062 4.55705C43.648 4.72035 44.0355 5.37022 43.8712 6.00806C43.7056 6.6459 43.053 7.02988 42.4111 6.86658C36.0463 5.24509 28.8321 6.62451 23.1151 10.5532C22.9063 10.6963 22.6688 10.7655 22.4336 10.7655Z"
                    fill="#AAA7A5"
                  ></path>
                </svg>
              </div>
              <div className={cx('our-service-box-content')}>
                <h3 className={cx('service-content-title')}>Dine In</h3>
                <p className={cx('service-content-description')}>Enjoy your food fresh crispy and hot.</p>
              </div>
            </div>
            <div className={cx('our-service-item')}>
              <div className={cx('service-item-box-icon')}>
                <svg
                  className={cx('service-item-icon')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="64"
                  viewBox="0 0 63 64"
                  fill="none"
                >
                  <path
                    d="M46.707 13.0173C46.1063 13.0173 45.6207 12.5313 45.6207 11.9326V5.42414C45.6207 4.82539 46.1063 4.3394 46.707 4.3394C47.3076 4.3394 47.7932 4.82539 47.7932 5.42414V11.9326C47.7932 12.5313 47.3076 13.0173 46.707 13.0173Z"
                    fill="#25B99A"
                  ></path>
                  <path
                    d="M46.708 6.50888C46.33 6.50888 45.964 6.3125 45.7641 5.96213C45.4654 5.44251 45.6468 4.77977 46.1681 4.48252L53.7716 0.143695C54.2908 -0.154551 54.9556 0.0265717 55.2532 0.547191C55.5519 1.06681 55.3705 1.72955 54.8492 2.0268L47.2457 6.36575C47.0762 6.46338 46.8905 6.50888 46.708 6.50888Z"
                    fill="#25B99A"
                  ></path>
                  <path
                    d="M61.9138 18.441H31.5C30.9004 18.441 30.4138 17.955 30.4138 17.3563V13.0173C30.4138 12.4186 30.9004 11.9326 31.5 11.9326H61.9138C62.5133 11.9326 63 12.4186 63 13.0173V17.3563C63 17.955 62.5133 18.441 61.9138 18.441Z"
                    fill="#CAD3DB"
                  ></path>
                  <path
                    d="M38.0173 63.9998H5.43106C4.23082 63.9998 3.25863 63.0289 3.25863 61.8303V57.4913H40.1897V61.8303C40.1897 63.029 39.2175 63.9998 38.0173 63.9998Z"
                    fill="#D18F1A"
                  ></path>
                  <path
                    d="M41.2183 57.4915H2.23C0.998218 57.4915 0 56.4946 0 55.2645V53.21C0 51.9799 0.998218 50.983 2.23 50.983H41.2183C42.4501 50.983 43.4483 51.9799 43.4483 53.21V55.2645C43.4483 56.4945 42.4501 57.4915 41.2183 57.4915Z"
                    fill="#8E4A27"
                  ></path>
                  <path
                    d="M3.4534 41.2204C1.85011 41.2204 0.365367 42.2899 0.0600808 43.8606C-0.336327 45.9021 1.29624 47.6257 3.25901 47.7288C5.13816 47.8276 6.51764 46.3294 6.51764 44.4746H11.9487C11.9487 46.2719 13.4075 47.7288 15.2073 47.7288C17.0071 47.7288 18.466 46.2719 18.466 44.4746H24.9832C24.9832 46.2719 26.4421 47.7288 28.2419 47.7288C30.0417 47.7288 31.5005 46.2719 31.5005 44.4746H36.9316C36.9316 46.3294 38.311 47.8276 40.1902 47.7288C41.9521 47.6366 43.4488 46.2362 43.4488 44.4746C43.4488 42.7791 41.888 41.2204 40.1902 41.2204H3.4534Z"
                    fill="#8E4A27"
                  ></path>
                  <path d="M3.25826 41.2204H40.1892V36.8814H3.25826V41.2204Z" fill="#76A944"></path>
                  <path
                    d="M36.9311 44.4746H31.5C31.5 46.2719 30.0412 47.7288 28.2414 47.7288C26.4416 47.7288 24.9827 46.2719 24.9827 44.4746H18.4655C18.4655 46.2719 17.0066 47.7288 15.2068 47.7288C13.407 47.7288 11.9482 46.2719 11.9482 44.4746H6.51714C6.51714 46.3294 5.13766 47.8276 3.25851 47.7288V50.983H40.1896V47.7288C38.3105 47.8276 36.9311 46.3294 36.9311 44.4746Z"
                    fill="#F9EA7F"
                  ></path>
                  <path
                    d="M21.7241 23.8647C8.68956 23.8647 0 28.3393 0 34.7121V35.7838C0 36.3902 0.492037 36.8815 1.09923 36.8815H42.349C42.9562 36.8815 43.4482 36.3902 43.4482 35.7838V34.7121C43.4483 28.3391 34.7586 23.8647 21.7241 23.8647Z"
                    fill="#D18F1A"
                  ></path>
                  <path
                    d="M31.5 18.441L31.8095 24.9321C39.0371 26.6178 43.4482 30.18 43.4482 34.7121V35.7838C43.4482 36.3902 42.9562 36.8815 42.349 36.8815H40.1896V41.2205C41.8873 41.2205 43.4482 42.7792 43.4482 44.4747C43.4482 46.2374 41.9514 47.6367 40.1896 47.7289V50.9831H41.2182C42.45 50.9831 43.4482 51.98 43.4482 53.2101V55.2646C43.4482 56.4947 42.45 57.4916 41.2182 57.4916H40.1896V61.8305C40.1896 63.028 39.2174 64 38.0171 64H57.6721C58.831 64 59.7848 63.0921 59.8401 61.9358L61.9137 18.4412H31.5V18.441Z"
                    fill="#E6EEF3"
                  ></path>
                  <path
                    d="M46.707 28.2035C44.7637 28.2035 42.9748 28.8489 41.5279 29.925C42.7629 31.3416 43.4483 32.9503 43.4483 34.7119V35.7837C43.4483 36.3901 42.9563 36.8814 42.3491 36.8814H40.1897V41.2204C41.8875 41.2204 43.4483 42.7791 43.4483 44.4746C43.4483 44.6211 43.4233 44.761 43.4028 44.902C44.4216 45.3217 45.5361 45.5593 46.707 45.5593C51.5058 45.5593 55.3966 41.6737 55.3966 36.8814C55.3966 32.0891 51.5058 28.2035 46.707 28.2035Z"
                    fill="#25B99A"
                  ></path>
                </svg>
              </div>
              <div className={cx('our-service-box-content')}>
                <h3 className={cx('service-content-title')}>Best Quality</h3>
                <p className={cx('service-content-description')}>Not only fast for us quality is also number one.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast position={'top-left'} />
    </>
  );
}

export default Home;
