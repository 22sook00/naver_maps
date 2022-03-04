import React, { FC } from "react";
import { IProps } from "../../pages/Main";

const Filter: FC<IProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>filtering</div>
    </>
  );
};

export default Filter;
