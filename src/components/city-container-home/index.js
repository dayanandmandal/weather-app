import { StyledCityContainerWrapper } from "./style";
import { CityContainerHeader } from "./city-container-header";
import { useTheme } from "../../context/theme-context";

export const CityContainer = ({ city }) => {
  const { theme } = useTheme();

  return (
    <StyledCityContainerWrapper theme={theme}>
      <CityContainerHeader city={city} />
      <div className="city-container-content">
        <div className="city-desc-container">{city.desc}</div>
        <div>
          <span className="span-bold">Temperature: </span>
          {city.temp}
        </div>
        <div>
          <span className="span-bold">Humidity: </span>
          {city.humidity}
        </div>
      </div>
    </StyledCityContainerWrapper>
  );
};
