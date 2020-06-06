import styled from "styled-components";
import { md } from "../../styles/global";

const color = "#151515";

export default styled.div`
  background: ${color} !important; /* fallback for old browsers */
  color: white;
  padding: 40px 0px;
  border-top: 0.5px #9ba5b3;
  .copyright {
    border-top: 1px solid;
    padding-top: 20px;
    font-size: 13px;

    div {
      padding: 0px;
    }
    span {
      padding: 0px 10px;
      &:hover {
        color: white;
        cursor: pointer;
      }
    }
  }
  .icones {
    a {
      margin: 0px 5px;
      padding: 3px;
      svg {
        transition: 0.3s linear;
        font-size: 20px;
        opacity: 0.5;
        color: white;
      }
      &:hover {
        svg {
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: ${md}px) {
    padding-bottom: 97px;
  }
`;
