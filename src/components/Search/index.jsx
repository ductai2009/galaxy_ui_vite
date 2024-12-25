import { useState, useRef, useEffect } from 'react';

import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import className from 'classnames/bind';
import style from './Search.module.css';
import COM_Search from '../../pages/Search';

import useDebounce from '../../hooks/useDebounce';
import { CloseIcon, SearchIcon, SpinnerIcon } from '../Icon';
import { apiSearch } from '../../services/serviceCallAPI';
import { useNavigate } from 'react-router-dom';
import config from '../config';

const cx = className.bind(style);

function Search() {
    const [searchResult, setSearchResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [accountResult, setAccountResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [isSearch, setIsSearch] = useState(false);

    const inputSearch = useRef();
    const inputRef = useRef();
    const navigate = useNavigate();
    const searchRef = useRef();
    const handleClearSearch = () => {
        setSearchResult('');
        inputSearch.current.focus();
    };
    const handleHoverInputSearch = () => {
        setShowSearchResult(false);
    };

    const searchInput = useDebounce(searchResult, 600);
    const handleInputSearch = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchResult(value);
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearch(false); // Đóng search khi click ra ngoài
            }
        };
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        if (!searchInput.trim()) {
            setAccountResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                setLoading(true);
                const resultSearch = await apiSearch(searchInput);
                console.log('resultSearch apiSearch: ', resultSearch);

                let urlImg = resultSearch.APP_DOMAIN_CDN_IMAGE + '/uploads/movies/';
                setLoading(false);

                navigate(config.routes.Search, { state: resultSearch });
            } catch (error) {
                console.error('Failed to fetch apiSearch:', error);
            }
        };
        fetchApi();
    }, [searchInput]);

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadLessTippy
                interactive={true}
                visible={showSearchResult && accountResult.length > 0}
                appendTo={document.body}
                render={(attrs) => (
                    <div className={cx('tooltipBox')} tabIndex="-1" {...attrs}>
                        <div className={cx('sug-account')}>Accounts</div>
                        <div>Account</div>
                    </div>
                )}
                // onClickOutside={handleHoverInputSearch}
            >
                <div className={cx('search', { active: isSearch })} ref={searchRef}>
                    <HeadLessTippy content="Tìm kiếm">
                        <button
                            className={cx('iconSearch')}
                            onMouseDown={(e) => {
                                e.preventDefault();
                            }}
                            onClick={() => {
                                setIsSearch(!isSearch);
                            }}
                        >
                            <SearchIcon className={cx('icon')} />
                        </button>
                    </HeadLessTippy>
                    {/* <div className={cx('wrapper-searchResult')}>wrapper-searchResult</div> */}
                    <input
                        className={cx('input_search')}
                        ref={inputSearch}
                        placeholder="Tìm kiếm tên phim ..."
                        onChange={(e) => handleInputSearch(e)}
                        value={searchResult}
                        onClick={() => setShowSearchResult(true)}
                    />
                    {searchResult && !loading && (
                        <button className={cx('iconClear')} onClick={handleClearSearch}>
                            <CloseIcon />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('iconLoading')}>
                            <SpinnerIcon className={cx('icon')} />
                        </button>
                    )}
                </div>
            </HeadLessTippy>
        </div>
    );
}

export default Search;
