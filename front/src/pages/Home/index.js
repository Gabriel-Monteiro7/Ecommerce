import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import load from "../../assets/load.json";
import Card from "../../components/Card";
import api from "../../service/api";
import { Container, ContainerProducts, NoProduct, Load } from "./styles";
export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [products, setProducts] = useState(null);
  async function getProduct() {
    await api.get().then((response) => {
      return setProducts(response.data);
    });
  }

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, []);
  return (
    <Container>
      {products === null ? (
        <Load>
          <Lottie options={defaultOptions} />
        </Load>
      ) : (
        <ContainerProducts>
          {products.length === 0 ? (
            <NoProduct>Não existe produtos cadastrados</NoProduct>
          ) : (
            <>
              {products.map((product, index) => {
                return (
                  <Card
                    key={index}
                    productCard={product}
                    setProducts={(value) => {
                      setProducts(value);
                    }}
                    products={products}
                  />
                );
              })}
            </>
          )}
        </ContainerProducts>
      )}
    </Container>
  );
}
