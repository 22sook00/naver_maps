import styled from "styled-components";
export const StyledParentsDiv = styled.div`
  width: 100%;
  text-align: right;
`;
export const StyledInputSearch = styled.input`
  width: 400px;
  padding: 15px;
  margin: 10px 0;
  font-size: 18px;
  border: 1px solid #eeeeea;
  /* border: 3px solid red; */
  box-shadow: 0px 5px 25px -3px rgba(0, 0, 0, 0.1),
    0px 1px 1px -2px rgba(0, 0, 0, 0);
  border-radius: 8px;
`;
export const StyledMapSearch = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const StyledFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDescSearch = styled.article`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
`;
export const StyledUlSearch = styled.ul`
  margin: 10px 0;
  font-size: 24px;
  list-style-type: disc;
  > li {
    font-size: 18px;
    margin: 15px 20px;
    /* margin-left: 20px; */
  }
`;
