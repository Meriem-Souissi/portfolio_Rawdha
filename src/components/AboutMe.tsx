import React from "react";
import styles from "./../app/page.module.css";
import VerticalLine from "./VerticaleLine";
import CvCard from "./CvCard";

function AboutME() {
  const aboutMeArray = [
    {
      mission: "مدقق لغوي، عضو هيئة تحرير بمجلة أفنان الإلكترونية",
      tasks:
        "تدقيق لغوي, إعادة صياغة وتقييم المقالات وتحديد إن كانت تستوفي شروط القبول",
      date: "2020-2017"
    },
    {
      mission: "مدقق لغوي، عضو هيئة تحرير بمجلة سراج الأحرار الإلكترونية",
      tasks:
        "تدقيق لغوي للكتب،تعديل التراكيب،إعادة صياغة الجمل وإصلاح علامات الترقيم",
      date: "2021-2020"
    },
    {
      mission: "مدقق لغوي بمركز نماء للبحوث والدراسات",
      tasks:
        "تدقيق لغوي للكتب،تعديل التراكيب،إعادة صياغة الجمل وإصلاح علامات الترقيم",
      date: "2020-2017"
    },
    {
      mission: "مدقق لغوي، بوب ليبريس",
      tasks:
        "تدقيق لغوي للكتب،تعديل التراكيب،إعادة صياغة الجمل وإصلاح علامات الترقيم",
      date: "2024-2019"
    }
  ];
  return (
    <div className={styles.about_me_container}>
      <h1>سيرتي الذاتية</h1>
      <VerticalLine />
      <div className={styles.about_me_content}>
        {aboutMeArray.map((elt, index) => (
          <CvCard key={index} item={elt} />
        ))}
      </div>
    </div>
  );
}

export default AboutME;
