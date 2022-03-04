import React, { FC } from "react";
import { StyledLine } from "../../styles/global-style";

import Button from "../Common/Buttons/Button";
import { StyledMenuBar } from "./MenuStyles";

interface Props {
  menuTypes: any;
  handleMoveTap: any;
}

const Menus: FC<Props> = ({ menuTypes, handleMoveTap }) => {
  return (
    <StyledMenuBar>
      <h1>MENU</h1>
      <StyledLine />
      {menuTypes.map(
        (tap: { id: number | null | undefined; title: string }) => {
          return (
            <Button
              key={tap.id}
              text={tap.title}
              onClick={() => handleMoveTap(tap.id)}
            />
          );
        }
      )}
    </StyledMenuBar>
  );
};

export default Menus;
