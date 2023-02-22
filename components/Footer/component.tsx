import Link from 'next/link';
//COMPONENTS
import CoffeeMugSVG from '../SVGs/CoffeeMugSVG';
import FacebookSVG from '../SVGs/FacebookSVG';
import InstagramSVG from '../SVGs/InstagramSVG';
import PinSVG from '../SVGs/PinSVG';
//STYLES
import styles from './styles.module.scss';

const Footer = () => {
  return(
    <section className={styles.footer}>
      <h4 className={styles.footerTitle}>Feel free to reach out to our socials</h4>
      <div className={styles.footerSocials}>
        <Link 
          href="https://www.facebook.com/profile.php?id=100090766980709"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookSVG width="25px" height="25px" fill="#1E1E1E" />
        </Link>
        <Link 
          href="https://www.instagram.com/ahandymaninnewcastle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramSVG width="25px" height="25px" fill="#1E1E1E"/>
        </Link>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/about">About</Link>
        <Link href="/work">Our Work</Link>
        <Link href="/contact">Get in Touch</Link>
      </div>
      <div className={styles.floatingIconLeft}>
        <PinSVG width="175px" height="175px" fill="#1E1E1E" opacity='0.2'/>
      </div>
      <div className={styles.floatingIconRight}>
        <CoffeeMugSVG width="175px" height="175px" fill="#1E1E1E" opacity='0.2'/>
      </div>
    </section>
  );
}

export default Footer;