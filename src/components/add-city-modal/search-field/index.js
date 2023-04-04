import { StyledSearchWrapper } from "./style";
import { Input } from "antd";
import { useTheme } from "../../../context/theme-context";

const { Search } = Input;

export const SearchFiled = ({ onSearch }) => {
  const { theme } = useTheme();

  return (
    <StyledSearchWrapper theme={theme}>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        onChange={onSearch}
        allowClear
      />
    </StyledSearchWrapper>
  );
};
