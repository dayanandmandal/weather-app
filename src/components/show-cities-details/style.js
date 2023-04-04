import styled from "styled-components";

export const StyledShowCitiesDetailsWrapper = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  flex: 2 2 0;
  border-radius: 5px;
  background: ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};

  .city-details-header-wrapper {
    width: 100%;
  }

  .city-details-header {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    font-weight: 700;
  }

  .city-details-content {
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .span-bold {
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    flex: 1 1 0;
  }
`;
