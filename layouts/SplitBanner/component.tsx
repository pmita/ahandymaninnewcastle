//COMPONENTS
import BannerContent from '../../components/BannerContent';
import BannerImage from '../../components/BannerImage';
//STYLES
import styles from './styles.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <BannerContent>
          <h1>We paint, we build, and we fix all your problems</h1>
          <h3>Affordable solutions to common problems, with a unique customer experience for everyday households</h3>
          <div className={styles.callToActionButtons}>
            <button className="btn primary">Get in Touch</button>
            <button className="btn secondary">Check our Work</button>
          </div>
      </BannerContent>
      <BannerImage imageUrl="/assets/images/PaintBrush.jpg"/>
    </section>
  );
}

export default Banner;