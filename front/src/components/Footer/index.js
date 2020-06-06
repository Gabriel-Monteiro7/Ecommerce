import React from "react";

// import { Container } from './styles';
import StyleFooter from "./styles";
import { FaGithubAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
// import Logo from "../Logo";
import { Container } from "react-bootstrap";
export default function Footer() {
  const year = new Date();

  return (
    <StyleFooter>
      <Container>
        <div className="row">
          <div className="col-3">{/* <Logo /> */}</div>
          <div className="text-center py-3 col-12 py-3 ">
            <span className="">follow us on social media:</span>

            <div className="text-muted py-2 d-flex justify-content-center align-items-center icones">
              <a
                href="https://www.facebook.com/"
                title="Ir para pagina no facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/login?lang=pt"
                title="Ir para pagina no Twitter"
              >
                <FaTwitter />
              </a>
              <a href="https://github.com/" title="Ir para pagina no GitHub">
                <FaGithubAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright text-muted row text-lg-left text-center">
          <div className="col-12 col-lg-4">
            © {year.getFullYear()} Todos os direitos reservados.
          </div>
        </div>
      </Container>
    </StyleFooter>
  );
}
