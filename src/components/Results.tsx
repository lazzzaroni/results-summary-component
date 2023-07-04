export default function Results({ result }: { result: number }) {
  return (
    <aside className="flex h-[356px] w-full flex-col items-center rounded-b-2xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue text-center text-white md:h-full md:w-1/2 md:rounded-2xl ">
      <h2 className="py-6 text-lg text-white/80 md:pb-8 md:pt-10 md:text-2xl">
        Your Result
      </h2>
      <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue md:h-48 md:w-48">
        <span className="p-2 text-5xl font-semibold md:text-7xl">{result}</span>
        <p className="text-white/50">of 100</p>
      </div>
      <h1 className="pb-2 pt-4 text-2xl font-medium md:py-4 md:pt-8 md:text-3xl">
        Great
      </h1>
      <p className="px-10 font-normal leading-snug text-white/70 md:px-16">
        You scored higher than 65% of the people who have taken
        <span className="inline md:block"> these tests.</span>
      </p>
    </aside>
  );
}
