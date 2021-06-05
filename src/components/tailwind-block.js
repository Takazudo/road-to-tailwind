export const TailwindBlock = ({ children, src }) => (
  <div className="lg:ml-[-40px]">
    <div className="lg:flex w-full">
      <div className="
        pb-[20px] space-y-[20px]
        lg:pl-[40px] lg:w-1/2
      ">
        {children}
      </div>
      <div className="lg:pl-[40px] lg:w-1/2">
        <img className="block w-full" src={src} alt="" />
      </div>
    </div>
  </div>
);