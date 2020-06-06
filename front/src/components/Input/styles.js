import { Input } from "@rocketseat/unform";
import styled from "styled-components";
import { sm } from "../../styles/global";

export const Container = styled.div`
  position: relative;
  text-align: start;
  display: inline-block;

  width: ${(props) => {
    return props.width + "%";
  }};
  @media (max-width: ${sm}px) {
    width: 100%;
  }
  margin: 10px 10px 10px 0px;
  label,
  input,
  span {
    display: block;
  }

  span {
    margin: 5px 0px;
    font-size: 12px;
    color: #fe2e2e;
    font-weight: bold;
  }
  label {
    margin-bottom: 1px;
    font-size: 17px;
  }
`;

export const Field = styled(Input)`
  margin: 10px 0px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  border: 1.5px solid #f0eef6;
  background: #ffffff !important;
`;
