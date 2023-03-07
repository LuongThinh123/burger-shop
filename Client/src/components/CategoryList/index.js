import { useState, useEffect, memo } from 'react';
import classNames from 'classnames/bind';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as categoryApi from '~/api/categoryApi';
import { addCategory, deleteCategory } from '~/reducers/actions/filterAction';
import styles from './CategoryList.module.scss';

const cx = classNames.bind(styles);

function CategoryList({ categoryFilter, filterDispatch }) {
  const [categories, setCategories] = useState([]);

  console.log(categoryFilter);
  useEffect(() => {
    const fecthCategories = async () => {
      const result = await categoryApi.getCategories();
      setCategories(result);
    };
    fecthCategories();
  }, []);

  const handleCategoryChecked = (input, categoryId) => {
    if (input.target.checked) {
      filterDispatch(addCategory(categoryId));
    } else {
      filterDispatch(deleteCategory(categoryId));
    }
  };
  return (
    <div className={cx('category_container')}>
      <div className={cx('sidebar_header')}>
        <h3 className={cx('header')}>Category list</h3>
      </div>
      <div className={cx('categories_box')}>
        <ul className={cx('category_list')}>
          {categories.length !== 0 ? (
            categories.map((category, index) => {
              return (
                <li key={category._id} className={cx('category')}>
                  <input
                    className={cx('category-checkbox')}
                    type="checkbox"
                    id={`check-${index}`}
                    onChange={(input) => handleCategoryChecked(input, category._id)}
                    checked={categoryFilter.includes(category._id)}
                  />
                  <label htmlFor={`check-${index}`} className={cx('category-name')}>
                    {category.title}
                  </label>
                </li>
              );
            })
          ) : (
            <>
              <Skeleton height={40} />
              <Skeleton height={40} style={{ marginTop: 15, marginBottom: 15 }} />
              <Skeleton height={40} />
              <Skeleton height={40} style={{ marginTop: 15 }} />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default memo(CategoryList);
