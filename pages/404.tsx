import Link from 'next/link';
// STYLES
import styles from '../styles/pages/contactPage.module.scss';

const FourOhFour = () => {
    return (
        <div className={styles.fourohFourPage}>
            <h1>404 -Page not Found!</h1>

            <Link href="/">Go Back</Link>
        </div>
    );
}

export default FourOhFour;