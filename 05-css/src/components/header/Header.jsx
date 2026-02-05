import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Header</h3>
      <button className="btn">mai hu button</button>
    </div>
  );
};

export default Header;
