import { StoreType } from "@/types";
import { useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentStoreState, mapState } from "@/atom";

interface MarkersProps {
  stores: StoreType[];
}

const Markers = ({ stores }: MarkersProps) => {
  const map = useRecoilValue(mapState);
  const setCurrentStore = useSetRecoilState(currentStoreState);

  const loadKakaoMarkers = useCallback(() => {
    if (map) {
      // 식당 데이터 마커 띄우기
      stores.map((store) => {
        const markerPosition = new window.kakao.maps.LatLng(
          store?.lat,
          store?.lng,
        );

        const imageSrc = store?.category
          ? `/images/markers/${store?.category}.png`
          : `/images/markers/default.png`;
        const imageSize = new window.kakao.maps.Size(40, 40); // 마커이미지의 크기입니다           const imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 커스텀 오버레이에 표시할 내용입니다
        // HTML 문자열 또는 Dom Element 입니다
        const content = `<div class="infoWindow"><span class="left"></span><span class="center">${store.name}</span><span class="right"></span></div>`;

        // 커스텀 오버레이를 생성합니다
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });

        // const infoWindow = new window.kakao.maps.InfoWindow({
        //   content: content,
        // });

        window.kakao.maps.event.addListener(marker, "mouseover", () => {
          customOverlay.setMap(map);
          // infoWindow.open(map, marker);
        });

        window.kakao.maps.event.addListener(marker, "mouseout", () => {
          customOverlay.setMap(null);
          // infoWindow.close();
        });

        marker.setMap(map);

        // 클릭한 가게 저장
        window.kakao.maps.event.addListener(marker, "click", () => {
          setCurrentStore(store);
        });
      });
    }
  }, [map, setCurrentStore, stores]);

  useEffect(() => {
    loadKakaoMarkers();
  }, [loadKakaoMarkers, map]);
};

export default Markers;
