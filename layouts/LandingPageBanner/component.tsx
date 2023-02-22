import Link from 'next/link';
//COMPONENTS
import Button from '../../components/Button';
//STYLES
import styles from './styles.module.scss';

const LandingPageBanner = () => {
  return (
    <section className={styles.landingBanner}>
      <div className={styles.bannerContext}>
        <div className={styles.bannerWrapper}>
          <h1>We paint, we build, and we fix all your problems</h1>
          <h3>Home improvements and repairs at a reasonable price</h3>
          <div className={styles.callToAction}>
            <Button className="btn primary">
              <Link href="/contact">Hire Us</Link>
            </Button>
            <Button className="btn secondary">
              <Link href="/work">Check our Work</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.bannerImage} />
    </section>
  );
}

export default LandingPageBanner;