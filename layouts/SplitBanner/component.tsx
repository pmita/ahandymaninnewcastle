import Link from 'next/link';
//COMPONENTS
import BannerContent from '../../components/BannerContent';
import BannerImage from '../../components/BannerImage';
import Button from '../../components/Button';
//STYLES
import styles from './styles.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <BannerContent>
          <h1>We paint, we build, and we fix all your problems</h1>
          <h3>Affordable solutions to common problems, with a unique customer experience for everyday households</h3>
          <div className={styles.callToActionButtons}>
            <Button className="btn primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button className="btn secondary">
              <Link href="/work">Check our Work</Link>
            </Button>
          </div>
      </BannerContent>
      <BannerImage imageUrl="/assets/images/PaintBrush.jpg"/>
    </section>
  );
}

export default Banner;