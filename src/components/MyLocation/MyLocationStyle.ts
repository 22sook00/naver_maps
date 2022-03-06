import styled from "styled-components";
export const StyledMapMyLocation = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
export const StyledDescMyLocation = styled.article`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
`;
export const StyledUlMyLocation = styled.ul`
  margin: 10px 0;
  font-size: 24px;
  list-style-type: disc;
  > li {
    font-size: 18px;
    margin: 15px 20px;
    /* margin-left: 20px; */
  }
`;
