import styled from "styled-components";

export const StyleCityCellWrapper = styled.div`
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(222, 222, 222, 0.5);
  font-weight: 700;
  margin-bottom: 5px;
  border-radius: 2px;
  margin-right: 5px;

  .add-city-icon {
    font-size: 120%;
  }
  .add-city-icon:hover {
    color: #ffaa33;
    cursor: pointer;
  }
`;
