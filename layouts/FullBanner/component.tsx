import { FC } from 'react';
//STYLE
import styles from './styles.module.scss';

export type FullBannerProps = {
  children: React.ReactNode;
  bannerSize?: string;
}

const FullBanner: FC<FullBannerProps> = ({ children, bannerSize }) => {
  return (
    <section className={`${styles[bannerSize]}`}>
      {children}
    </section>
  );
}

export default FullBanner;