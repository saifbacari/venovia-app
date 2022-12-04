import { Fragment } from 'react';
import MainCart from '../UI/MainCart';
import classes from './Header.module.css'

import headerImage from '../../assets/banner-main.png';
import  logoBanner from '../../assets/logo-venovia.png';

const Header = props => {
    return <Fragment>
        <MainCart className={classes.input}>
            <div className={classes['container-centered']}>
                <navbar className={classes.navbar}>
                        <img src={logoBanner} alt='img-banner' />
                        <ul className={classes['list-navbar']}>
                            <li>à propos</li>
                            <li>E-box</li>
                            <li>Contact</li>
                        </ul>
                        <button>Pré-commander</button>    
                    </navbar>
                <div className={classes['banner-image-text']}>
                        <div className={classes['banner-text']}>
                            <h1>La gestion de vos médicaments n’est plus un problème</h1>
                            <h3>Votre vie. Votre santé. Notre solution.</h3>
                            <ul className={classes['list-banner']}>
                                <li>La fin de l’oubli de médicaments</li>
                                <li>La fin des mauvais dosages</li>
                                <li>La fin des problèmes de renouvellement d’ordonnance</li>
                            </ul>
                        </div>
                        <img src={headerImage} alt='immage banner'/>      
                </div>           
            </div>
        </MainCart>
    </Fragment>
}

export default Header;

//ajouter les css avec les classnames pour le header
//le faire pour l'image banner-main(utiliser la 2e façon d'add du css comme on l'integre à Header.module.css)