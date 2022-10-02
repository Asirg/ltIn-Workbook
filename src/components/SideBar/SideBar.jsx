import PropTypes from 'prop-types';
import {
    NavLink
} from 'react-router-dom';

import styles from './SideBar.module.css';

import internetIcon from './img/internet-icon.svg'

const SideBar = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['side-bar']}>
                <ul className={styles['list']}>
                    <li className={styles['item']}>
                        <NavLink to="#" className={styles['item__navlink']}>
                            <img src={internetIcon} className={styles['item__icon']}/>
                            <span className={styles['item__label']}>
                            Internet
                            </span>
                        </NavLink>
                    </li>
                </ul>  
                <ul className={styles['list']}>
                </ul>  
            </div>
        </div>
    )
}

export default SideBar;
