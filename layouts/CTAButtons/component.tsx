//STYLES
import styles from './styles.module.scss';

const CTAButtons = (props) => {
  //STATE & VARIABLES
  const { children, ...rest } = props;
  return (
    <section className={styles.ctaButtons} {...rest}>
      {children}
    </section>
  );
}

export default CTAButtons;