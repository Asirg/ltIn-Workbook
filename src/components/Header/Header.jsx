import PropTypes from 'prop-types';
import { useState } from 'react';
import cn from 'classnames';

import styles from './Header.module.css';

import menuIcon from './img/menu-icon.svg'

// export const changeCssVariables = theme => {
//     const root = document.querySelector(":root");

//     // root.style.setProperty(
//     //     '--theme-default-bgimage', 
//     //     `var(--theme-${theme}-bgimage)`
//     // );

//     const cssVariables = [
//         'bgimage'
//     ];

//     cssVariables.forEach(element=>{
//         root.style.setProperty(
//             `--theme-default-${element}`,
//             `var(--theme-${theme}-${element})`
//         )
//     });
// }
const Header = ({ prop }) => {
    const [sideBarStatus, setSideBatStatus] = useState(false);

    const activateSideBar = () =>{
        const root = document.querySelector(":root");
        if (!sideBarStatus){
            root.style.setProperty(
                '--size-side-bar-current',
                'var(--size-side-bar-open)'
            )
        }else{
            root.style.setProperty(
                '--size-side-bar-current',
                'var(--size-side-bar-hidden)'
            )
        }
        setSideBatStatus(!sideBarStatus);
    }

    
    return (
    <div className={styles['app-bar']}>
        <button 
            onClick={activateSideBar}
            className={
                cn(styles['menu-button'],
                    sideBarStatus && styles['active']
                )
            }
            value={true}
        >
            <img src={menuIcon} className={styles['menu-button__icon']}/>
        </button>
    </div>
    )
}

Header.propTypes = {
    prop: PropTypes.string
}


export default Header;
