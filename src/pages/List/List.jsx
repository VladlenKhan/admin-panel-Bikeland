import { Dilers, Kargo } from '../../components/UI';
import styles from './List.module.css';
import { Block, Navbar, Sidebar } from "../../components";
const List = () => {
    return (
        <main className={styles.main}>
        <Sidebar />
        <div className={styles.block}>
          <Navbar />
          <Block />
          <div className={styles.list}>
            <Dilers/>
            <Kargo/>
          </div>
        </div>
      </main>
      );
}

export default List;