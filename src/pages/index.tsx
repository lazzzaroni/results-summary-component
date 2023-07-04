import Footer from "@/components/Footer";
import Results from "@/components/Results";
import Summary from "@/components/Summary";
import Head from "next/head";
import { data } from "@/data";

const result = Math.floor(
  data.reduce((acc, entry) => {
    const score = entry.score + acc;
    return score;
  }, 0) / data.length
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Results summary component</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex h-[809px] w-[375px] flex-col rounded-2xl bg-white font-medium md:h-[512px] md:w-[736px] md:flex-row">
        <Results result={result} />
        <Summary data={data} />
      </section>
      <Footer />
    </>
  );
}