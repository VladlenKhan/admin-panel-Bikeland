import styles from "./Tel.module.css";

const Tel = () => {
  return (
    <div className={styles.block}>
      <p className={styles.title}>Контактные данные</p>
      <div className={styles.list}>
        <div className={styles.list__item}>
            <div className={styles.img}>
                <img src="/tel.svg" alt="" />
            </div>
            <p className={styles.text}>Номер телефона</p>
            <div className={styles.num}>+998 55 500-60-01</div>
        </div>
        <div className={styles.list__item}>
            <div className={styles.img}>
                <img src="/tel.svg" alt="" />
            </div>
            <p className={styles.text}>Номер телефона</p>
            <div className={styles.num}>+998 93 621-60-01</div>
        </div>
        <div className={styles.list__item}>
            <div className={styles.img}>
                <img src="/mail.svg" alt="" />
            </div>
            <p className={styles.text}>Почта</p>
            <div className={styles.num}>info@bikeland.uz</div>
        </div>
        <div className={styles.list__item}>
            <div className={styles.img}>
                <img src="/tg.svg" alt="" />
            </div>
            <p className={styles.text}>Телеграм консультант</p>
            <div className={styles.num}>telegraph.com</div>
        </div>
      </div>
    </div>
  );
};

export default Tel;
