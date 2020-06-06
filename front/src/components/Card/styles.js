import { FiEdit3, FiTrash } from "react-icons/all";
import styled from "styled-components";
import { md, sm } from "../../styles/global";
export const Container = styled.div`
  height: 480px;
  background: #ffffff;
  width: 30%;
  outline: none;
  box-shadow: 0px 21px 47px -48px rgba(17, 17, 17, 1);
  border: 0px;
  border-radius: 6px;
  cursor: pointer;
  margin: 20px 15px;
  position: relative;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: ${md}px) {
    width: 45%;
  }
  @media (max-width: ${sm}px) {
    width: 100%;
  }
`;
export const Image = styled.div`
  width: 100%;
  border-radius: 6px 6px 0px 0px;
  height: 250px;
  background-image: url(${(props) => props.image});
  background-color: #111111;
  background-size: cover;
  background-position: center;
`;
export const Information = styled.div`
  padding: 25px;
  min-height: 230px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 16px;
  p {
    color: #58585b;
    text-transform: uppercase;
    letter-spacing: 1px;

    margin: 0px;
    min-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    /* white-space: nowrap; */
    width: 100%;
  }
`;
export const Value = styled.div`
  color: #2948ff;
  font-size: 16px;
  font-weight: bold;
`;
export const Description = styled.div`
  font-size: 12px;
  margin: 15px 0px 5px;
  line-break: anywhere;
  min-height: 54px;
`;
export const ContainerICon = styled.div`
  margin-top: 30px;
  svg {
    font-size: 14px;
  }
`;
export const Button = styled.button`
  color: white;
  border-radius: 5px;
  opacity: 0.7;
  background: #151515 !important;
  margin-right: 4px;
  padding: 2px 7px;
  &:hover {
    opacity: 1;
    background: ${(props) => props.background} !important;
  }
`;
export const IconDelete = styled(FiTrash)``;
export const IconUpdate = styled(FiEdit3)``;
