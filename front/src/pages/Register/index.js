import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import { fields, schema } from "./data";
import { Container, Title } from "./styles";

export default function Register({ history }) {
  const [product, setProduct] = useState(
    history.location.state?.product || {
      name: "",
      value: 0,
      description: "",
      image: {},
    }
  );
  useEffect(() => {}, []);
  return (
    <Container>
      <Title>{product.value > 0 ? "Editar Produto" : "Novo Produto"}</Title>
      <Form
        schema={schema}
        fields={fields}
        initialValue={product}
        update={product.value > 0 ? true : false}
      />
    </Container>
  );
}
