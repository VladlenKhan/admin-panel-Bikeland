import styles from './CardMoto.module.css';

const CardMoto = () => {
    return ( 
        <div className={styles.block}>
            <div>
                <img src="/motoback.png" alt="" />
            </div>
            <p className={styles.text}>Ducati Panigale Superleggera V4</p>
            <div className={styles.elem1}>
                <div className={styles.elem1__text1}>200 880 000 UZS</div>
                <div className={styles.elem1__text2}>1</div>
            </div>
            <div className={styles.elem2}>
                <div className={styles.elem2__text1}>Ducati</div>
                <div className={styles.elem2__text2}>Bikeland.uz</div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button1}><p>Редактировать</p> <img src="/pen.svg" alt="" /></button>
                <button className={styles.button2}><img src="/upload.svg" alt="" /></button>
            </div>
        </div>
     );
}
 
export default CardMoto;