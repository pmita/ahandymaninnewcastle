//STYLES
import styles from './styles.module.scss';

//TYPES
type BannerImageProps = {
  imageUrl?: string;
}

const BannerImage = ({ imageUrl }: BannerImageProps) => {
  return(
    <div 
      style={{
        backgroundImage: `url("${imageUrl}")`,
      }}
      className={styles.bannerImage} 
    />
  );
}

export default BannerImage;