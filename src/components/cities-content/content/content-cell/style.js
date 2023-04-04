import styled from "styled-components";

export const StyledContentCellWrapper = styled.div`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  background: ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};

  .content:not(.active):hover {
    background: #ffaa33;
  }

  .content {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px 10px;
    flex: 1 1 0;
  }

  .active {
    background: rgba(128, 0, 128, 0.8);
    color: white;
  }

  .delete-icon {
    width: 10%;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  .delete-icon:hover {
    background: #ffaa33;
  }
`;
