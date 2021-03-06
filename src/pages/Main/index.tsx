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
  { id: 0, title: "π κΈ°λ³Έ μ§λ", component: <Basic title={"π κΈ°λ³Έμ§λ"} /> },

  {
    id: 1,
    title: "π½ νΉμ μ₯μ μ΄λ",
    component: <Bounds title={"π½ νΉμ μ₯μ μ΄λ"} />,
  },
  {
    id: 2,
    title: "π λ΄ μμΉ λ°κ²½",
    component: <MyLocation title={"π λ΄ μμΉ λ°κ²½"} />,
  },
  {
    id: 3,
    title: "π μ£Όμ κ²μνκΈ°",
    component: <Search title={"π μ£Όμ/μ’ν κ²μνκΈ°"} />,
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
