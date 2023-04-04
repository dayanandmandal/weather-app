import { Modal } from "antd";
import { CityCell } from "./city-cell";
import { SearchFiled } from "./search-field";
import { StyledAddCityModalWrapper } from "./style";
import { useState } from "react";
import Fuse from "fuse.js";
import {
  useCitiesData,
  useCitiesDataDispatch,
} from "../../context/city-data-context";
import { useTheme } from "../../context/theme-context";

export const AddCityModal = ({ isModalOpen, setIsModalOpenHandler }) => {
  const CitiesData = useCitiesData();
  const dispatchCitiesData = useCitiesDataDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { theme } = useTheme();

  const dispatchCitiesDataSelectHandler = (cityId) => {
    dispatchCitiesData({
      type: "select",
      id: cityId,
    });
  };

  const searchQueryHandler = (searchKey) => {
    let query;
    if (typeof searchKey === "object") {
      query = searchKey.target.value;
    } else {
      query = searchKey;
    }
    query = query.trim();
    setSearchQuery(query);
  };

  const fuse = new Fuse(CitiesData["unSelectedCities"], {
    keys: ["name"],
  });

  const searchData =
    searchQuery === ""
      ? CitiesData["unSelectedCities"]
      : fuse.search(searchQuery).map((obj) => obj.item);

  return (
    <StyledAddCityModalWrapper>
      <Modal
        className={"add-city-modal-" + theme}
        title="Add City Modal"
        open={isModalOpen}
        onCancel={setIsModalOpenHandler}
        footer={null}
        bodyStyle={{
          maxHeight: "50vh",
          overflow: "auto",
          paddingTop: "58px",
        }}
      >
        <SearchFiled onSearch={searchQueryHandler} />
        {searchData.length === 0 ? (
          <div>No city found.</div>
        ) : (
          searchData.map((city) => (
            <CityCell
              key={city.id}
              clickHandler={dispatchCitiesDataSelectHandler}
              details={city}
            />
          ))
        )}
      </Modal>
    </StyledAddCityModalWrapper>
  );
};
