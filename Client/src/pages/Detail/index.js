import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import DetailItem from '~/components/DetailItem';
import DetailTabUI from '~/components/DetailTabUI';
import ProductCard from '~/components/ProductCard';
import Carousel from '~/components/Carousel';
import * as productApi from '~/api/productApi';
import Toast from '~/components/Toast';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
  const [detailItem, setDetailItem] = useState({});
  const [recommendProducts, setRecommendProducts] = useState([]);

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

  // useEffect(() => {
  //   const fetchRecommendProducts = async () => {
  //     try {
  //       const response = await productApi.getRandomProducts(12);
  //       console.log(response);
  //       setRecommendProducts(response);
  //     } catch (error) {
  //       console.error('lỗi rồi');
  //     }
  //   };

  //   fetchRecommendProducts();
  // }, []);

  return (
    <>
      <div className={cx('inner')}>
        <DetailItem data={detailItem} />
        <DetailTabUI />
        <div className={cx('recommend-food')}>
          <h1 className={cx('recommend-food-title')}>YOU MAY ALSO LIKE</h1>
          <Carousel amountItemAppear={4} marginLeftRight={15} surfingNumber={2}>
            {recommendProducts.map((product) => (
              <ProductCard key={product._id} data={product} className={cx('product')} />
            ))}
            {/* <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} />
            <ProductCard data={data} /> */}
            {/* aloha hehe aloha hehe aloha hehe aloha hehe */}
          </Carousel>
        </div>
      </div>
      <Toast position={'top-left'} />
    </>
  );
}

export default Detail;
