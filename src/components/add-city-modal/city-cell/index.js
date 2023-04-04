import { StyleCityCellWrapper } from "./style";
import { PlusCircleOutlined } from "@ant-design/icons";

export const CityCell = ({ clickHandler, details }) => {
  return (
    <StyleCityCellWrapper>
      <div>{details.name}</div>
      <PlusCircleOutlined
        onClick={() => clickHandler(details.id)}
        className="add-city-icon"
      />
    </StyleCityCellWrapper>
  );
};
