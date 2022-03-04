import React, { FC } from "react";
import { DefaultButton } from "./ButtonStyle";

interface Props {
  text: string;
  small?: string;
  onClick: any;
}
const Button: FC<Props> = ({ text, onClick, small }) => {
  return (
    <>
      <DefaultButton small={small} onClick={onClick}>
        <h1>{text}</h1>
      </DefaultButton>
    </>
  );
};

export default Button;
