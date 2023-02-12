import { ReactNode } from 'react';
//STYLES
import styles from './styles.module.scss';

type BannerContentProps = {
  children: ReactNode;
  order?: number;
}

const BannerContent = ({ children, order }:BannerContentProps) =>{
  return (
    <div 
      className={styles.bannerWrapper} 
      style={{ order: `"${order}"`}}
    >
      <div className={styles.bannerContent}>
        {children}
      </div>
    </div>
  );
}

export default BannerContent;