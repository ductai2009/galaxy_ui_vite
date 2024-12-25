import classNames from 'classnames/bind';
import style from './Header.module.css';
import images from '../../../assets/image';
import Button from '../../../components/Button';
import config from '../../../components/config';
import { Link, NavLink } from 'react-router-dom';
import {
    SearchIcon,
    LogOutIcon,
    LanguageIcon,
    FeedBackIcon,
    AccountIcon,
    SettingIcon,
    MoreNavIcon,
} from '../../../components/Icon';
import Search from '../../../components/Search';

import Image from '../../../components/Image';
import Menu from '../../../components/Popper/Menu';

function Header() {
    const cx = classNames.bind(style);
    const currentUser = true;
    const MENU_NO_ACC = [
        {
            title: 'Ngôn Ngữ',
            icon: <LanguageIcon />,
            to: '',
            children: {
                title: 'Language',
                data: [
                    { code: 'vi', title: 'Tiếng Việt' },
                    { code: 'en', title: 'Tiếng Anh' },
                ],
            },
        },
        {
            title: 'Hỗ trợ',
            icon: <FeedBackIcon />,
            to: '',
        },
    ];

    const MENU_ACC = [
        {
            title: 'Tài khoản',
            icon: <AccountIcon />,
            to: config.routes.ProfileMe,
        },

        {
            title: 'Cài đặt',
            icon: <SettingIcon />,
            to: '',
        },
    ];
    let MENU_ITEM = MENU_NO_ACC;
    if (currentUser) {
        MENU_ITEM = [
            ...MENU_ACC,
            ...MENU_ITEM,
            {
                title: 'Log out',
                icon: <LogOutIcon />,
                to: '',
                separate: true,
            },
        ];
    }
    const MENU_NAV = [
        {
            title: 'Trang Chủ',
            icon: '',
            to: config.routes.Home,
        },
        {
            title: 'Kho Phim',
            icon: '',
            to: config.routes.WareHouse,
        },
        {
            title: 'Phim Điện Ảnh',
            icon: '',
            to: config.routes.PhimDienAnh,
        },
        {
            title: 'Phim Bộ',
            icon: '',
            to: config.routes.PhimBo,
        },
        {
            title: 'Phim Thuê',
            icon: '',
            to: config.routes.PhimThue,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('nav')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.Home} className={cx('logo-img')}>
                            <img src={images.logo} alt="logo"></img>
                        </Link>
                    </div>
                    <div className={cx('item-nav')}>
                        <Menu item={MENU_NAV}>
                            <div className={cx('nav-icon-more')}>
                                <MoreNavIcon className={cx('icon-more')} />
                            </div>
                        </Menu>

                        <div className={cx('nav-list')}>
                            <NavLink
                                end
                                className={(nav) => cx('nav', { active: nav.isActive })}
                                to={config.routes.Home}
                            >
                                <div className={cx('item')}>Trang chủ</div>
                            </NavLink>
                            <NavLink
                                end
                                className={(nav) => cx('nav', { active: nav.isActive })}
                                to={config.routes.WareHouse}
                            >
                                <div className={cx('item')}>Kho Phim</div>
                            </NavLink>
                            <NavLink
                                end
                                className={(nav) => cx('nav', { active: nav.isActive })}
                                to={config.routes.PhimDienAnh}
                            >
                                <div className={cx('item')}>Phim Điện Ảnh</div>
                            </NavLink>
                            <NavLink
                                end
                                className={(nav) => cx('nav', { active: nav.isActive })}
                                to={config.routes.PhimBo}
                            >
                                <div className={cx('item')}>Phim Bộ</div>
                            </NavLink>
                            <NavLink
                                end
                                className={(nav) => cx('nav', { active: nav.isActive })}
                                to={config.routes.PhimThue}
                            >
                                <div className={cx('item')}>Phim Thuê</div>
                            </NavLink>
                            {/* <NavLink end className={(nav) => cx('nav', { active: nav.isActive })} to={'/khuyen-mai'}>
                                <div className={cx('item')}>Khuyến Mãi</div>
                            </NavLink> */}
                            {/* <NavLink end className={(nav) => cx('nav', { active: nav.isActive })} to={config.routes.Blog}>
                                <div className={cx('item')}>Blog</div>
                            </NavLink>
                            <NavLink end className={(nav) => cx('nav', { active: nav.isActive })} to={config.routes.Help}>
                                <div className={cx('item')}>Hỗ Trợ</div>
                            </NavLink> */}
                            {/* <NavLink end className={(nav) => cx('nav', { active: nav.isActive })} to={config.routes.Player}>
                                <div className={cx('item')}>Player</div>
                            </NavLink> */}
                        </div>
                    </div>
                </div>

                <div className={cx('action')}>
                    {/* <Button primary className={cx('login')}>
                        Đăng Nhập
                    </Button> */}
                    <Search />
                    <Menu item={MENU_ITEM}>
                        <div className={cx('more-icon', 'account-icon')}>
                            <div className={cx('box-current-user')}>
                                <Image
                                    className={cx('current-user')}
                                    fallBack={images.accountNhuY}
                                    src={images.accountNhuY}
                                    alt="Account"
                                ></Image>
                            </div>
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
