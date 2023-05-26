import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const clName = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={clName('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
