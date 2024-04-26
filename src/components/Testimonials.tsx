import React from "react";
import styles from "./../app/page.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      userName: "الكاتبة عبير مزاح",
      message:
        "أنا عبير مزاح كاتبة ومنتجة سلسلة مختلفون. لقد تعاملت مع الآنسة روضة بن عمر التي قامت بالتدقيق اللغوي لمجموعتي القصصية. أحببت كثيرا طريقتها في التعامل مع النص واحترامها للنص الأصلي مع تقديم مقترحات بنّاءة. التعامل مع روضة جيد جدا ومريح فهي تقوم بعملها بآجال جيدة جدا وتقوم به بإتقان. أشجع التعامل معها وأتمنى لها مستقبلا زاهرا"
    },
    {
      id: 2,
      userName: "سامي المقدّم، كاتب وصاحب دار بوب ليبريس للنّشر",
      message:
        "روضة بن عمر مدققة ممتازة وجديّة وتحترم مواعيد تسليم الأعمال رغم الآجال الضيقة. بالإضافة إلى التدقيق اللغوي المحكم، هي تضيف اقتراحات لتبسيط أو تطوير التراكيب، كما أن تتبّع عملها واضح بفضل تلوين كل التصويبات والاقتراحات. تجربة التدقيق اللغوي مع روضة إضافة حقيقية لدار النشر، ومكسب جعلها تفرض نفسها بنصوص خالية من الشوائب في مكتبة القارئ العربي"
    }
  ];
  return (
    <div className={styles.testimonials_wrapper}>
      <h1 className={styles.testimonials_title}>ردود فعل</h1>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className={styles.testimonial_message}>
              <p>{testimonial.message}</p>
            </div>

            <h6 className={styles.testimonial_userName}>
              {testimonial.userName}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
