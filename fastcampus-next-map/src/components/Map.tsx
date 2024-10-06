import Script from "next/script";
import { Dispatch, SetStateAction } from "react";
import { StoreType } from "@/types";

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
  setCurrentStore: Dispatch<SetStateAction<StoreType>>;
}

export default function Map({ setMap, setCurrentStore }: MapProps) {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("kakao-map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="kakao-map" className="w-full h-screen"></div>
    </>
  );
}
