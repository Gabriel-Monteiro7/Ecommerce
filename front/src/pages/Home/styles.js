import { Container as NewContainer } from "react-bootstrap";
import styled from "styled-components";
import { sm } from "../../styles/global";
export const Container = styled(NewContainer)`
  padding: 20px 0px;
  min-height: 100vh;
`;
export const Title = styled.h1``;
export const ContainerProducts = styled(NewContainer)`
  display: flex;
  flex-wrap: wrap;
`;

export const NoProduct = styled.span`
  align-items: center;
  font-size: 30px;
  color: #989898;
  display: flex;
  height: 100vh;
  margin: auto;
  justify-content: center;
  @media (max-width: ${sm}px) {
    font-size: 20px;
  }
`;
export const Load = styled.div`
  height: 500px;
  width: 500px;
  margin: auto;
  @media (max-width: ${sm}px) {
    height: 300px;
    width: 300px;
  }
`;
