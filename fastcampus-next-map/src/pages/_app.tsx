import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />{" "}
          </Layout>
        </SessionProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
