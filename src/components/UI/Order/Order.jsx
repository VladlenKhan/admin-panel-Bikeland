import styles from './Order.module.css';

const Order = () => {
    return ( 
        <div className={styles.block}>
            <p className={styles.block__title}>Номер заказа: #000011111</p>
            <div className={styles.block__text1}>Имя клиента</div>
            <div className={styles.elem}>
                <div className={styles.elem__text1}>+998 90 109 66 64</div>
                <div className={styles.elem__text2}>Ташкент</div>
            </div>
            <div className={styles.block__text2}>Посоветовали друзья, Instagram</div>
            <div className={styles.block__text3}>Ducati Panigale Superleggera V4</div>
            <div className={styles.elem2}>
                <div className={styles.elem2__text1}>200 880 000 UZS</div>
                <div className={styles.elem2__text2}>1</div>
            </div>
            <div className={styles.elem3}>
                <div className={styles.elem3__text1}>Ducati</div>
                <div className={styles.elem3__text2}>Bikeland.uz</div>
            </div>
          
            <button  className={styles.button}>Начать чат</button>
           
        </div>
     );
}
 
export default Order;