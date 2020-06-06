import React, { useState } from "react";
import { toast } from "react-toastify";
import history from "../../service//history";
import api from "../../service/api";
import Input from "../Input";
import InputFile from "../InputFile";
import { Button, Container } from "./styles";

export default function Form({ schema, fields = [], initialValue, update }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleSubmit({ name, image, description, value }, { resetForm }) {
    if (file !== null) {
      setLoading(true);
      api.post("insertImage", file).then(async (response) => {
        let product = {
          name,
          description,
          value,
          image: response.data,
        };
        if (update === true) {
          product.id = initialValue.id;
          let regex = /images\/(.*)/;
          await api
            .post("updateProduct", {
              product,
              oldImage: regex.exec(initialValue.image)[1],
            })
            .then((response) => {
              console.log(response);

              toast.success("Produto editado com sucesso");
            });
        } else {
          await api.post("newProduct", product).then((response) => {
            toast.success("Produto cadastrado com sucesso");
          });
        }
        history.goBack();
        resetForm();
      });
    }
  }
  return (
    <Container
      schema={schema}
      onSubmit={handleSubmit}
      initialData={initialValue}
    >
      {fields.map((input, index) => {
        return (
          <Input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeHolder}
            label={input.label}
            width={input.width}
            multLine={input.multLine}
          />
        );
      })}
      <InputFile
        setFile={(value) => {
          setFile(value);
        }}
      />
      <Button type="submit">
        {loading ? "Carregando..." : update ? "Editar" : "Cadastrar"}
      </Button>
    </Container>
  );
}
