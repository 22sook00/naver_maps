/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useCallback, useEffect, useState } from "react";
import { IProps } from "../../pages/Main";
import {
  StyledDescSearch,
  StyledInputSearch,
  StyledMapSearch,
  StyledParentsDiv,
  StyledUlSearch,
} from "./SearchStyle";
import Marker from "../Common/Icons/markerIcon.svg";

const Search: FC<IProps> = ({ title }) => {
  const [{ lat, lng }, setGeometricData] = useState<any>({
    lat: 0,
    lng: 0,
  });
  const [searchAddress, setSearchAddress] = useState<any>("");
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");
  //정보창
  let infoWindow = new naver.maps.InfoWindow({
    content: "",
    anchorSkew: true,
  });
  //내 로케이션 먼저 담기.
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
    // console.log("myLocation?", myLocation);
  }, []);

  useEffect(() => {
    const initMap = () => {
      if (typeof myLocation !== "string") {
        let map = null;
        map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(
            myLocation.latitude,
            myLocation.longitude
          ),
          zoom: 14,
          mapTypeId: naver.maps.MapTypeId.NORMAL,
          //일반,위성 타입설정
          mapTypeControl: true,
        });

        new naver.maps.Marker({
          map: map,
          title: "My Home",
          position: new naver.maps.LatLng(
            myLocation.latitude,
            myLocation.longitude
          ),
          icon: {
            url: Marker,
            size: new naver.maps.Size(50, 52),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26),
          },
        });
      }
    };
    initMap();
  }, [myLocation]);

  //제출했을때.
  const handleSubmitAddress = useCallback(
    (e: any) => {
      e.preventDefault();

      // //!주소->좌표검색 에 관련된 값.
      naver.maps.Service.geocode(
        { query: searchAddress },
        function (status, response) {
          // console.log("????", status, response);
          if (status === naver.maps.Service.Status.ERROR) {
            if (!searchAddress) {
              return alert("Geocode Error, Please check address");
            }
            return alert("Geocode Error, address:" + searchAddress);
          }
          if (response.v2.meta.totalCount === 0) {
            return alert("No result.");
          }

          let item = response.v2.addresses[0];
          //선택된 주소의 좌표값을 상태에 담아준다.
          setGeometricData({
            lat: item.y,
            lng: item.x,
          });

          let htmlAddresses = [];
          let point = new naver.maps.Point(Number(item.y), Number(item.x));

          if (item.roadAddress) {
            htmlAddresses.push("[도로명 주소] " + item.roadAddress);
          }

          if (item.jibunAddress) {
            htmlAddresses.push("[지번 주소] " + item.jibunAddress);
          }

          if (item.englishAddress) {
            htmlAddresses.push("[영문명 주소] " + item.englishAddress);
          }

          let map: any = null;
          map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(Number(item.y), Number(item.x)),
            zoom: 14,
          });
          let marker = new naver.maps.Marker({
            map: map,
            position: new naver.maps.LatLng(Number(item.y), Number(item.x)),
            icon: {
              url: Marker,
              size: new naver.maps.Size(50, 52),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(25, 26),
            },
          });
          //클릭한 곳 정보 창 표시
          const infoWindowData = [
            `<div style="padding:10px;min-width:200px;line-height:150%;font-size:14px;">
            <h4 style="margin-top:5px;">검색 주소 :${searchAddress}</h4><br />
            ${htmlAddresses.join("<br />")},
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
        }
      );

      // //!좌표->주소검색 에 관련된 값.
      // naver.maps.Service.reverseGeocode(
      //   {
      //     coords: new naver.maps.LatLng(lat, lng),
      //     orders: [
      //       naver.maps.Service.OrderType.ADDR,
      //       naver.maps.Service.OrderType.ROAD_ADDR,
      //     ].join(","),
      //   },

      //   function (status, response) {
      //     if (status === naver.maps.Service.Status.ERROR) {
      //       if (!new naver.maps.LatLng(lat, lng)) {
      //         return alert("ReverseGeocode Error, Please check latlng");
      //       }
      //       return alert("ReverseGeocode Error, Please check latlng");
      //     }
      //   }
      // );
    },
    [searchAddress]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("asdf", e);
    setSearchAddress(e.target.value);
  };
  return (
    <>
      <h1>{title}</h1>
      <StyledParentsDiv>
        <form onSubmit={handleSubmitAddress}>
          <StyledInputSearch
            onChange={(e) => handleSearch(e)}
            placeholder="찾으실 주소를 입력하세요."
          />
        </form>
      </StyledParentsDiv>
      <StyledMapSearch id="map" />
      <StyledDescSearch>
        <StyledUlSearch>
          사용기능
          <li>맨 처음 내위치 나타내기</li>
          <li>
            동 검색
            <br />
            html script 로드 시 클라이언트아이디와 submodules=geocorder 필요.
          </li>
          <li>주소(geocode) / 좌표(reverseGeocode) 로 검색하기</li>
          <li>도로명 주소 / 지번 표시하기 추가</li>
        </StyledUlSearch>
      </StyledDescSearch>
    </>
  );
};

export default Search;
