import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <form className={styles.form}> 
        <input className={styles.input} type="text" placeholder="Искать по названию товара"/>
        <button className={styles.button}><img src="/search.svg" alt="icon" /></button>
     
    </form>
  );
};

export default SearchInput;
