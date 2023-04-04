import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
  .home-content-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    padding: 96px 20px 20px;
    color: ${(props) => (props.theme === "light" ? "black" : "white")};

    @media only screen and (max-width: 768px) {
      justify-content: center;
    }
  }
`;
