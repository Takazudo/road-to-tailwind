const Small = ({ children, src, className }) => (
  <div className={className}>
    <div className="pb-lg space-y-lg">{children}</div>
    <img className="block w-full" src={src} alt="" />
  </div>
);

const Large = ({ children, src, className }) => (
  <div className={`-ml-xl ${className}`}>
    <div className="flex w-full">
      <div className="pb-lg space-y-lg pl-xl w-1/2">{children}</div>
      <div className="pl-xl w-1/2">
        <img className="block w-full" src={src} alt="" />
      </div>
    </div>
  </div>
);

export const ImgTextBlock = (props) => (
  <>
    <Small className="lg:hidden" {...props} />
    <Large className="hidden lg:block" {...props} />
  </>
);
