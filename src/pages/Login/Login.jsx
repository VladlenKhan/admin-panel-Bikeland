import { Wrapper } from '../../components';
import styles from './Login.module.css'; 
const Login = () => {
    return (
        <div className={styles.container}>
            
        <div className={styles.block}>
            <div className={styles.block__img}>
                <img src='/logo.png' alt="logo" />
            </div> 
            <form className={styles.form}>
                <input type="email" placeholder='Ваш e-mail' className={styles.form__input} />
                <input type="text"  placeholder='Ваш пароль' className={styles.form__input} />
                <button className={styles.form__button}>Войти</button>
            </form>
        </div>
            
        
    
        </div>
      );
}
 
export default Login;