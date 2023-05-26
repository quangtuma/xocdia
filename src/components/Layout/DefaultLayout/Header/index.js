import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const clName = classNames.bind(styles);

function Header() {
    return <header className={clName('wrapper')}>Header</header>;
}

export default Header;
