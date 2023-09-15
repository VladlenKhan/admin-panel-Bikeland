import styles from "./Links.module.css";

const Links = () => {
  return (
    <div className={styles.list}>
      <div className={styles.list__item}>
        <div className={styles.img}>
          <img src="/payme.png" alt="" />
        </div>
        <div className={styles.list__block}>
          <div className={styles.text}>PayMe</div>
          <button className={styles.button}>
            <img src="/bin.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.list__item}>
        <div className={styles.img}>
          <img src="/apelsin.png" alt="" />
        </div>
        <div className={styles.list__block}>
          <div className={styles.text}>Apelsin</div>
          <button className={styles.button}>
            <img src="/bin.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.list__item}>
        <div className={styles.img}>
          <img src="/click.png" height="39px" alt="" />
        </div>
        <div className={styles.list__block}>
          <div className={styles.text}>Click</div>
          <button className={styles.button}>
            <img src="/bin.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.plus}>
        <img src="/plusblack.svg" alt="" />
      </div>
    </div>
  );
};

export default Links;
