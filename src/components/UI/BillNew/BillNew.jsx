import styles from './BillNew.module.css';

const BillNew = () => {
    return ( 
        <div className={styles.block}>
            <p className={styles.block__title}>Счет 2</p>
            <form className={styles.form}>
                <input type="password" placeholder='Номер карты' className={styles.form__input}/>
                <input type="text" placeholder='ФИО' className={styles.form__input}/>
                <button className={styles.form__button}><p>Добавить</p> <img src="/plus.svg" alt="icon" /></button>
            </form>
        </div>
     );
}
 
export default BillNew;