import { css } from "@emotion/css";

const styles = {
  gradient1: css`
    background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
  `,
  gradient2: css`
    background: rgb(63, 94, 251);
    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
  `,
  gradient3: css`
    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
  `,
  shadow: css`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  `,
};

export const ComplicatedBlock = () => (
  <div
    className="
    relative pb-[20px]
    mb-[20px] lg:mb-[50px]
  "
  >
    <div
      className={`
      mx-auto
      w-full lg:w-[80%]
      h-[200px] lg:h-[300px]
      ${styles.gradient2} ${styles.shadow}
    `}
    ></div>
    <div
      className={`
        absolute
        w-[20%] h-[180px]
        left-0 bottom-0
        hidden lg:block
        ${styles.gradient1} ${styles.shadow}
      `}
    ></div>
    <div
      className={`
        absolute
        w-[20%] h-[180px]
        right-0 bottom-0
        hidden lg:block
        ${styles.gradient3} ${styles.shadow}
      `}
    ></div>
    <p
      className="
        absolute top-[40px] right-0 left-0
        text-5xl lg:text-7xl
        font-bold text-center
      "
    >
      Drink Bar is
      <br />
      299 Yen
    </p>
  </div>
);
