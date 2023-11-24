import classes from './banner.module.css'
import headerImage from '../../../assets/banner-main.png'

const Banner = () => {
    return (
            <div>
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
                        <img src={headerImage} className={classes['image-banner']} alt='pic banner'/>      
                </div>
            </div>
    )
}

export default Banner;