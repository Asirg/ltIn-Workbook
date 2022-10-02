import PropTypes from 'prop-types';
import { Outlet } from 'react-router';

import Header from '@components/Header';
import Footer from '@components/Footer';
import SideBar from '@components/SideBar';

import styles from './WorkBookPage.module.css';


const WorkBookPage = () => {
    return (
      <div className={styles['wrapper']}>
        <Header />
        <SideBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
}

WorkBookPage.propTypes = {
    prop: PropTypes.string
}


export default WorkBookPage;
