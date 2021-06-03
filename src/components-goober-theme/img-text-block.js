import { css } from "goober";
import { theme } from "../theme";

const styles = {
  container: css`
    ${theme.screen.lg} {
      margin: 0 0 0 -${theme.spacing.xl};
    }
  `,
  inner: css`
    ${theme.screen.lg} {
      display: flex;
      width: 100%;
    }
  `,
  textWrapper: css`
    padding: 0 0 ${theme.spacing.lg};
    ${theme.screen.lg} {
      padding: 0 0 0 ${theme.spacing.xl};
      width: 50%;
    }
    > * + * {
      padding: ${theme.spacing.lg} 0 0;
    }
  `,
  imgWrapper: css`
    ${theme.screen.lg} {
      padding: 0 0 0 ${theme.spacing.xl};
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
