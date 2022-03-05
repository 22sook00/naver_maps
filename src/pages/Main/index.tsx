import React, { useState } from "react";
import Basic from "../../components/Basic/Basic";
import Bounds from "../../components/Bounds/Bounds";
import Menus from "../../components/Menus/Menus";
import MyLocation from "../../components/MyLocation/MyLocation";
import { Container } from "../../styles/global-style";
import Search from "../../components/Search/Search";

export interface IProps {
  title: string;
}

const menuTypes = [
  { id: 0, title: "🌎 기본 지도", component: <Basic title={"🌎 기본지도"} /> },

  {
    id: 1,
    title: "🗽 특정장소 이동",
    component: <Bounds title={"🗽 특정장소 이동"} />,
  },
  {
    id: 2,
    title: "📍 내 위치 반경",
    component: <MyLocation title={"📍 내 위치 반경"} />,
  },
  {
    id: 3,
    title: "🔍 주소 검색하기",
    component: <Search title={"🔍 주소/좌표 검색하기"} />,
  },
];

const MainPage = () => {
  const [tap, setTap] = useState<any>(menuTypes[0].component);

  const handleMoveTap = (idx: number) => {
    setTap(menuTypes[idx].component);
  };
  return (
    <>
      <Menus menuTypes={menuTypes} handleMoveTap={handleMoveTap} />
      <Container>{tap}</Container>
    </>
  );
};

export default MainPage;
