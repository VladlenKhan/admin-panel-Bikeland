import styles from './CardWorker.module.css';

const CardWorker = () => {
    return ( 
        <div className={styles.block}>
            <div className={styles.img}>
                <img src="/ava.svg" alt="" />
            </div>
            <div className={styles.title}>
            Юсупов Саидакбар Талатович
            </div>
            <div className={styles.text}>
                <div className={styles.text__1}>Сотрудник</div>
                <div className={styles.text__2}>+998 90 109 66 64</div>
            </div>
            <div className={styles.email}>
            saivels201116@gmail.com
            </div>
            <div className={styles.button1}>
                <p>Редактировать</p>
                <img src="/pen.svg" alt="" />
            </div>
            <div className={styles.button2}>
                <p>Закрыть доступ</p>
                <img src="/bin.svg" alt="" />
            </div>
        </div>  
     );
}
 
export default CardWorker;