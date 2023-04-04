import StyledComponents from "styled-components";

export const HeaderStyledWrapper = StyledComponents.div`
position: fixed;
top: 0;

border-bottom: 2px solid ${(props) =>
  props.theme === "light" ? "rgb(222, 222, 222)" : "rgb(128, 128, 128)"};
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 25px;
font-weight: 750;
background: ${(props) => (props.theme === "light" ? "white" : "black")};
color: ${(props) => (props.theme === "light" ? "black" : "white")};
@media only screen and (max-width: 768px) {
  width: calc(100% - 50px);
}

@media only screen and (min-width: 769px) {
  width: calc(100% - 190px);
}

`;
