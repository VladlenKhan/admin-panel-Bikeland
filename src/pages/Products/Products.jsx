import { CardMoto } from '../../components/UI';
import styles from './Products.module.css';
import { Block, Navbar, Sidebar } from "../../components";
const Products = () => {
    return ( 
        <main className={styles.main}>
        <Sidebar />
        <div className={styles.block}>
          <Navbar />
          <Block />
          <div className={styles.products}>
            <CardMoto/>
            <CardMoto/>
            <CardMoto/>
            <CardMoto/>
            <CardMoto/>
            <CardMoto/>
          </div>
        </div>
      </main>
     );
}
 
export default Products;