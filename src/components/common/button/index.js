import { ButtonStyled } from "./style";

export const Button = (props) => {
  let { text, handleClick } = props;

  return <ButtonStyled onClick={handleClick}>{text}</ButtonStyled>;
};
