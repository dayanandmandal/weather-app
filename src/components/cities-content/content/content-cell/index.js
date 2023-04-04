import { StyledContentCellWrapper } from "./style";
import { DeleteOutlined } from "@ant-design/icons";
import { useCitiesDataDispatch } from "../../../../context/city-data-context";
import { useTheme } from "../../../../context/theme-context";

export const ContentCell = ({ activeCityId, city, handleClick }) => {
  const citiesDataDispatch = useCitiesDataDispatch();
  const { theme } = useTheme();
  return (
    <StyledContentCellWrapper theme={theme}>
      <div
        onClick={() => handleClick(city.id)}
        className={activeCityId === city.id ? "content active" : "content"}
      >
        {city.name}
        <br />
        {city.temp}
      </div>
      <div
        onClick={() => citiesDataDispatch({ type: "delete", id: city.id })}
        className={
          activeCityId === city.id ? "delete-icon active" : "delete-icon"
        }
      >
        <DeleteOutlined />
      </div>
    </StyledContentCellWrapper>
  );
};
