import { StyledContent } from "./style";
import { ContentCell } from "./content-cell";
import { useCitiesData } from "../../../context/city-data-context";
import { useTheme } from "../../../context/theme-context";

export const Content = ({ activeCityId, handleClick }) => {
  const citiesData = useCitiesData();
  const { theme } = useTheme();
  return (
    <StyledContent color="red" theme={theme}>
      {citiesData.selectedCities.length === 0
        ? "You have not selected any city."
        : citiesData.selectedCities.map((city) => (
            <ContentCell
              key={city.id}
              activeCityId={activeCityId}
              handleClick={handleClick}
              city={city}
            />
          ))}
    </StyledContent>
  );
};
