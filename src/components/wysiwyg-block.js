import { css } from "@emotion/css";
import tw from "twin.macro";

const richtext = css`
  h2 {
    ${tw`text-xl`}
    ${tw`pb-md`}
  }
  h3 {
    ${tw`text-lg`}
    ${tw`pb-md pt-md`}
  }
  p {
    ${tw`pb-lg`}
  }
  ul {
    ${tw`ml-xl list-disc`}
    ${tw`space-y-sm pb-lg`}
  }
  ol {
    ${tw`ml-xl list-decimal`}
    ${tw`space-y-sm pb-lg`}
  }
`;

const VerticalBlock = ({ children, src, className }) => (
  <div className={className}>
    <div className={`pb-lg ${richtext}`}>{children}</div>
    <img className="block w-full" src={src} alt="" />
  </div>
);

const HorizontalBlock = ({ children, src, className }) => (
  <div className={`-ml-xl ${className}`}>
    <div className="flex w-full">
      <div className={`pb-lg pl-xl w-1/2 ${richtext}`}>
        {children}
      </div>
      <div className="pl-xl w-1/2">
        <img className="block w-full" src={src} alt="" />
      </div>
    </div>
  </div>
);

export const WysiwygBlock = (props) => (
  <>
    <VerticalBlock className="lg:hidden" {...props} />
    <HorizontalBlock className="hidden lg:block" {...props} />
  </>
);
