import styled from "styled-components";

export const StyledMap = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
export const StyledDesc = styled.div`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
`;
export const StyledUl = styled.ul`
  margin: 10px 0;
  font-size: 24px;
  list-style-type: disc;
  > li {
    font-size: 18px;
    margin: 15px 20px;
    /* margin-left: 20px; */
  }
`;

// !예시 styled-components에 1개 props 타입지정
// const Container = styled.div< {프롭스명 : 타입지정} >`
// const Container = styled.div< { age : number } >`
//   color: ${(props) => (props.age > 20 ? 'red' : 'gray')};
// `;

//!예시 다수의 Container styled-components에 적용할 interfacer를 작성
// interface Container extends 상속타입 {
//   isActive: boolean;
//   age: number;
//   프롭스명: 타입지정;
// }
// // styled-components에 interface 타입 지정하기
// const Container = styled.div<Container>`
//   color: ${(props) => (props.age > 20 ? 'red' : 'gray')};
//   background-color: ${(props) => (props.isActive ? 'red' : 'gray')};
// `;

// ! 미디어쿼리 타입스크립트 적용시
// const customMediaQuery = (maxWidth: number):string => {
//   // 최대폭을 입력하면. 문자열을 밷는다!
//   return `@media (max-width: ${maxWidth}px)`;
// }
// 각 디바이스에 따라 최대폭 값을 변수화
// const media = {
//   custom: customMediaQuery,
//   desktop: customMediaQuery(922),
//   tablet: customMediaQuery(768),
//   phone: customMediaQuery(576),
// };

// const Content = styled.div`
//   height: 3em;
//   width: 3em;
//   background: papayawhip;

//   ${media.desktop} {
//     background: dodgerblue;
//   }
//   ${media.tablet} {
//     background: mediumseagreen;
//   }
//   ${media.phone} {
//     background: palevioletred;
//   }
// `;
// ${media.desktop} { color: red;} === @media (max-width: 922px) {color:red}
