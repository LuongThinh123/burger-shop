import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchItem from '~/components/SearchItem';
import * as productApi from '~/api/productApi';
import { useDebounce } from '~/customHook';
import { setSearchTitle } from '~/reducers/actions/filterAction';
import { useFilterContext } from '~/customHook';

import styles from './Search.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);
  const [, filterDispatch] = useFilterContext();

  const debounced = useDebounce(searchValue, 700);

  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    const fetchProductList = async () => {
      try {
        const response = await productApi.getProducts({
          searchTitle: encodeURIComponent(debounced.trim()),
        });
        setSearchResult(response.products);
        console.log(response.products);
      } catch (error) {
        console.error('lỗi rồi');
      }
    };
    fetchProductList();
    setLoading(false);
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResults(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleSearchBtnClick = () => {
    if (!debounced.trim()) return;
    navigate('/products');
    filterDispatch(setSearchTitle(encodeURIComponent(debounced.trim())));
    handleClear();
  };

  return (
    <Tippy
      visible={showResults && searchResult.length > 0}
      interactive
      appendTo={() => document.body}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Search results...</h4>
            {searchResult.map((result, index) => (
              <SearchItem key={index} data={result} onClick={handleClear} />
            ))}
            <Button className={cx('view-all-result-btn')} onClick={handleSearchBtnClick}>
              View all results
            </Button>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search for products"
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => setShowResults(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')} onClick={handleSearchBtnClick}>
          <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
