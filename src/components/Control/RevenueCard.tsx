import { ProgressBar } from "..";
import { AnimatedCounter } from "../AnimatedCounter";

export const PriceItem = ({
  imgUrl,
  text,
  value,
}: {
  imgUrl: string;
  text: string;
  value: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-2 gapy-3 items-center ">
        <img src={imgUrl} className="rounded-full w-5 " />
        <span className="text-[8px] text-[#b9b9b9]">{text}</span>
      </div>
      <span className="text-[8px]">{value} $</span>
    </div>
  );
};

export const RevenueCard = () => {
  return (
    <div className="shadow-lg flex flex-col bg-white py-6 px-3 pb-3 rounded-xl w-full">
      <h4 className="text-xs text-[#a5a5a5]">Sales revenue</h4>

      <span className="text-2xl mt-2">
        <span className="text-sm">$</span><AnimatedCounter from={200} to={1312}/>K
      </span>

      <div className="rounded-2xl flex justify-center items-center mt-3 gap-x-1 w-full">
        <ProgressBar value={100} color="#47c783" height={3} spead={6} delay={0.5} />
        <ProgressBar value={100} color="#f9cf38" height={3} spead={6} delay={1} />
        <ProgressBar value={100} color="#ea64d9" height={3} spead={6} delay={1.5} />
      </div>
      <div className="mt-3 flex flex-col gap-y-3">
        <PriceItem
          imgUrl="https://randomuser.me/api/portraits/men/75.jpg"
          text="Min Price"
          value="1,200"
        />
        <PriceItem
          imgUrl="https://randomuser.me/api/portraits/women/75.jpg"
          text="Max Price"
          value="2,320"
        />
      </div>
      <hr className="my-3" />
      <div className="flex justify-between items-end">
        <span className="text-[8px] text-[#b9b9b9]">{"Engagement rate"}</span>
        <span className="text-[8px]">{"4984"} $</span>
      </div>
    </div>
  );
};
