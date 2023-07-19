import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const clName = classNames.bind(styles);

function Header() {
    return (
        <header className={clName('wrapper')}>
            <div className={clName('inner')}>
                <div className={clName('logo')}>
                    <img src={images.logo} alt="ns-logo"></img>
                </div>
                <div className={clName('actions')}>
                    <Button transaction onClick={() => alert('Say Hi!')}>
                        Nạp Rút
                    </Button>
                    <Button primary onClick={() => alert('Say Hi!')}>
                        Đăng Nhập
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
