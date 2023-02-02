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
  const [currentPage, setCurrentPage] = useState(1);
  const [productListInfor, setProductListInfor] = useState({});
  // const [filterState, filterDispatch] = useFilterContext();
  const [, toastDispatch] = useToastContext();
  // console.log('re-render product list');
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getProducts(filterState);
        console.log(response);
        setProductListInfor(response);
        setCurrentPage(response.page);
        // console.log(response);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };
    fetchProductList();
  }, [filterState]);
  // const currentData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  const handleOnPageChange = useCallback(
    (currentPage) => {
      filterDispatch(changePage(currentPage));
    },
    [filterDispatch],
  );
  // (currentPage) => filterDispatch(changePage(currentPage))
  return (
    <div className={cx('products-box')}>
      <SortBar filterDispatch={filterDispatch} />
      <div className={cx('product-list')}>
        {/* {console.log(productListInfor.page)} */}
        {productListInfor.products
          ? productListInfor.products.map((data) => {
              return <ProductCard key={data._id} data={data} toastDispatch={toastDispatch} />;
            })
          : []}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={productListInfor.total ? productListInfor.total : ''}
        pageSize={productListInfor.limit ? productListInfor.limit : 6}
        onPageChange={useCallback((currentPage) => handleOnPageChange(currentPage), [handleOnPageChange])}
      />
    </div>
  );
}

export default ProductList;
