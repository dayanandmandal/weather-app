import styled from "styled-components";

export const StyledCityContainerWrapper = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 15px;
  min-width: 225px;
  max-width: 300px;
  flex: 1 1 0;
  border-radius: 5px;
  background: ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};

  .city-desc-container {
    padding: 10px 0;
  }

  .span-bold {
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }
`;
