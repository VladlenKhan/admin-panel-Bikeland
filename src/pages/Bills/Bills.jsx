import styles from "./Bills.module.css";
import { Block, Navbar, Sidebar } from "../../components";
import { Bill, BillNew } from "../../components/UI";
const Bills = () => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.block}>
        <Navbar />
        <div className={styles.bills}>
          <Bill />
          <Bill />
          <Bill />
          <Bill />
          <Bill />
          <Bill />
          <Bill />
          <Bill />
          <Bill />
          <BillNew/>
        </div>
      </div>
    </main>
  );
};

export default Bills;
