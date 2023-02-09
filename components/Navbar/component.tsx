//STYLES
import styles from './styles.module.scss';

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <h3 className={styles.navbarLogo}>A handyman in Newcastle</h3>
        </nav>
    );
}

export default Navbar;