import styles from './Servant.module.css';

const Servant = () => {
    return ( 
        <div className={styles.block}>
        <div className={styles.block__img}>
            <img src="/worker.svg" alt="" />
        </div>
       <div className={styles.block__text}>
        <div className={styles.box}>
            <div className={styles.box__text}>Сотрудники</div>
            <div className={styles.box__circle}></div>
        </div>
        <div className={styles.text}>Нажмите на круг, чтобы поменять</div>
       </div>
    </div>
     );
}
 
export default Servant;