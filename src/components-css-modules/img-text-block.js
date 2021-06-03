import styles from './img-text-block.module.css';

export const ImgTextBlock = ({ children, src }) => (
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