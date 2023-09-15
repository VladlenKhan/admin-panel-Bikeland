import styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.block}>
      <p className={styles.title}>Социальные сети</p>
      <div className={styles.social}>
        <div className={styles.social__elem}>
          <div className={styles.img}>
            <img src="/facebook.svg" alt="" />
          </div>
          <p className={styles.text1}>Facebook</p>
          <p className={styles.text2}>ссылка:</p>
          <div className={styles.link}>www.facebook.com/bikelanduz</div>
        </div>

        <div className={styles.social__elem}>
          <div className={styles.img}>
            <img src="/instagram.svg" alt="" />
          </div>
          <p className={styles.text1}>Instagram</p>
          <p className={styles.text2}>ссылка:</p>
          <div className={styles.link}>www.facebook.com/bikelanduz</div>
        </div>

        <div className={styles.social__elem}>
          <div className={styles.img}>
            <img src="/youtube.svg" alt="" />
          </div>
          <p className={styles.text1}>Youtube</p>
          <p className={styles.text2}>ссылка:</p>
          <div className={styles.link}>www.facebook.com/bikelanduz</div>
        </div>

        <div className={styles.social__elem}>
          <div className={styles.img}>
            <img src="/telegram.svg" alt="" />
          </div>
          <p className={styles.text1}>Telegram</p>
          <p className={styles.text2}>ссылка:</p>
          <div className={styles.link}>www.facebook.com/bikelanduz</div>
        </div>
 
      
         
      </div>
    </div>
  );
};

export default Social;