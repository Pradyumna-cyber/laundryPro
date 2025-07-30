import Image from "next/image";
import styles from "./page.module.css";
import Loginpage from "./Dashboard/page";


export default function Home() {
  return (
    <div className={styles.page}>
      <Loginpage/>
    </div>
  );
}
