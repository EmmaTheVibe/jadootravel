/* eslint-disable @next/next/no-img-element */
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <h1>Jadoo.</h1>
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          <div className={styles.reach}>
            <div className={styles.line}>
              <p className={styles.title}>Company</p>
              <div className={styles.options}>
                <p>About</p>
                <p>Careers</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className={styles.line}>
              <p className={styles.title}>Contact</p>
              <div className={styles.options}>
                <p>Help/FAQ</p>
                <p>Press</p>
                <p>Affiliates</p>
              </div>
            </div>
            <div className={styles.line}>
              <p className={styles.title}>More</p>
              <div className={styles.options}>
                <p>Airline fees</p>
                <p>Airline</p>
                <p>Low fare tips</p>
              </div>
            </div>
          </div>
          <div className={styles.media}>
            <div className={styles.socials}>
              <div className={styles.social}>
                <img src="./images/fb.svg" alt="icon" />
              </div>
              <div className={`${styles.social} ${styles.socialIg}`}>
                <img src="./images/ig.svg" alt="icon" />
              </div>
              <div className={styles.social}>
                <img src="./images/twitter.svg" alt="icon" />
              </div>
            </div>
            <p className={styles.discover}>Discover our app</p>
            <div className={styles.downloadBox}>
              <div className={styles.download}>
                <img src="./images/google.svg" alt="icon" />
                <div className={styles.line}>
                  <p className={styles.top}>Get it on</p>
                  <p className={styles.bottom}>Google Play</p>
                </div>
              </div>
              <div className={styles.download}>
                <img src="./images/apple.svg" alt="icon" />
                <div className={styles.line}>
                  <p className={styles.top}>Available on</p>
                  <p className={styles.bottom}>Apple Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.cpy}>All rights reserved@jadoo.co</p>
      </div>
    </section>
  );
}
