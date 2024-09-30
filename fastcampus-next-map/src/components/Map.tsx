import Script from "next/script";

export default function Map() {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("kakao-map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.566535, 126.977969),
        level: 3,
      };
      new window.kakao.maps.Map(mapContainer, mapOption);
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
