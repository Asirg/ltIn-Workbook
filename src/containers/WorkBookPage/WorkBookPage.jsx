import PropTypes from 'prop-types';

import { Outlet } from 'react-router';

import styles from './WorkBookPage.module.css';

const WorkBookPage = () => {
    return (
      <>
        <h1>Work-Book</h1>
        <main>
          <Outlet />
        </main>
      </>
    )
}

WorkBookPage.propTypes = {
    prop: PropTypes.string
}


export default WorkBookPage;
