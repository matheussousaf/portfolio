import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 5px;
  padding: 0 15px;
  display: flex;
  flex: 1;
  margin-right: 15px;
  margin-top: 15px;
  min-width: 100px;
  min-height: 200px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;