import styles from "../Header/Header.module.css";

function Header() {
  return (
    <>
      <h1 className={styles.heading}>
        <span className={styles.light}>Weather</span> App
      </h1>
    </>
  );
}

export default Header;
