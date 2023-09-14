import styles from './Worker.module.css';

const Worker = () => {
    return ( 
        <div className={styles.block}>
            <div className={styles.block__img}>
                <img src="/box.svg" alt="" />
            </div>
            <div className={styles.text}>
                <p>Выдача работников</p>
                <p>до 10 шт.</p>
            </div>
            <div className={styles.arrow}>
                <img src="/icon10.svg" alt="" />
            </div>
        </div>
     );
}
 
export default Worker;