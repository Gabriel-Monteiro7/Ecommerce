import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import "react-circular-progressbar/dist/styles.css";

// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
html,body,#root{
  background: #f2f2f2;
      font-family: 'Lato', sans-serif;
      min-height: 100vh;
      scroll-behavior: smooth;
      .btn,a,button,input,textarea{
          outline:none;
        border:0px;
        background:transparent;
        text-decoration:none;
        &:hover{
          text-decoration:none;
        }
    }
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }
    ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;

}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #6E6E6E;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

.swal-overlay{
    outline:none;
}
.swal-title{
    font-size:18px;
}
.swal-footer{
    outline:none;
    text-align:center;
    .swal-button-container{
        width:100px;
        button{
            width:100%;
        }
        .swal-button--false{
            background:#ccc;

        }
        .swal-button--true{
            background:#FA5858;
        }
    }
}
`;
