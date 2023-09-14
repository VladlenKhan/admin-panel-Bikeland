import styles from './Employee.module.css';
import { Block, Navbar, Sidebar } from "../../components";
import { CardWorker } from '../../components/UI';
const Employee = () => {
    return ( 
        <main className={styles.main}>
        <Sidebar />
        <div className={styles.block}>
        <Navbar />
        <Block/>
        <div className={styles.cards}>
        <CardWorker/>
        <CardWorker/>
        <CardWorker/>
        <CardWorker/>
        <CardWorker/>
        <CardWorker/>
        <CardWorker/>
        <CardWorker/>
        <CardWorker/>
        <CardWorker/>
        </div>
        </div>
      </main>

     );
}
 
export default Employee;