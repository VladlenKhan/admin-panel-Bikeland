import styles from './Orders.module.css';
import { Block, Navbar, Sidebar } from "../../components";
import { Order } from '../../components/UI';
const Orders = () => {
    return ( 
        <main className={styles.main}>
        <Sidebar />
        <div className={styles.block}>
          <Navbar />
          <Block />
          <div className={styles.orders}>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
          </div>
        </div>
      </main>
     );
}
 
export default Orders;