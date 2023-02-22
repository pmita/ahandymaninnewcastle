import Link from 'next/link';
//COMPONENTS
import Button from '../../components/Button';
//STYLES
import styles from './styles.module.scss';

const AboutUsSection = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.bannerImage} />
      <div className={styles.bannerContext}>
        <div className={styles.bannerWrapper}>
          <h1>Who are we?</h1>
          <h3>
            A father and son duo. My dad bring the skills and plan;
            I bring the attitude and tech savy-ness into this business.
            We started by helping out neighboors and friends but after building
            a reputation we wanted to expand since we know 
            how hard it is to find the right for job, person.
          </h3>
          <div className={styles.callToAction}>
            <Button className="btn secondary">
              <Link href="/work">Check our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;