import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from './ProductList.module.scss';
import SortBar from '~/components/SortBar';
import ProductCard from '~/components/ProductCard';
import Pagination from '~/components/Pagination';
import { changePage } from '~/reducers/actions/filterAction';
import * as productApi from '~/api/productApi';
import { useToastContext } from '~/customHook';

const cx = classNames.bind(styles);

function ProductList({ filterState, filterDispatch }) {
  const [productListInfor, setProductListInfor] = useState({});
  const [, toastDispatch] = useToastContext();

  // console.log('re-render product list');
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getProducts(filterState);
        console.log(response);
        setProductListInfor(response);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };
    fetchProductList();
  }, [filterState]);

  const handleOnPageChange = useCallback(
    (currentPage) => {
      filterDispatch(changePage(currentPage));
    },
    [filterDispatch],
  );

  return (
    <div className={cx('products-box')}>
      <SortBar
        sortFilter={filterState.order}
        pageFilter={filterState.page}
        limit={productListInfor.limit ? productListInfor.limit : 6}
        totalCount={productListInfor.total ? productListInfor.total : ''}
        filterDispatch={filterDispatch}
      />
      <div className={cx('product-list')}>
        {productListInfor.products
          ? productListInfor.products.map((data) => {
              return <ProductCard key={data._id} data={data} toastDispatch={toastDispatch} />;
            })
          : []}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={filterState.page}
        totalCount={productListInfor.total ? productListInfor.total : ''}
        pageSize={productListInfor.limit ? productListInfor.limit : 6}
        onPageChange={useCallback((currentPage) => handleOnPageChange(currentPage), [handleOnPageChange])}
      />
    </div>
  );
}

export default ProductList;
