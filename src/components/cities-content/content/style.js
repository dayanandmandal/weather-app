import styled from "styled-components";

export const StyledContent = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100% - 20px);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: scroll;
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  background: ${(props) =>
    props.theme === "light" ? "white" : "rgba(0,0,0,0.2)"};
`;
