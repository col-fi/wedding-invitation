// 타입스크립트 window.kakao 에러 방지
declare global {
  interface Window {
    kakao: any;
  }
}

import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const LocationContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const InfoSection = styled.div`
  margin-bottom: 2rem;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357abd;
  }
`;

const KAKAO_MAP_SCRIPT_ID = 'kakao-map-script';
const KAKAO_MAP_APP_KEY = 'd1b6e1e6e1e6e1e6e1e6e1e6e1e6e1e6'; // 데모용, 실제 배포시 본인 키로 교체
const ADDRESS = '서울특별시 송파구 삼전로3길 7-14';

const Location = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Kakao Map 스크립트 동적 로드
    const existingScript = document.getElementById(KAKAO_MAP_SCRIPT_ID);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = KAKAO_MAP_SCRIPT_ID;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&autoload=false&libraries=services`;
      script.onload = () => onLoadKakaoMap();
      document.body.appendChild(script);
    } else {
      onLoadKakaoMap();
    }

    function onLoadKakaoMap() {
      // @ts-ignore
      if (window.kakao && window.kakao.maps) {
        // @ts-ignore
        window.kakao.maps.load(() => {
          // @ts-ignore
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(ADDRESS, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
              const map = new window.kakao.maps.Map(mapRef.current, {
                center: coords,
                level: 3
              });
              new window.kakao.maps.Marker({
                map,
                position: coords
              });
            }
          });
        });
      }
    }
  }, []);

  return (
    <LocationContainer>
      <Title>오시는 길</Title>
      <MapContainer>
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      </MapContainer>
      <InfoContainer>
        <InfoSection>
          <InfoTitle>예식장 정보</InfoTitle>
          <InfoText>장소: 서울특별시 송파구 삼전로3길 7-14</InfoText>
          <InfoText>주소: 서울특별시 송파구 삼전로3길 7-14</InfoText>
          <InfoText>전화: 02-123-4567</InfoText>
        </InfoSection>
        <InfoSection>
          <InfoTitle>교통 안내</InfoTitle>
          <InfoText>지하철: OO역 1번 출구에서 도보 5분</InfoText>
          <InfoText>버스: OO정류장 하차</InfoText>
          <Button href="https://map.kakao.com/link/map/삼전로3길7-14,37.504198,127.090540" target="_blank" rel="noopener noreferrer">
            카카오맵으로 길찾기
          </Button>
        </InfoSection>
      </InfoContainer>
    </LocationContainer>
  );
};

export default Location; 