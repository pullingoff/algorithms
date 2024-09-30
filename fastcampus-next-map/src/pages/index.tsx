// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global kakao */

import Map from "../components/Map";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Home() {
  return (
    <>
      <h1>Map Index Page</h1>
      <Map />
    </>
  );
}
