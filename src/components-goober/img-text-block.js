import { css } from "goober";

const styles = {
  container: css`
    @media (min-width: 768px) {
      margin: 0 0 0 -40px;
    }
  `,
  inner: css`
    @media (min-width: 768px) {
      display: flex;
      width: 100%;
    }
  `,
  textWrapper: css`
    padding: 0 0 20px;
    @media (min-width: 768px) {
      padding: 0 0 0 40px;
      width: 50%;
    }
    > * + * {
      padding: 20px 0 0;
    }
  `,
  imgWrapper: css`
    @media (min-width: 768px) {
      padding: 0 0 0 40px;
      width: 50%;
    }
  `,
  img: css`
    display: block;
    width: 100%;
  `,
};

export const ImgTextBlock = ({ children, src }) => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.textWrapper}>{children}</div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={src} alt="" />
      </div>
    </div>
  </div>
);
