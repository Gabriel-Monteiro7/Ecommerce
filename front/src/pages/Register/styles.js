import { Container as NewContainer } from "react-bootstrap";
import styled from "styled-components";
import { md, sm } from "../../styles/global";

export const Container = styled(NewContainer)`
  padding: 20px 0px;
  min-height: 100vh;
  width: 50%;
  margin: auto;
  @media (max-width: ${md}px) {
    width: 80%;
  }
  @media (max-width: ${sm}px) {
    padding: 20px;
    width: 100%;
    h1 {
      font-size: 2rem;
    }
  }
`;
export const Title = styled.h1`
  padding: 20px 0px;
`;
