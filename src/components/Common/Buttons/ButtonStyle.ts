import styled from "styled-components";

export const DefaultButton = styled.button<{ small: string | undefined }>`
  background-color: #ffffff;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: ${({ small }) => (small ? `100px` : `200px`)};
  height: ${({ small }) => (small ? `40px` : `60px`)};
  margin: 15px 0;

  > h1 {
    font-size: ${({ small }) => (small ? `14px` : `24px`)};
  }
`;
// !예시 styled-components에 1개 props 타입지정
// const Container = styled.div< {프롭스명 : 타입지정} >`
// const Container = styled.div< { age : number } >`
//   color: ${(props) => (props.age > 20 ? 'red' : 'gray')};
// `;
