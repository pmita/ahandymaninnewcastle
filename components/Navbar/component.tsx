import Link from 'next/link';
import { useState } from 'react';
//COMPONENTS
import BurgerMenuSVG from '../SVGs/BurgerMenuSVG';
import DarkModeSVG from '../SVGs/DarkModeSVG';
//STYLES
import styles from './styles.module.scss';

const Navbar = () => {
    // STATE
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // EVENT HANDLERS
    const onClick = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    const closeNavbar = (e: any) => {
        setIsNavbarOpen(false);
    }

    return(
        <nav className={styles.navbar}>
            <h4 className={styles.navbarLogo}>
                <Link href="/">A Handyman in Newcastle</Link>
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
                <div onClick={closeNavbar}>
                    <Link href="/work">Our Work</Link>
                </div>
                <button className="btn secondary" onClick={closeNavbar}>
                    <Link href="/contact">Contact Us</Link>
                </button>
            </ul>
            <div className={styles.burgerIcon} onClick={onClick}>
                <BurgerMenuSVG height='20px' width='20px' fill="black"/>
            </div>
        </nav>
    );
}

export default Navbar;