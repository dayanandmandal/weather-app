import styled from "styled-components";

export const StyledHeader = styled.div`
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 30px);
  padding: 0 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background: ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};

  .header-inside {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .open-city-modal {
    font-size: 120%;
  }
  .open-city-modal:hover {
    color: #ffaa33 !important;
    cursor: pointer;
  }
`;
