import React from "react";
import { Container, Field } from "./styles";
export default function Input({
  multLine,
  width,
  placeholder,
  label,
  name,
  type,
}) {
  return (
    <Container width={width || 100}>
      <Field
        maxLength={name === "name" ? 50 : 120}
        multiline={multLine || false}
        name={name}
        type={type}
        placeholder={placeholder}
        label={label}
      />
    </Container>
  );
}
