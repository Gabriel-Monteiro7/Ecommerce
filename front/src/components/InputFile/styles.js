import styled, { css } from "styled-components";
import { sm } from "../../styles/global";

export const Container = styled.div`
  position: relative;

  text-align: start;
  margin: 10px 0px;
  label,
  input,
  span {
    display: block;
  }
  width: 100%;
`;
export const Content = styled.div`
  width: 70%;
  @media (max-width: ${sm}px) {
    width: 100%;
  }
  margin: auto;
  background: #fff;
  border-radius: 6px;
  padding: 10px;
  li {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 15px;
    align-items: center;
  }
`;
const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  outline: none;
  width: 100%;
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
  p {
    margin: 0;
    padding: 5px;
  }
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const FileInfo = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    width: 78%;
    strong {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
    }
    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 36px !important;
  height: 36px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
