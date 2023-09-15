import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.block}>
      <p className={styles.title}>Логотип</p>
      <div className={styles.img}>
        <img src="/bikelogo.svg" alt="" />
      </div>
      <p className={styles.text}>
        Размер логотипа не меньше 470х100 <br /> и не больше 940х200. <br /> Формат логотипа:
        svg, png
      </p>
      <button className={styles.button}>Загрузить</button>
    </div>
  );
};

export default Logo;
