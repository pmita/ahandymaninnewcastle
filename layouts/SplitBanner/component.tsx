//STYLES
import styles from './styles.module.scss';

export type SplitBanner = {
  children?: React.ReactNode;
  fullscreen?: boolean;
}

const SplitBanner = ({ children, fullscreen }: SplitBanner) => {
  return (
    <section 
      className={styles.banner}
      style={{
        height: fullscreen && "100vh"
      }}
    >
      {children}
    </section>
  );
}

export default SplitBanner;