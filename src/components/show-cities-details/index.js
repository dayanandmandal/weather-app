import { StyledShowCitiesDetailsWrapper } from "./style";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useCitiesDataDispatch } from "../../context/city-data-context";
import { useCitiesData } from "../../context/city-data-context";
import { useTheme } from "../../context/theme-context";

export const ShowCitiesDetails = ({ cityId }) => {
  let citiesDataDispatch = useCitiesDataDispatch();
  const citiesDataDispatchHandler = (cityId) => {
    citiesDataDispatch({
      type: "toggleFavorite",
      id: cityId,
    });
  };

  const citiesData = useCitiesData();
  const city = citiesData.selectedCities.find((c) => c.id === cityId);

  const { theme } = useTheme();

  return cityId === -1 || city === undefined ? (
    <StyledShowCitiesDetailsWrapper theme={theme}>
      <div className="city-details-content">Click on city.</div>
    </StyledShowCitiesDetailsWrapper>
  ) : (
    <StyledShowCitiesDetailsWrapper theme={theme}>
      <div className="city-details-header-wrapper">
        <div className="city-details-header">
          {city.name}
          {city.isFavorite ? (
            <StarFilled
              onClick={() => citiesDataDispatchHandler(city.id)}
              style={{ color: "#ffaa33", fontSize: "150%", cursor: "pointer" }}
            />
          ) : (
            <StarOutlined
              onClick={() => citiesDataDispatchHandler(city.id)}
              style={{ fontSize: "150%", cursor: "pointer" }}
            />
          )}
        </div>
      </div>
      <div className="city-details-content">
        <div>{city.desc}</div>
        <div>
          <span className="span-bold">Temperature: </span>
          {city.temp}
        </div>
        <div>
          <span className="span-bold">Humidity: </span>
          {city.humidity}
        </div>
      </div>
    </StyledShowCitiesDetailsWrapper>
  );
};
