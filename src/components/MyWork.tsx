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
import book12 from "../assets/images/book12.jpg";
import book13 from "../assets/images/book13.jpg";
import book14 from "../assets/images/book14.jpg";
import BookCard from "./BookCard";

function MyWork() {
  const myWorkArray = [
    {
      image: book1,
      title: "أرض الوعود",
      author: "علاء الفرشيشي"
      // publish: "book1 book1"
    },
    {
      image: book2,
      title: "إنسومنيا",
      author: "طارق اللموشي"
      // publish: "book1 book1"
    },
    {
      image: book3,
      title: "ديمنسيا",
      author: "طارق اللموشي"
      // publish: "book1 book1"
    },
    {
      image: book4,
      title: "سارقة الورد",
      author: "معز نعيجة"
      // publish: "book1 book1"
    },
    {
      image: book5,
      title: "قصة عشق في الزمن الضائع",
      author: "معز نجيمة"
      // publish: "book1 book1"
    },
    {
      image: book6,
      title: "حكايات نور القمر",
      author: "مجموعة من المؤلفين التونسيين"
      // publish: "book1 book1"
    },
    // {
    //   image: book7,
    //   title: "",
    //   author: "book1 book1",
    //   publish: "book1 book1"
    // },
    // {
    //   image: book8,
    //   title: "book8",
    //   author: "book1 book1",
    //   publish: "book1 book1"
    // },
    // {
    //   image: book9,
    //   title: "book9",
    //   author: "book1 book1",
    //   publish: "book1 book1"
    // },
    {
      image: book10,
      title: "مجموعة قصصية للأطفال",
      author: "عبير مزاح"
      // publish: "book1 book1"
    },
    {
      image: book11,
      title: "أفان",
      author: "علاء الفرشيشي"
      // publish: "book1 book1"
    },
    {
      image: book12,
      title: "إشكل",
      author: "إيناس العباسي"
      // publish: "book1 book1"
    },
    {
      image: book13,
      title: "في مكان ما",
      author: "أنيس الوهابي"
      // publish: "book1 book1"
    },
    {
      image: book14,
      title: "في متهات متون علي الدوعاجي",
      author: "ضياء بوسالمي"
      // publish: "book1 book1"
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
