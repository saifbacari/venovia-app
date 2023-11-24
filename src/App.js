import { Fragment } from 'react';
import AboutPage from './components/Layout/AboutPage';
import styles from './components/UI/MainCart.module.css';
import Header from './components/Layout/Header';
import MainCart from './components/UI/MainCart';

function App() {
  return (
    <Fragment>
      <MainCart className={styles.input}>
        <Header />
        <AboutPage />
      </MainCart>
    </Fragment>
  );
}

export default App;
