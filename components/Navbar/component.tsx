import Link from 'next/link';
//COMPONENTS
import BurgerMenuSVG from '../SVGIcons/BurgerMenuSVG';
import DarkModeSVG from '../SVGIcons/DarkModeSVG';
//STYLES
import styles from './styles.module.scss';

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <h3 className={styles.navbarLogo}>
                A handyman in Newcastle
            </h3>
            <ul className={styles.navbarActions}>
                <DarkModeSVG height="25px" width="25px" fill="red" />
                <Link href="/work">Our Work</Link>
                <Link href="/contact">
                    <button className="btn primary">
                        Contact Us
                    </button>
                </Link>
            </ul>
            <BurgerMenuSVG height='20px' width='20px' fill="red" />
        </nav>
    );
}

export default Navbar;