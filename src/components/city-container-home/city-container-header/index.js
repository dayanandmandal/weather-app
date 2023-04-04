import { StyledCityContainerHeaderWrapper } from "./style";
import { StarFilled } from "@ant-design/icons";
import { useCitiesDataDispatch } from "../../../context/city-data-context";

export const CityContainerHeader = ({ city }) => {
  let citiesDataDispatch = useCitiesDataDispatch();

  return (
    <StyledCityContainerHeaderWrapper>
      {city.name}
      <StarFilled
        onClick={() =>
          citiesDataDispatch({
            type: "toggleFavorite",
            id: city.id,
          })
        }
        style={{ color: "#ffaa33", fontSize: "150%", cursor: "pointer" }}
      />
    </StyledCityContainerHeaderWrapper>
  );
};
