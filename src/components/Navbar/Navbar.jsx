import styles from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className={styles.nav}>
             <div className={styles.images}>
                <div>
                    <img src="/icon8.svg" alt="icon" />
                </div>
                <div>
                    <img src="/icon9.svg" alt="icon" />
                </div>
             </div>
        </nav>
     );
}
 
export default Navbar;