//STYLES
import styles from './styles.module.scss';

export type TitleProps = {
  children?: React.ReactNode;
}

const Title = ({ children }) => {
  return (
    <h3 className={styles.title}>
      {children}
    </h3>
  );
}

export default Title;