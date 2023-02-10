//STYLES
import styles from './styles.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerLeft}>
        <h2>We paint, we build, and we fix all your problems</h2>
        <h4>Affordable solutions to common problems, with a unique customer experience for everyday households</h4>
        <div className={styles.callToActionButtons}>
          <button className="btn primary">Get in Touch</button>
          <button className="btn secondary">Check our Work</button>
        </div>
      </div>
      <div className={styles.bannerRight}>
        <h1>Test right</h1>
      </div>
    </section>
  );
}

export default Banner;