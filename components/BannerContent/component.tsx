import { ReactNode } from 'react';
//STYLES
import styles from './styles.module.scss';

type BannerContentProps = {
  children: ReactNode;
}

const BannerContent = ({ children }:BannerContentProps) =>{
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerContent}>
        {children}
      </div>
    </div>
  );
}

export default BannerContent;