/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import { StyledFlexBox, StyledMapBound } from "./MapBoundStyles";
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
        zoom: 11,
      });
      let marker = null;
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latLngs[0].lat, latLngs[0].lng),
        map: map,
        icon: {
          url: Marker,
          size: new naver.maps.Size(50, 52),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(25, 26),
        },
      });
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
  });

  const handleMoveCity = (e: any, cities: ILatLngs) => {
    e.preventDefault();
    let map: any = null;
    map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(latLngs[0].lat, latLngs[0].lng),
      zoom: 14,
    });
    const filtering = latLngs.filter((data) => data.id === cities.id);
    // const resultRadius = new naver.maps.LatLng(filtering[0].lat, filtering[0].lng);

    const resultRadius = new naver.maps.LatLng(
      filtering[0].lat,
      filtering[0].lng
    );

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
    </>
  );
};

export default Bounds;
