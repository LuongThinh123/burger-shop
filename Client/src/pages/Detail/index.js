import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import DetailItem from '~/components/DetailItem';
import DetailTabUI from '~/components/DetailTabUI';
import DetailRecommendProducts from '~/components/DetailRecommendProducts';
import { useToastContext } from '~/customHook';
import * as productApi from '~/api/productApi';
import Toast from '~/components/Toast';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
  const [detailItem, setDetailItem] = useState({});
  const [recommendProducts, setRecommendProducts] = useState([]);
  const [, toastDispatch] = useToastContext();

  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    // console.log(params);
    const fetchDetailItem = async () => {
      try {
        const response = await productApi.getProductById(productId);
        setDetailItem(response);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };

    const fetchRecommendProducts = async () => {
      try {
        const response = await productApi.getRandomProducts(12);
        console.log(response);
        setRecommendProducts(response);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };

    fetchDetailItem();
    fetchRecommendProducts();
  }, [productId]);

  return (
    <>
      <div className={cx('inner')}>
        <DetailItem data={detailItem} toastDispatch={toastDispatch} />
        <DetailTabUI />
        <DetailRecommendProducts data={recommendProducts} toastDispatch={toastDispatch} />
      </div>
      <Toast position={'top-left'} />
    </>
  );
}

export default Detail;
