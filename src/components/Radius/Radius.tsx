import React, { FC } from "react";
import { IProps } from "../../pages/Main";

const Radius: FC<IProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>Radius</div>
    </>
  );
};

export default Radius;
