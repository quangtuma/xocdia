import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';

const clName = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={clName('wrapper')}>
            <Header />
            <div className={clName('container')}>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
