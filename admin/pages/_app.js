import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

// Import the Inter font
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <main className={inter}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
