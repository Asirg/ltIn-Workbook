import PropTypes from 'prop-types';
import { Outlet } from 'react-router';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './WorkBookPage.module.css';

import Button from '@material-ui/core/Button';

const WorkBookPage = () => {
    return (
      <>
        <Header />
        <h1>Work-Book</h1>

        <Button variant="contained" color="primary">
          Hello World
        </Button>

        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    )
}

WorkBookPage.propTypes = {
    prop: PropTypes.string
}


export default WorkBookPage;
