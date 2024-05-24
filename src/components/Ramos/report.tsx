import Statistics from "./statistics";
import WidgitControl from "./widgetControl";

export default function Report() {
  return (
    <div className="flex w-full gap-x-8">
      <div className=" w-[55%]">
        <div className="pr-8 mb-8">
          <h2 className="text-[40px] text-left text-[#151515]">
            Your key to strategic{" "}
            <span className="inline-block">success through analytics</span>
          </h2>
        </div>
        <Statistics />
      </div>
      <div className="w-[45%]">
        <div className="flex justify-center mb-20 mt-4">
          <h4 className="text-lg text-left text-[#626262] ">
            Ready for exiting, instantaneous,{" "}
            <span className="block">all-accessible insights in real time?</span>
          </h4>
        </div>
        <WidgitControl />
      </div>
    </div>
  );
}
