import styles from './OrderStatus.module.css';
import { Block, Navbar, Sidebar } from "../../components";
import { Logo, Payments, Social, Tel } from '../../components/UI';
const OrderStatus = () => {
    return (  
        <main className={styles.main}>
        <Sidebar />
        <div className={styles.block}>
          <Navbar />
          <Block />
          <div className={styles.list}>
            <Social/>
            <div className={styles.list__block}>
                <Payments/>
                <Logo/>
            </div>
            <Tel/>
          </div>
        </div>
      </main>
    );
}
 
export default OrderStatus;