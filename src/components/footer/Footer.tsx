import React from "react";
import styles from "./footer.module.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <h2>تواصل معنا</h2>
      <div className={styles.footer_infos}>
        <div className={styles.contact_info}>
          <h4> +216 23 207 594</h4>
          <PhoneEnabledIcon />
        </div>
        <div className={styles.contact_info}>
          <h4> +216 23 207 594</h4>
          <WhatsAppIcon />
        </div>
        <div className={styles.contact_info}>
          <h4>ben.amor.rawdha@gmail.com</h4>
          <AlternateEmailIcon />
        </div>
      </div>
      <p className={styles.copy_right}>جميع الحقوق محفوظة 2024</p>
    </div>
  );
};

export default Footer;
