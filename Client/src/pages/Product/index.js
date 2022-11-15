import classNames from 'classnames/bind';

import ShopSideBar from '~/components/ShopSideBar';
import ProductList from '~/components/ProductList';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx('inner')}>
      {/* <ul>
        {productList.map((product) => (
          <li key={product._id}>{product.title}</li>
        ))}
      </ul> */}
      <ShopSideBar />
      <ProductList />
    </div>
  );
}

export default Product;
