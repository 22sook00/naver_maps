import React, { FC } from "react";
import { Main } from "../../../styles/global-style";

interface Props {
  children: any;
}

const PageProps: FC<Props> = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default PageProps;
