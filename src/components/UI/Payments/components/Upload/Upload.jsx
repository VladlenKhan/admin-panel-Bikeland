import styles from "./Upload.module.css";

const Upload = () => {
  return (
    <div className={styles.block}>
      <div className={styles.elem}>
        <div>
          <img src="/plusblack.svg" alt="" />
        </div>
        <p>
          Нажмите сюда, чтобы выбрать логотип из компьютера или перетащите сюда
        </p>
      </div>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Наименование*" />
        <div className={styles.buttons}>
            <button className={styles.button1}>Готово</button>
            <button className={styles.button2}>Отменить</button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
