import React from "react";
import my_photo from "../assets/images/me.jpg";
import bg_banner from "../assets/images/bg-banner.jpg";
import Image from "next/image";
import styles from "./../app/page.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div>
        <Image
          src={bg_banner}
          alt="bg_banner"
          quality={100}
          className={styles.img_under_banner}
        />
        <Image
          src={my_photo}
          alt="my_photo"
          quality={100}
          width={320}
          className={styles.img_over_banner}
        />
      </div>

      <div>
        <div className={styles.banner_infos_container}>
          <h1 className={styles.banner_infos_title}>روضة ابن عمر</h1>
          <p className={styles.banner_infos_description}>
            مرحبا، أنا روضة بن عمر مدقّقة لغويّة تونسيّة، عندي خبرة أربع سنوات
            كمدقّق لغويّ سواء مع دور نشر أو بشكل حرّ وشغلت سابقا منصب عضو مكتب
            تحرير في مجلّتَي أفنان وسراج الأحرار. لديّ شغف باللّغة ومعرفة واسعة
            بعلومها وعين صيّادة للأخطاء ومخّ حسّاس لها. آخذ عملي بجدّيّة وأحترم
            آجال التّسليم ولا أكتفي باصطياد الأخطاء بل أقترح تحسينات وإعادة
            صياغة فأنا أعتبر خروج العمل في أحسن صورة وأرقى تعبير مسؤوليّتي
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
