import React from "react";
import { Fragment } from "react";


import classes from "./AboutPage.module.css";

const AboutPage = (props) => {
  return (
    <Fragment>
      <div className={classes["banner-a-propos"]}>
        <div className={classes["banner-image-text"]}>
          <div className={classes["banner-text"]}>
            <h1>à propos de nous</h1>
            <p>
              Notre mission est d’apporter des solutions innovantes aux
              personnes pour agir sur leur santé et reprendre un certain
              contrôle sur leur maladie.
            </p>
          </div>
          <div className={classes["timeline-summary"]}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;

//faire fichier css commun pr ts les elements qui sont repris
