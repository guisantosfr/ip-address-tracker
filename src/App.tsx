import styles from './App.module.css';
import iconArrow from '../images/icon-arrow.svg';

function App() {

  return (
    <>
    <header className={styles.header}>
      <h2 className={styles.header__title}>IP Address Tracker</h2>

      <div className={styles.search}>
        <input type="number" className={styles.search__input} />
        <button className={styles.search__button}>
          <img src={iconArrow} alt="Search IP" />
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.info__card}>
          <h6>Ip Address</h6>
          <h3>192.212.174.101</h3>
        </div>
        
        <div className={styles.info__card}>
          <h6>Location</h6>
          <h3>Brooklyn, NY 10001</h3>
        </div>

        <div className={styles.info__card}>
          <h6>Timezone</h6>
          <h3>UTC -05:00</h3>
        </div>

        <div className={styles.info__card}>
          <h6>Isp</h6>
          <h3>SpaceX Starlink</h3>
        </div>
      </div>

    </header>
    </>
  )
}

export default App
