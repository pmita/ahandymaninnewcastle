import Link from 'next/link';
import { useEffect, useState } from 'react';
//COMPONENTS
import BurgerMenuSVG from '../SVGIcons/BurgerMenuSVG';
import DarkModeSVG from '../SVGIcons/DarkModeSVG';
//STYLES
import styles from './styles.module.scss';

const Navbar = () => {
    // STATE
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // EVENT HANDLERS
    const onClick = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    // USE EFFECTS
    useEffect(() => {
        setIsNavbarOpen(false);
    }, []);

    return(
        <nav className={styles.navbar}>
            <h4 className={styles.navbarLogo}>
                A handyman in Newcastle
            </h4>
            <ul 
                className={isNavbarOpen 
                    ?`${styles.navbarActions} ${styles.active}` 
                    : `${styles.navbarActions}`
                }
            >
                <div className={styles.darkmodeIcon}>
                    <DarkModeSVG height="25px" width="25px" fill="black" />
                </div>
                <Link href="/work">Our Work</Link>
                <Link href="/contact">
                    <button className="btn primary">
                        Contact Us
                    </button>
                </Link>
            </ul>
            <div className={styles.burgerIcon} onClick={onClick}>
                <BurgerMenuSVG height='20px' width='20px' fill="black"/>
            </div>
        </nav>
    );
}

export default Navbar;