/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import { IProps } from "../../pages/Main";
import { StyledDesc, StyledMap, StyledUl } from "./MapStyles";
import Marker from "../Common/Icons/markerIcon.svg";
import { Wrapper } from "../../styles/global-style";
import { latLngs } from "../../data/latLngsData";

const Basic: FC<IProps> = ({ title }) => {
  useEffect(() => {
    const initMap = () => {
      let map = null;

      const position = new naver.maps.LatLng(
        37.41294935143856,
        127.09955770039731
      );
      map = new naver.maps.Map("map", {
        center: position,
        zoom: 12,
      });
      // let markerOptions = {
      //   position: position.destinationPoint(90, 15),
      //   map: map,
      //   icon: {
      //     url: Marker,
      //     size: new naver.maps.Size(50, 52),
      //     origin: new naver.maps.Point(0, 0),
      //     anchor: new naver.maps.Point(25, 26),
      //   },
      // };
      for (let i = 0; i < latLngs.length; i++) {
        let marker = new naver.maps.Marker({
          map: map,
          title: latLngs[i].place,
          position: new naver.maps.LatLng(latLngs[i].lat, latLngs[i].lng),
          icon: {
            url: Marker,
            size: new naver.maps.Size(50, 52),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26),
          },
        });
      }

      // 기본 마커찍기
      // let marker = null;
      // marker = new naver.maps.Marker({
      //   position: new naver.maps.LatLng(37.3595704, 127.105399),
      //   map: map,
      // });

      // marker = new naver.maps.Marker(markerOptions);
    };
    initMap();
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <Wrapper>
        <StyledMap id="map" />
        <StyledDesc>
          <StyledUl>
            사용기능
            <li>특정좌표 마커 찍어보기</li>
            <li>커스텀 이미지 마커 찍어보기</li>
            <li>마커 여러개 찍어보기</li>
          </StyledUl>
        </StyledDesc>
      </Wrapper>
    </>
  );
};

export default Basic;
