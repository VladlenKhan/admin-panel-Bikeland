import styles from "./Dilers.module.css";

const Dilers = () => {
  return (
    <div className={styles.block}>
      <p className={styles.title}>Дилеры</p>
      <div className={styles.list}>
        <div className={styles.list__item}>
          <div className={styles.img}>
            <img src="/minmap.png" alt="" />
          </div>
          <p className={styles.text}>Шоурум в Ташкенте</p>
          <div className={styles.buttons}>
            <button className={styles.button1}>
              <p>Редактировать</p> <img src="/pen.svg" alt="" />
            </button>
            <button className={styles.button2}>
              <img src="/bin.svg" alt="" />
            </button>
          </div>
        </div>


        <div className={styles.list__item}>
          <div className={styles.img}>
            <img src="/minmap.png" alt="" />
          </div>
          <p className={styles.text}>Шоурум в Ташкенте</p>
          <div className={styles.buttons}>
            <button className={styles.button1}>
              <p>Редактировать</p> <img src="/pen.svg" alt="" />
            </button>
            <button className={styles.button2}>
              <img src="/bin.svg" alt="" />
            </button>
          </div>
        </div>

        <div className={styles.list__plus}>
            <img src="/plusblack.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dilers;
