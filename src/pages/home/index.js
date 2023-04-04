import { StyledHomeWrapper } from "./style";
import { CityContainer } from "../../components/city-container-home";
import { useCitiesData } from "../../context/city-data-context/index";
import { useTheme } from "../../context/theme-context";
import { Header } from "../../components/header";

const Home = () => {
  const citiesData = useCitiesData();
  const citiesDataFavorite = citiesData.selectedCities.filter(
    (city) => city.isFavorite === true
  );
  const isFavoriteEmpty = citiesDataFavorite.length === 0;
  const { theme } = useTheme();

  return (
    <StyledHomeWrapper theme={theme}>
      <Header />
      <div className="home-content-wrapper">
        {isFavoriteEmpty && "You have not selected any city as a favorite yet."}
        {!isFavoriteEmpty &&
          citiesDataFavorite.map((city) => (
            <CityContainer key={city.id} city={city} />
          ))}
      </div>
    </StyledHomeWrapper>
  );
};

export default Home;
