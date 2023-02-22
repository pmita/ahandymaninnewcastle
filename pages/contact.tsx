//COMPONENTS
import ContactForm from '../components/ContactForm';
// STYLES
import styles from '../styles/pages/contactPage.module.scss';

const ContactPage = () => {    
    return (
        <section className={styles.contactPage}>
            <div className={styles.bannerImage} />
            <div className={styles.bannerContext}>
                <ContactForm />
            </div>
        </section>
    );
}

export default ContactPage;