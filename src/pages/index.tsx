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
        <meta
          name="description"
          content="Frontend Mentor | Results summary component"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/results-summary-component/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/results-summary-component/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/results-summary-component/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/results-summary-component/images/favicon-16x16.png"
        />
      </Head>
      <section className="flex h-[809px] w-[375px] flex-col rounded-2xl bg-white font-medium md:h-[512px] md:w-[736px] md:flex-row">
        <Results result={result} />
        <Summary data={data} />
      </section>
      <Footer />
    </>
  );
}
