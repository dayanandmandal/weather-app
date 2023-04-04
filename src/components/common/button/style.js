import StyleComponents from "styled-components";

export const ButtonStyled = StyleComponents.div`
    width: 120px;
    text-align: center;
    padding: 10px;
    background-color: purple;
    color: white;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
        background-color: #ffaa33;
        color: black;
    }
`;
