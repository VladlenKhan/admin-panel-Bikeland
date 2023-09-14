import { Block, Navbar, Sidebar , Wrapper } from "../../components";
import styles from "./Main.module.css";

const Main = () => {
  return (
    
      <main className={styles.main}>
        <Sidebar />
        <div className={styles.block}>
        <Navbar />
        <Block/>
        </div>
      </main>

     
  );
};

export default Main;