/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import {
  StyledDescBound,
  StyledFlexBox,
  StyledMapBound,
  StyledUlBound,
} from "./MapBoundStyles";
import { ILatLngs, latLngs } from "../../data/latLngsData";
import { IProps } from "../../pages/Main";
import Button from "../Common/Buttons/Button";
import Marker from "../Common/Icons/markerIcon.svg";

const Bounds: FC<IProps> = ({ title }) => {
  const [moveLocation, setMoveLocation] = useState<any>("");

  useEffect(() => {
    const initMap = () => {
      let map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(latLngs[0].lat, latLngs[0].lng),
        zoom: 10,
      });

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
      // let dokdo = new naver.maps.LatLngBounds(
      //   new naver.maps.LatLng(37.2380651, 131.8562652),
      //   new naver.maps.LatLng(37.2444436, 131.8786475)
      // );

      // let seoul = new naver.maps.LatLngBounds(
      //   new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
      //   new naver.maps.LatLng(37.7010174173061, 127.18379493229875)
      // );
    };
    initMap();
  }, []);

  const handleMoveCity = (e: React.FormEvent, cities: ILatLngs) => {
    e.preventDefault();
    let map: any = null;
    map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(latLngs[0].lat, latLngs[0].lng),
      zoom: 14,
    });

    //클릭한 곳 정보만 나타내는 필터.
    const filtering = latLngs.filter((data) => data.id === cities.id);
    const resultRadius = new naver.maps.LatLng(
      filtering[0].lat,
      filtering[0].lng
    );
    //클릭한 곳 마커표시
    let marker = new naver.maps.Marker({
      map: map,
      title: filtering[0].place,
      position: new naver.maps.LatLng(filtering[0].lat, filtering[0].lng),
      icon: {
        url: Marker,
        size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26),
      },
    });
    //클릭한 곳 정보 창 표시
    const infoWindowData = [
      `<div class="iw_inner">
    <h3 class = 'infoTitle'>${filtering[0].place}</h3>
    </div>
    `,
    ].join("");

    let infowindow = new naver.maps.InfoWindow({
      content: infoWindowData,
      maxWidth: 200,
      backgroundColor: "#eee",
      anchorColor: "#eee",
      borderColor: "#0e960e",
      borderWidth: 2,
      anchorSize: new naver.maps.Size(20, 10),
      anchorSkew: true,
      pixelOffset: new naver.maps.Point(0, -10),
    });
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
    infowindow.open(map, marker);

    setMoveLocation(map.setCenter(resultRadius));
  };
  return (
    <>
      <h1>{title}</h1>
      <StyledFlexBox>
        {latLngs.map((cities: ILatLngs) => {
          return (
            <Button
              key={cities.id}
              small={"small"}
              onClick={(e: any) => handleMoveCity(e, cities)}
              text={cities.place}
            />
          );
        })}
      </StyledFlexBox>
      <StyledMapBound id="map" />
      <StyledDescBound>
        <StyledUlBound>
          사용기능
          <li>버튼 클릭 시 해당좌표로 마커찍어 이동하기</li>
          <li>정보창(인포윈도우) 나타내고 스타일변경하기</li>
        </StyledUlBound>
      </StyledDescBound>
    </>
  );
};

export default Bounds;
