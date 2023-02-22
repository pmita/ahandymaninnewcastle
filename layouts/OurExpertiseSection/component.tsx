//COMPONENTS
import Title from '../../components/Title';
import TilesGrid from '../../components/TilesGrid';
//ASSETS
import { ourExpertise } from '../../variables/ourExpertise';
//STYLES
import styles from './styles.module.scss';

const OurExpertiseSection = () => {
  return (
    <section className={styles.ourExpertiseSection}>
      <Title>
        Bring your dream home to life with our expertise, help, 
        and catered to you solutions 🔥
      </Title>
      <TilesGrid
        tiles={ourExpertise}
      />
    </section>
  );
}

export default OurExpertiseSection;