import React from "react";
import { styled, setup } from "goober";
setup(React.createElement);

const Container = styled("div")`
  @media (min-width: 768px) {
    margin: 0 0 0 -40px;
  }
`;
const Inner = styled("div")`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`;
const TextWrapper = styled("div")`
  padding: 0 0 20px;
  @media (min-width: 768px) {
    padding: 0 0 0 40px;
    width: 50%;
  }
  > * + * {
    padding: 20px 0 0;
  }
`;
const ImgWrapper = styled("div")`
  @media (min-width: 768px) {
    padding: 0 0 0 40px;
    width: 50%;
  }
`;
const Img = styled("img")`
  display: block;
  width: 100%;
`;

export const GooberStyledBlock = ({ children, src }) => (
  <Container>
    <Inner>
      <TextWrapper>{children}</TextWrapper>
      <ImgWrapper>
        <Img src={src} alt="" />
      </ImgWrapper>
    </Inner>
  </Container>
);
