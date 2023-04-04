import { StyledCitiesContentWrapper } from "./style";
import { Header } from "./header";
import { Content } from "./content";

export const CitiesContent = ({ activeCityId, handleClick }) => {
  return (
    <StyledCitiesContentWrapper>
      <Header />
      <Content activeCityId={activeCityId} handleClick={handleClick} />
    </StyledCitiesContentWrapper>
  );
};
