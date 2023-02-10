//STYLES
import styles from './styles.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerLeft}>
        <h1>Test Left</h1>
      </div>
      <div className={styles.bannerRight}>
        <h1>Test right</h1>
      </div>
    </section>
  );
}

export default Banner;