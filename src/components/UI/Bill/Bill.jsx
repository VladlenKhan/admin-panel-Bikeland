import styles from "./Bill.module.css";

const Bill = () => {
  return (
    <div className={styles.block}>
      <p className={styles.block__title}>Счет 1</p>
      <div className={styles.block__number}>8600 6066 6066 6066</div>
      <div className={styles.block__text}>Юсупов Саидакбар Талатович</div>
      <button className={styles.button}>
        <p className={styles.button__text}>Редактировать</p>
        <img src="/pen.svg" alt="icon" />
      </button>
    </div>
  );
};

export default Bill;
