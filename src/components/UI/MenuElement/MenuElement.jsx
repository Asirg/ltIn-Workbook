import PropTypes from 'prop-types';

import styles from './MenuElement.module.css';

import {
    NavLink
} from 'react-router-dom';


const MenuElement = ({ toLink, icon, label, }) => {
    return (
        <li className={styles['item']}>
            <NavLink to={toLink} className={styles['item__navlink']}>
                <img src={icon} className={styles['item__icon']}/>
                <span className={styles['item__label']}>
                    {label}
                </span>
            </NavLink>
        </li>
    )
}

MenuElement.propTypes = {
    toLink: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string
}


export default MenuElement;
