import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { useFilterContext } from '~/customHook';

import styles from './ProductList.module.scss';
import SortBar from '~/components/SortBar';
import ProductCard from '~/components/ProductCard';
import Pagination from '~/components/Pagination';
import { changePage } from '~/reducers/actions/filterAction';
import * as productApi from '~/api/productApi';
import { useToastContext } from '~/customHook';

const cx = classNames.bind(styles);

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productListInfor, setProductListInfor] = useState({});
  const [filterState, filterDispatch] = useFilterContext();
  const [, toastDispatch] = useToastContext();
  console.log('re-render');
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getProducts(filterState);
        // console.log(response);
        setProductListInfor(response);
        setCurrentPage(response.page);
        console.log(response);
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

  return (
    <div className={cx('products-box')}>
      <SortBar />
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
        onPageChange={(currentPage) => filterDispatch(changePage(currentPage))}
      />
    </div>
  );
}
// ? productListInfor.total : 35
// ? productListInfor.limit : 6
export default ProductList;
