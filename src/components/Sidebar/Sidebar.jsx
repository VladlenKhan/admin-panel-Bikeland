import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__img}>
                <img src="/bikelandlogo.svg" alt="logo" />

            </div>

            <ul className={styles.list}>
                <li className={`${styles.list__item} ${styles.list__item_active}`}>
                    <img src="/icon1.svg" alt="icon" /> <p>Статистика по показам</p>
                </li>
                <li className={styles.list__item}>
                    <img src="/icon1.svg" alt="icon" /> <p>Статистика по заказам</p>
                </li>
                <li className={styles.list__item}>
                    <img src="/icon2.svg" alt="icon" /> <p>Блоки</p>
                </li>
                <li className={styles.list__item}>
                    <img src="/icon3.svg" alt="icon" /> <p>Страницы</p>
                </li>
                <li className={styles.list__item}>
                    <img src="/icon4.svg" alt="icon" /> <p>Товары</p>
                </li>
                <li className={styles.list__item}>
                    <img src="/icon5.svg" alt="icon" /> <p>Заявки/Звонки</p>
                </li>
                <li className={styles.list__item}>
                    <img src="/icon6.svg" alt="icon" /> <p>Сотрудники</p>
                </li>
                <li className={styles.list__item}>
                    <img src="/icon7.svg" alt="icon" /> <p>Счета</p>
                </li>
            </ul>
        </aside>
      );
}
 
export default Sidebar;