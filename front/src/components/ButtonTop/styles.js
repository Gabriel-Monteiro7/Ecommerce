import styled from "styled-components";

export default styled.a`
  transition: 0.1s ease-in-out;
  font-size: 40px;
  left: inherit;
  right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  svg {
    transition: 0.5s ease-in-out opacity;
    color: white;
    border-radius: 50%;
    background: #2948ff;
    padding: 14px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
