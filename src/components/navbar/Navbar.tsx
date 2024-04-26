import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.top_navbar}>
        تعلموا اللغة العربية، وفنون العربية، فإنها تحفظ اللسان وتثبت العقل
      </div>
      {/* <div className={styles.bottom_navbar}> bottom navbar</div> */}
    </>
  );
}

export default Navbar;
