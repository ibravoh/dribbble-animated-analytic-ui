import { CircleArrowUp, Layers3 } from "lucide-react";
export default function WidgitControl() {
  return (
    <div className="rounded-2xl bg-[#0d0d0d] py-12 shadow-2xl flex px-9 justify-between w-full text-white flex-col">
      <div className="flex gap-x-4 justify-center">
        <div
          className="border-[0.1px] rounded-3xl py-5 px-8"
          style={{ borderColor: "#555353", borderWidth: 0.05 }}
        >
          <Layers3
            className="w-full text-[#b8b5a7]"
            size={18}
            height={35}
            strokeWidth={0.9}
            color="#b8b5a7"
          />
          <div className="flex mt-5 self-center">
            <img
              src={"https://randomuser.me/api/portraits/men/75.jpg"}
              className="rounded-full w-10 border-black border-2"
            />
            <img
              src={"https://randomuser.me/api/portraits/women/75.jpg"}
              className="rounded-full w-10 border-2 border-black -ml-1"
            />
          </div>
        </div>
        <div
          className="border-[0.1px] rounded-3xl py-5 px-8 flex flex-col justify-between"
          style={{ borderColor: "#555353", borderWidth: 0.05 }}
        >
          <h4 className="text-xs font-light text-left">Transactions</h4>
          <div className="flex mt-5">
            <div className="relative">
              <h4 className="text-2xl font-light">43k</h4>
              <div className="flex absolute -top-3 left-8 text-[#3ec57c] text-xs gap-x-1">
                <CircleArrowUp size={16} color="#3ec57c" /> <span> +14%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14"> 
        <h4 className="text-center text-xl">Widget Control</h4>
        <p className="mt-12 text-center text-[#949494] font-light">Reports provide a comprehensive overview of important aspects of web analytics</p>
      </div>
    </div>
  );
}
