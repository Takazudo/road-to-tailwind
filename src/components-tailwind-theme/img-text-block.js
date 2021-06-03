export const ImgTextBlock = ({ children, src }) => (
  <div className="lg:-ml-xl">
    <div className="lg:flex w-full">
      <div className="
        pb-lg space-y-lg
        lg:pl-xl lg:w-1/2
      ">
        {children}
      </div>
      <div className="lg:pl-xl lg:w-1/2">
        <img className="block w-full" src={src} alt="" />
      </div>
    </div>
  </div>
);
