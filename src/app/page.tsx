import styles from "./page.module.css";
import Loginpage from "./dashboard/page";


export default function Home() {
  return (
    <div className={styles.page}>
      <Loginpage/>
    </div>
  );
}
