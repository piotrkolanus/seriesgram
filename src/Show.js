import React from "react";

import styles from "./Show.module.css";

const Show = ({ show, goToShow }) => {
  return (
    <div className={styles.showWrapper}>
      <div
        onClick={() => goToShow(show.permalink)}
        className={styles.showImage}
      >
        <img src={show.image_thumbnail_path} alt="thumbnail" />
      </div>
      <p>{show.name}</p>
    </div>
  );
};

export default Show;
