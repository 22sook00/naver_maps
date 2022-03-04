import React, { useState } from "react";
import Basic from "../../components/Basic/Basic";
import Bounds from "../../components/Bounds/Bounds";
import Filter from "../../components/Filter/Filter";
import Menus from "../../components/Menus/Menus";
import Radius from "../../components/Radius/Radius";
import { Container } from "../../styles/global-style";

export interface IProps {
  title: string;
}

const menuTypes = [
  { id: 0, title: "🌎 기본지도", component: <Basic title={"🌎 기본지도"} /> },
  {
    id: 1,
    title: "📍 내 위치 반경",
    component: <Radius title={"📍 내 위치 반경"} />,
  },
  {
    id: 2,
    title: "🗽 특정장소 이동",
    component: <Bounds title={"🗽 특정장소 이동"} />,
  },
  { id: 3, title: "🔍 필터", component: <Filter title={"🔍 필터"} /> },
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
