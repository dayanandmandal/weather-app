import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 140px;
  // not used *{box-sizing: border-box} thats why padding
  // get added to total height
  background: ${(props) => (props.theme === "light" ? "purple" : "black")};
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  z-index: 10;

  .sidebar-option {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .theme-container {
    padding: 15px;
    cursor: pointer;
  }

  .theme-container:hover {
    background: #c3b1e1;
    color: black;
  }

  .sidebar-tab-container {
    padding: 15px;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  .active {
    background: #ffaa33;
    color: black;
  }

  .sidebar-tab-container:not(.active):hover {
    color: black;
    background: #c3b1e1;
  }

  @media only screen and (max-width: 768px) {
    height: 53px;
    bottom: 0;
    width: 100%;
    flex-direction: row;

    .sidebar-option {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 769px) {
    top: 0;
    height: 90vh;
    padding-bottom: 10vh;
  }
`;
