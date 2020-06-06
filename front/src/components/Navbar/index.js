import React from "react";
import {
  Brand,
  ContainerNavBar,
  Icon,
  IconBars,
  NewContainer,
  NewNav,
  NewNavItem,
  NewNavLink,
} from "./styles";
export default function NavBar(props) {
  return (
    <>
      <ContainerNavBar expand="lg">
        <NewContainer>
          <Brand>
            <Icon />
          </Brand>
          {/* <ButtonToggle aria-controls="basic-navbar-nav">
            
          </ButtonToggle> */}
          <ContainerNavBar.Toggle aria-controls="basic-navbar-nav">
            <IconBars />
          </ContainerNavBar.Toggle>
          <ContainerNavBar.Collapse id="basic-navbar-nav">
            <NewNav>
              <NewNavItem>
                <NewNavLink to="/">Home</NewNavLink>
              </NewNavItem>
              <NewNavItem>
                <NewNavLink to="register">Novo Produto</NewNavLink>
              </NewNavItem>
            </NewNav>
          </ContainerNavBar.Collapse>
        </NewContainer>
      </ContainerNavBar>
    </>
  );
}
