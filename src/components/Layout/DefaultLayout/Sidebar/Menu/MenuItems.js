import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const clNames = classNames.bind(styles);

function MenuItems({ title, to, icon }) {
    return (
        <NavLink className={clNames('menu-item')} to={to}>
            {icon}
            <span className={clNames('title')}>{title}</span>
        </NavLink>
    );
}

MenuItems.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItems;
