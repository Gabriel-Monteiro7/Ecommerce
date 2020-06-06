import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
  value: Yup.number()
    .positive("Insira valores positivos")
    .integer("Insira um valor inteiro")
    .required("Campo obrigatório")
    .max(100000, "Coloque um valor abaixo de 100000"),
});

export const fields = [
  {
    type: `text`,
    placeHolder: "Digite nome do produto",
    label: "Produto",
    name: "name",
    width: 48,
  },
  {
    width: 48,
    type: "number",
    placeHolder: "",
    label: "Preço",
    name: "value",
  },
  {
    type: "text",
    placeHolder: "Digite a descrição do produto",
    label: "Descrição",
    name: "description",
    multLine: true,
  },
];
