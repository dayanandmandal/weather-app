import styled from "styled-components";

export const StyledCitiesWrapper = styled.div`
  margin: 12px;
  height: calc(100vh - 24px);
  display: flex;
  gap: 15px;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: calc(100vh - 24px - 53px);
  }
`;
