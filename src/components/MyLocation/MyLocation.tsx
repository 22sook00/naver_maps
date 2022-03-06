/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import { IProps } from "../../pages/Main";
import {
  StyledDescMyLocation,
  StyledMapMyLocation,
  StyledUlMyLocation,
} from "./MyLocationStyle";
import Marker from "../Common/Icons/markerIcon.svg";
import { Wrapper } from "../../styles/global-style";

const { naver } = window;

const MyLocation: FC<IProps> = ({ title }) => {
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");
  const infoWindowData = [
    `<div class="iw_inner">
  <h3 class = 'infoTitle'>'🏡 My Home 🏡'</h3>
  </div>
  `,
  ].join("");

  let infowindow = new naver.maps.InfoWindow({
    content: infoWindowData,
    maxWidth: 200,
    backgroundColor: "#eee",
  });

  // 먼저 현재 내위치를 가져올 currentPosion을 가져온다.
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    const initMap = () => {
      if (typeof myLocation !== "string") {
        const currentPosition = [myLocation.latitude, myLocation.longitude];

        const map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
          zoom: 15,
          mapTypeId: naver.maps.MapTypeId.NORMAL,
        });
        new naver.maps.Marker({
          map: map,
          title: "My Home",
          position: new naver.maps.LatLng(
            currentPosition[0],
            currentPosition[1]
          ),
          icon: {
            url: Marker,
            size: new naver.maps.Size(50, 52),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26),
          },
        });
        new naver.maps.Circle({
          map: map,
          center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
          radius: 500,
          fillColor: "yellowgreen",
          fillOpacity: 0.3,
        });
      }
    };
    initMap();
  }, [myLocation]);

  return (
    <>
      <h1>{title}</h1>
      <Wrapper>
        <StyledMapMyLocation id="map" />
        <StyledDescMyLocation>
          <StyledUlMyLocation>
            사용기능
            <li>
              내 위치 표시하기 (Geolocation API)
              <br />
              (크롬 50버전 이후 HTTPS 환경에서만 사용 가능.)
            </li>
            <li>내 위치 반경 0.5km 까지 원형으로 표시하기</li>
          </StyledUlMyLocation>
        </StyledDescMyLocation>
      </Wrapper>
    </>
  );
};

export default MyLocation;
