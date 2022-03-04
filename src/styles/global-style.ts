import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

* {
    margin : 0px; 
    padding : 0px;
    box-sizing: border-box;
    font-family: -apple-system, 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    border:none;
    color: #515151;
    letter-spacing: 1.5;
  };
  input,textarea{
    &:active,&:focus{
      outline: none;
    }
  }
  button{
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
      transform: scale(1.05);
    }
  }
`;
export const Main = styled.main`
  display: flex;
`;
export const Container = styled.section`
  padding: 100px 50px;
  box-sizing: border-box;
  min-width: 375px;
  width: 100%;
  /* border: 2px solid blue; */
  /* @media screen and (min-width: 768px) {
    margin: 50px auto 70px;
  }
  @media screen and (min-width: 1140px) {
    margin: 70px auto 90px;
  } */
  > h1 {
    font-size: 38px;
    font-weight: 600;
    margin: 10px 0;
  }
`;
export const Wrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  > h1 {
    font-size: 38px;
    font-weight: 600;
    margin: 10px 0;
  }
`;

export const StyledLine = styled.div`
  border-bottom: 0.5px solid lightgray;
  width: 80%;
  margin: 20px 0;
`;
