import { useState, useEffect } from 'react';
import productApi from '~/api/productApi';

function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        // console.log(response);
        setProductList(response);
        console.log(response);
      } catch (error) {
        console.error('lỗi mẹ rồi');
      }
    };
    fetchProductList();
  }, []);
  return (
    <div>
      <ul>
        {productList.map((product) => (
          <li key={product._id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
