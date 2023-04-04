import { StyledCitiesWrapper } from "./style";
import { CitiesContent } from "../../components/cities-content";
import { ShowCitiesDetails } from "../../components/show-cities-details";
import { useState } from "react";

const Cities = () => {
  const [cityDetailShowingId, setCityDetailsShowingId] = useState({
    id: -1,
  });

  const setCityDetailsShowingIdHandler = (id) => {
    setCityDetailsShowingId(id);
  };

  return (
    <StyledCitiesWrapper>
      <CitiesContent
        activeCityId={cityDetailShowingId}
        handleClick={setCityDetailsShowingIdHandler}
      />
      <ShowCitiesDetails cityId={cityDetailShowingId} />
    </StyledCitiesWrapper>
  );
};

export default Cities;
