import classNames from 'classnames/bind';
import style from './Footer.module.css';
import Image from '../../../components/Image';
import images from '../../../assets/image';
import {
    FaceBookDefaultIcon,
    InstagramDefaultIcon,
    TikTokDefaultIcon,
    YoutubeDefaultIcon,
} from '../../../components/Icon';

function Footer() {
    const cx = classNames.bind(style);
    return (
        <div className={cx('section', 'footer')}>
            <div className={cx('line-horizontal')}></div>
            <div className={cx('wrapper')}>
                <Image className={cx('img-logo')} src={images.logo} alt="logo"></Image>
                <div className={cx('wrapper_content')}>
                    <div className={cx('footer-content')}>
                        <div className={cx('content')}>
                            Galaxy Play là dịch vụ được cung cấp bởi Công ty Cổ Phần Galaxy Play, thành viên của Công ty
                            Cổ Phần Giải Trí và Giáo Dục Galaxy (GEE.,JSC)
                        </div>
                        <div className={cx('content')}>
                            Địa chỉ: 59 Võ Nguyên Giáp, Phường Thảo Điền, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh, Việt
                            Nam.
                        </div>
                        <div className={cx('content')}>Mã số doanh nghiệp: 0106539659.</div>
                        <div className={cx('content')}>Ngày cấp mã số doanh nghiệp: 15/5/2014.</div>
                        <div className={cx('content')}>Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội.</div>
                        <Image className={cx('img-informed')} src={images.informed} alt="informed"></Image>
                    </div>
                    <div className={cx('footer-info')}>
                        <div className={cx('title')}>GIỚI THIỆU</div>
                        <div className={cx('desc')}>Quy chế sử dụng Dịch vụ</div>
                        <div className={cx('desc')}>Chính sách bảo mật</div>
                        <div className={cx('desc')}>Khuyến mãi</div>
                    </div>
                    <div className={cx('footer-support')}>
                        <div className={cx('title')}>HỖ TRỢ</div>
                        <div className={cx('desc')}>1900 8675 (24/7)</div>
                        <div className={cx('desc')}>play@galaxy.com.vn</div>
                        <div className={cx('desc')}>https://galaxyplay.vn/help</div>
                    </div>
                    <div className={cx('footer-download')}>
                        <div className={cx('title')}>TẢI ỨNG DỤNG</div>
                        <div className={cx('box-img')}>
                            <Image
                                className={cx('img-android_app')}
                                src={images.android_app_download_button}
                                alt="android_app_download_button"
                            ></Image>
                            <Image
                                className={cx('img-ios_app')}
                                src={images.ios_app_download_button}
                                alt="ios_app_download_button"
                            ></Image>
                        </div>
                        <div className={cx('title')}>KẾT NỐI VỚI CHÚNG TÔI</div>
                        <div className={cx('box-img', 'box-icon')}>
                            <FaceBookDefaultIcon />
                            <InstagramDefaultIcon />
                            <YoutubeDefaultIcon />
                            <TikTokDefaultIcon />
                            <Image
                                className={cx('icon-img')}
                                src={images.zalo_default}
                                alt="android_app_download_button"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
