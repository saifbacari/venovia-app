import { Fragment } from 'react';
import MainCart from '../UI/MainCart';
import classes from './Header.module.css'

import headerImage from '../../assets/banner-main.png';

const Header = props => {
    return <Fragment>
        <MainCart className={classes.input}>
            <div className={classes['container-centered']}>
                <navbar className={classes.navbar}>
                        <h1>Venovia</h1>
                        <button>Pré-commander</button>    
                    </navbar>
                <div className={classes['banner-image-text']}>
                        <div className={classes['banner-text']}>
                            <h1>La gestion de vos médicaments n’est plus un problème</h1>
                            <h2>Votre vie. Votre santé. Notre solution.</h2>
                            <ul>La fin de l’oubli de médicaments</ul>
                            <ul>La fin des mauvais dosages</ul>
                            <ul>La fin des problèmes de renouvellement d’ordonnance</ul>
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