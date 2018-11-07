import React from "react";

import styles from "./App.module.css";

const Show = ({ show, goToShow }) => {
  return (
    <div onClick={() => goToShow(show.permalink)} className={styles.show}>
      <img src={show.image_thumbnail_path} alt="thumbnail" />
      <h4>{show.name}</h4>
    </div>
  );
};

export default Show;
