import styles from "./page.module.css";
import Banner from "@/components/Banner";
import About_me from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import MyWork from "@/components/MyWork";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <About_me />
      <Testimonials />
      <MyWork />
    </main>
  );
}
