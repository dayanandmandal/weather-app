import styled from "styled-components";

export const StyledSearchWrapper = styled.div`
  width: 100%;
  background: white;
  margin: 5px auto;
  position: absolute;
  top: 46px;
  left: 0;
  height: 50px;
  border-top: 1px solid rgba(222, 222, 222, 1);
  background: ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};

  .ant-input-wrapper {
    width: 75%;
    margin: 10px auto;
    .ant-input-affix-wrapper {
      background: ${(props) => (props.theme === "light" ? "white" : "black")};
      border-color: purple;
      box-shadow: none;
      .ant-input {
        background: ${(props) => (props.theme === "light" ? "white" : "black")};
        color: ${(props) => (props.theme === "light" ? "black" : "white")};
      }
    }

    .ant-input-group-addon {
      .ant-btn {
        background: ${(props) => (props.theme === "light" ? "white" : "black")};
        border-color: purple;
        .anticon {
          color: purple;
        }
      }
    }

    .ant-input-suffix {
      .ant-input-clear-icon {
        color: ${(props) => (props.theme === "light" ? "" : "white")};
      }
    }
  }
`;
