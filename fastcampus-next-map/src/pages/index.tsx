// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global kakao */

import Map from "../components/Map";
import { useState } from "react";
import Markers from "@/components/Markers";
import StoreBox from "@/components/StoreBox";
import { StoreType } from "@/types";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Home({ stores }: { stores: StoreType }) {
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);

  return (
    <>
      <Map setMap={setMap} setCurrentStore={setCurrentStore} />
      <Markers map={map} setCurrentStore={setCurrentStore} stores={stores} />
      <StoreBox store={currentStore} setCurrentStore={setCurrentStore} />
    </>
  );
}

export async function getStaticProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`,
  ).then((res) => res.json());
  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
