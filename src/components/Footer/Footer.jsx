import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import styles from './Footer.module.css';

import githubIcon from './img/github-icon.png';

const Footer = ({ prop }) => {
    return (
        <div className={styles['footer']}>
            <div className={styles['about']}>
                <span className={styles['about__header']}>About project:</span>
                <ul className={styles['list']}>
                    <li className={styles['item']}>
                        <a href="https://github.com/Asirg">
                            <span className={styles['item__text']}>my github</span>
                        </a>
                    </li>
                    <li className={styles['item']}>
                        <a href="https://github.com/Asirg">
                            <span className={styles['item__text']}>my github</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles['social-accounts']}>
                <span className={styles['social-accounts__header']}>Social accounts:</span>
                <ul className={styles['list']}>
                    <li className={styles['item']}>
                        <a href="https://github.com/Asirg">
                            <img src={githubIcon} className={styles['item__img']} />
                        </a>
                    </li>
                    <li className={styles['item']}>
                        <a href="https://github.com/Asirg">
                            <img src={githubIcon} className={styles['item__img']} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Footer.propTypes = {
    prop: PropTypes.string
}


export default Footer;
