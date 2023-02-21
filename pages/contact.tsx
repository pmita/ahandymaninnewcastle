//COMPONENTS
import BannerContent from '../components/BannerContent';
import SplitBanner from '../layouts/SplitBanner';
import BannerImage from '../components/BannerImage';
import ContactForm from '../components/ContactForm';
// STYLES
import styles from '../styles/pages/contactPage.module.scss';

const ContactPage = () => {    
    return (
        <div className={styles.contactPage}>
            <SplitBanner fullscreen={false}>
                <BannerImage imageUrl="/assets/images/PaintBrush.jpg"/>
                <BannerContent>
                    <ContactForm />
                </BannerContent>
            </SplitBanner>
        </div>
    );
}

export default ContactPage;