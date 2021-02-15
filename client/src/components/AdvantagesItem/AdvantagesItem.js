import React from "react";

import styles from "./AdvantagesItem.module.scss";

const AdvantagesItem = ({
  className = "",
  icon = "",
  title = "",
  description = "",
}) => {
  return (
    <div className={`${styles.item} ${className}`}>
      <img src={icon} alt="" />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AdvantagesItem;
