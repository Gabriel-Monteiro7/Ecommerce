import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import api from "../../service/api";
import history from "../../service/history";
import { formatPrice } from "../../util";
import {
  Button,
  Container,
  ContainerICon,
  Description,
  IconDelete,
  IconUpdate,
  Image,
  Information,
  Value,
} from "./styles";

export default function Card({ productCard, setProducts, products }) {
  const [product, setProduct] = useState({});
  function deleteProduct(id) {
    swal({
      title: "Tem certeza que deseja deletar o produto ?",
      buttons: { false: "Cancelar", true: "Deletar" },
    }).then(async (willDelete) => {
      if (willDelete === "true") {
        await api.post("deleteProduct", { id: id }).then((response) => {
          toast.success("Produto deletado com sucesso");
          setProducts(
            products.filter((product) => {
              return product.id === id ? false : true;
            })
          );
        });
      }
    });
  }
  async function updateProduct(product) {
    history.push("/register", { product });
  }
  useEffect(() => {
    setProduct(productCard);
  }, [productCard]);
  return (
    <Container>
      <Image image={product.image} />
      <Information>
        <div>
          <p>{product.name}</p>
          <Description>{product.description}</Description>
          <Value>{formatPrice(product.value)}</Value>
        </div>

        <ContainerICon>
          <Button
            background={"#5858FA"}
            title={`Editar: ${product.name}`}
            onClick={() => {
              updateProduct(product);
            }}
          >
            <IconUpdate />
          </Button>
          <Button
            background={"#FA5858"}
            title={`Deletar: ${product.name}`}
            onClick={() => {
              deleteProduct(product.id);
            }}
          >
            <IconDelete />
          </Button>
        </ContainerICon>
      </Information>
    </Container>
  );
}
