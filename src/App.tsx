import styles from './App.module.css';
import iconArrow from '../images/icon-arrow.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ipAddressSearch, setIpAddressSearch] = useState<string>();

  const [ipAddress, setIpAddress] = useState<string>('');
  const [location , setLocation] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');
  const [isp, setIsp] = useState<string>('');

  const searchIpAddress = async () => {
    await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_IP_API_KEY}&ipAddress=${ipAddressSearch}`)
      .then((response) => {
        setIpAddress(response.data.ip);
        setLocation(response.data.location.region + ', ' + response.data.location.country)
        setTimezone(response.data.location.timezone)
        setIsp(response.data.isp);

      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    const getIpAddress = async () => {
      await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_IP_API_KEY}`)
        .then((response) => {
          setIpAddress(response.data.ip);
          setLocation(response.data.location.region + ',' + response.data.location.country)
          setTimezone(response.data.location.timezone)
          setIsp(response.data.isp);
  
        })
        .catch((error) => {
          console.error(error);
        });
    }

    getIpAddress();
  }, []);


  return (
    <>
    <header className={styles.header}>
      <h2 className={styles.header__title}>IP Address Tracker</h2>

      <div className={styles.search}>
        <input type="string" className={styles.search__input} value={ipAddressSearch} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIpAddressSearch(e.target.value)}/>
        <button className={styles.search__button} onClick={searchIpAddress}>
          <img src={iconArrow} alt="Search IP" />
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.info__card}>
          <h6>Ip Address</h6>
          <h3>{ipAddress}</h3>
        </div>

        <div className={styles.divider}></div>
        
        <div className={styles.info__card}>
          <h6>Location</h6>
          <h3>{location}</h3>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.info__card}>
          <h6>Timezone</h6>
          <h3>UTC {timezone}</h3>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.info__card}>
          <h6>Isp</h6>
          <h3>{isp}</h3>
        </div>
      </div>

    </header>
    </>
  )
}

export default App
