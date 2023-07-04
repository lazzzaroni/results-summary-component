import { type IData } from "@/types";
import Image from "next/image";

export default function Summary({ data }: { data: IData[] }) {
  return (
    <div className="flex w-full flex-col px-8 py-6 md:w-1/2 md:justify-evenly">
      <h2 className="pb-2 text-lg md:text-xl">Summary</h2>
      <ul className="flex flex-col gap-4 py-4">
        {data.map((entry) => (
          <li
            key={entry.icon}
            className="flex h-14 items-center justify-between rounded-xl bg-slate-300/40"
          >
            <div className="flex items-center">
              <Image
                src={entry.icon}
                alt=""
                width="0"
                height="0"
                className="h-auto w-auto p-4"
              />
              <p className={entry.color}>{entry.category}</p>
            </div>
            <div className="p-4">
              {entry.score} <span className="text-black/30">/ 100</span>
            </div>
          </li>
        ))}
      </ul>
      <button className="h-14 rounded-full bg-dark-gray-blue px-6 py-3 text-white hover:bg-cobalt-blue active:bg-light-royal-blue">
        Continue
      </button>
    </div>
  );
}
