import React from "react";
import styles from "./../app/page.module.css";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";
import book5 from "../assets/images/book5.jpg";
import book6 from "../assets/images/book6.jpg";
import book7 from "../assets/images/book7.jpg";
import book8 from "../assets/images/book8.jpg";
import book9 from "../assets/images/book9.jpg";
import book10 from "../assets/images/book10.jpg";
import book11 from "../assets/images/book11.jpg";
import BookCard from "./BookCard";

function MyWork() {
  const myWorkArray = [
    {
      image: book1,
      title: "book1",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book2,
      title: "book1",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book3,
      title: "book1",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book4,
      title: "book1",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book5,
      title: "book1",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book6,
      title: "book6",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book7,
      title: "book7",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book8,
      title: "book8",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book9,
      title: "book9",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book10,
      title: "book10",
      author: "book1 book1",
      publish: "book1 book1"
    },
    {
      image: book11,
      title: "book11",
      author: "book1 book1",
      publish: "book1 book1"
    }
  ];
  return (
    <div className={styles.my_work_container}>
      {/* <div className={styles.my_work_title_container}> */}
      <h1 className={styles.my_work_title}>أعمالي</h1>
      {/* </div> */}
      <div className={styles.book_cards_container}>
        {myWorkArray.map((elt, index) => (
          <BookCard key={index} book={elt} />
        ))}
      </div>
    </div>
  );
}

export default MyWork;
