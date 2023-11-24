import { Fragment } from 'react';
import classes from './Header.module.css'
import Navbar from '../UI/Navbar/Navbar';
import Banner from '../UI/Banner/Banner';


const Header = props => {
    return <Fragment>
            <div className={classes['container-centered']}>
              <Navbar />
              <Banner />     
            </div>    
    </Fragment>
}

export default Header;
