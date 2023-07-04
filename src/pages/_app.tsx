import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-pale-blue ${hanken.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
