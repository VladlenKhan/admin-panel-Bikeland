import { Filter , Plus, SearchInput, Servant, Sort, Worker } from '../UI'; 
import styles from './Block.module.css';

const Block = () => {
    return ( 
        <div className={styles.block}>
            <Servant/>
            <Filter/>
            <Sort/>
             
        </div>
     );
}
 
export default Block;