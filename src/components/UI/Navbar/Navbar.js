import classes from "./navbar.module.css";
import logoBanner from "../../../assets/logo-venovia.png";

const Navbar = () => {
  return (
    <>
      <navbar className={classes.navbar}>
            <img src={logoBanner} alt="img-banner" />
            <ul className={classes["list-navbar"]}>
                <li>Produits</li>
                <li>Solutions</li>
                <li>Contact</li>
            </ul>
        <button className={classes["button-navbar"]}>Pré-commander</button>
      </navbar>
    </>
  );
};

export default Navbar;
