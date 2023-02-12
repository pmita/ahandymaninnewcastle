//STYLES
import styles from './styles.module.scss';

//TYPES
type BannerImageProps = {
  imageUrl?: string;
  order?: number;
}

const BannerImage = ({ imageUrl, order }: BannerImageProps) => {
  return(
    <div 
      style={{
        backgroundImage: `url("${imageUrl}")`,
        order: `"${order}"`
      }}
      className={styles.bannerImage} 
    />
  );
}

export default BannerImage;