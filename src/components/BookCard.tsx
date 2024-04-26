import Image from "next/image";
import React from "react";
import styles from "./../app/page.module.css";

type BookCardProps = {
  book: {
    image: any;
    title: string;
    author: string;
    publish?: string;
  };
};

function BookCard(props: BookCardProps) {
  return (
    <div className={styles.book_card}>
      <Image
        src={props.book.image}
        alt="book_image"
        quality={100}
        className={styles.book_image}
      />

      <div className={styles.book_infos}>
        <h4 className={styles.book_title}>{props.book.title}</h4>
        <h6 className={styles.book_author}>{props.book.author}</h6>
      </div>

      {/* <p>{props.book.publish}</p> */}
    </div>
  );
}

export default BookCard;
