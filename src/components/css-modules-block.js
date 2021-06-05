import styles from './css-modules-block.module.css';

export const CssModulesBlock = ({ children, src }) => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.textWrapper}>
        { children }
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={src} alt="" />
      </div>
    </div>
  </div>
);