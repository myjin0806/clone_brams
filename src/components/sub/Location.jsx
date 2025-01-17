import React, { useEffect } from 'react';

const Location = () => {
  useEffect(() => {
    // 카카오맵 API가 로드된 후 실행
    if (window.kakao) {
      const { kakao } = window;
      
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.349370, 127.229967),
        level: 3,
      };

      // 카카오맵 객체가 정상적으로 로드되었으면 지도 생성
      const map = new kakao.maps.Map(container, options);

      var markerPosition  = new kakao.maps.LatLng(37.349370, 127.229967); 

      var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    } else {
      console.error('카카오맵 API가 로드되지 않았습니다.');
    }
  }, []);

  return (
    <section className="location inner">
      <h2>Location</h2>
      <div className="location-wrap">
        <ul>
          <li>
            <h3>구관[본사]</h3>
            <p>경기도 광주시 오포읍 오포로 498번길 21</p>
          </li>
          <li>
            <h3>신관 [고객센터]</h3>
            <p>경기도 용인시 처인구 모현읍 곡현로 752</p>
          </li>
          <li>
            <h3>Tel</h3>
            <p>031-766-3993 (평일 09:00 - 18:00 / 토, 일, 공휴일 휴무)</p>
          </li>
          <li>
            <h3>E-mail</h3>
            <p>brams@ebrams.co.kr</p>
          </li>
        </ul>
        <div id="map" className="map"></div>
      </div>
    </section>
  );
};

export default Location;
