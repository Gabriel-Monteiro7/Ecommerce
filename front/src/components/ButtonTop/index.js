import React, { useState, useEffect } from "react";

// import { Container } from './styles';
import { FaChevronUp } from "react-icons/fa";
import StyledButton from "./styles";
export default function ButtonTop(props) {
  const [positionTop, setPositionTop] = useState(0);

  useEffect(() => {
    window.onscroll = () => setPositionTop(window.pageYOffset);
  }, []);
  return (
    <StyledButton
      href={"#root"}
      className={`fixed-bottom ${positionTop > 100 ? "visible" : "invisible"}`}
    >
      <FaChevronUp />
    </StyledButton>
  );
}
