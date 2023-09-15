import styles from './Payments.module.css';
import { Links, Upload } from './components';

const Payments = () => {
    return ( 
        <div className={styles.block}>
            <p className={styles.title}>
                Способы оплаты
            </p>
            <Links/>
        </div>
     );
}
 
export default Payments;