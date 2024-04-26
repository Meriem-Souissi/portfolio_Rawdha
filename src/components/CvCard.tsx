import React from "react";
import styles from "./../app/page.module.css";

type CvCardProps = {
  item: {
    mission: string;
    tasks: string;
    date: string;
  };
};

function CvCard(props: CvCardProps) {
  return (
    <div className={styles.cv_card_content}>
      <h3 className={styles.cv_card_title}>{props.item.mission}</h3>
      <p className={styles.cv_card_date}>{props.item.date}</p>
      <p className={styles.cv_card_tasks}>{props.item.tasks}</p>
    </div>
  );
}

export default CvCard;
