import { Form } from "@rocketseat/unform";
import styled from "styled-components";
import { sm } from "../../styles/global";
export const Container = styled(Form)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Button = styled.button`
  margin-top: 20px;
  background: #2948ff !important;
  width: 35%;
  color: #ffffff;
  font-size: 16px;
  padding: 11px;
  transition: 0.5s ease-in-out opacity;
  opacity: 0.85;
  font-weight: bold;
  border-radius: 6px;
  &:hover {
    opacity: 1;
  }
  @media (max-width: ${sm}px) {
    width: 50%;
  }
`;
