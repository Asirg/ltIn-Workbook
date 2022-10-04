import PropTypes from 'prop-types';

import MenuElement from '@ui/MenuElement';

import styles from './SideBar.module.css';

import internetIcon from './img/internet-icon.svg'
import backendIcon from './img/backend-icon.svg'
import frontendIcon from './img/frontend-icon.svg'

const SideBar = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['side-bar']}>
                <ul className={styles['list']}>
                    < MenuElement toLink="#" icon={internetIcon} label="Inernet" />
                    < MenuElement toLink="#" icon={backendIcon} label="BackEnd" />
                    < MenuElement toLink="#" icon={frontendIcon} label="FrontEnd" />
                </ul>  
            </div>
        </div>
    )
}

export default SideBar;
