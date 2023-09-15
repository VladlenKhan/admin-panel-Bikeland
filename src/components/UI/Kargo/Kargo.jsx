import styles from "./Kargo.module.css";

const Kargo = () => {
  return (
    <div className={styles.block}>
      <div className={styles.box1}>
        <p className={styles.title1}>Доставка</p>
        <div className={styles.wrap}>
          <p className={styles.subtitle}>Заголовок:</p>
          <div className={styles.elem1}>Доставим в любую точку Узбекистана</div>
        </div>
        <div className={styles.wrap}>
          <p className={styles.subtitle}>Подзаголовок:</p>
          <div className={styles.elem2}>
            Мы бренд "Bikeland.uz" на рынке более 8 лет и ежедневно отправляем
            мото-технику по регионам нашей родины. Доставим от 150 тысяч сум до
            вашего дома или города. Для крупных партий обращайтесь к нам:
            info@bikeland.uz или +998555006001
          </div>
        </div>
      </div>
      <div className={styles.box2}>
        <p className={styles.title1}>Доставка</p>
        <div className={styles.wrap}>
            <p className={styles.subtitle}>Фотографии:</p>
            <div className={styles.images}>
                <div className={styles.images__elem}>
                <div><img src="/bike.png" alt="" /></div>
                <div><img src="/bike.png" alt="" /></div>
                <div><img src="/bike.png" alt="" /></div>
                <div><img src="/bike.png" alt="" /></div>
                </div>
                <div className={styles.images__elem}>
                <div><img src="/bike.png" alt="" /></div>
                <div><img src="/bike.png" alt="" /></div>
                <div><img src="/bike.png" alt="" /></div>
                <div><img src="/bike.png" alt="" /></div>
                </div>
            </div>
        </div>
        <div className={styles.contain}>
            <button className={styles.button1}>Загрузить</button>
            <button className={styles.button2}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default Kargo;
