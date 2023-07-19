import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import images from '~/assets/images';

const clNames = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={clNames('wrapper')}>
            <Menu>
                <MenuItems
                    title="XÓC ĐĨA"
                    to=""
                    icon={<img src={images.xocDiaIcon} alt="xocdiaicon" className={clNames('icon')}></img>}
                />

                <MenuItems
                    title="TÀI XỈU"
                    to="/taixiu"
                    icon={<img src={images.taiXiuIcon} alt="taixiuicon" className={clNames('icon')}></img>}
                />
                <MenuItems
                    title="TIẾN LÊN"
                    to="/tienlen"
                    icon={<img src={images.tienLenIcon} alt="tienlenicon" className={clNames('icon')}></img>}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
