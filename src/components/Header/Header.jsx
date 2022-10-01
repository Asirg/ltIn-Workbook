import PropTypes from 'prop-types';

import styles from './Header.module.css';

const Header = ({ prop }) => {
    return (
        <h1>Header</h1>
    )
}

Header.propTypes = {
    prop: PropTypes.string
}


export default Header;
