import styled from "styled-components";

export const StyledCitiesContentWrapper = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  flex: 1 1 0;
  position: relative;
  padding-top: 55px;
  border-radius: 5px;

  /* height: calc(100vh - 24px); */
  /* max-width: max(40%, 400px); */

  .header-container {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }

  @media only screen and (max-width: 768px) {
    flex: 2 2 0;
    overflow: auto;
  }
`;
