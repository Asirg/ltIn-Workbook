import PropTypes from 'prop-types';

import styles from './App.module.css';

const App = ({ prop }) => {
  return (
    <h1>Hello</h1>
  )
}

App.propTypes = {
  prop: PropTypes.string
}


export default App;
