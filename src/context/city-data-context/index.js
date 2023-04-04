import { createContext, useReducer, useContext, useEffect } from "react";
import { InitialCitiesData } from "../../components/constant";
import { toast } from "react-toastify";

export const CitiesDataContext = createContext(null);
export const CitiesDataDispatchContext = createContext(null);

if (localStorage.getItem("citiesData") === null) {
  localStorage.setItem("citiesData", JSON.stringify(InitialCitiesData));
}

export const CitiesDataContextProvider = ({ children }) => {
  const [citiesData, dispatchCitiesData] = useReducer(
    citiesDataStateReducer,
    JSON.parse(localStorage.getItem("citiesData"))
  );

  useEffect(() => {
    localStorage.setItem("citiesData", JSON.stringify(citiesData));
  }, [citiesData]);

  function citiesDataStateReducer(currentCitiesData, action) {
    switch (action.type) {
      case "select": {
        const unSelectedCities = [...currentCitiesData.unSelectedCities];
        const selectedCities = [...currentCitiesData.selectedCities];
        const selectedIndex = unSelectedCities.findIndex(
          (city) => city.id === action.id
        );
        const [cityData] = unSelectedCities.splice(selectedIndex, 1);
        cityData.isFavorite = false;
        selectedCities.push(cityData);
        toast.success(cityData.name + " city added");
        return {
          unSelectedCities: [...unSelectedCities],
          selectedCities: [...selectedCities],
        };
      }

      case "toggleFavorite": {
        const citiesData = structuredClone(currentCitiesData);
        const temp = citiesData.selectedCities.find(
          (city) => city.id === action.id
        );
        temp.isFavorite = !temp.isFavorite;
        const msg = temp.isFavorite
          ? "city moved to favorite"
          : "city removed from favorite";
        toast.success(temp.name + " " + msg);
        return citiesData;
      }

      case "delete": {
        const unSelectedCities = [...currentCitiesData.unSelectedCities];
        const selectedCities = [...currentCitiesData.selectedCities];
        const deleteIndex = selectedCities.findIndex(
          (city) => city.id === action.id
        );
        const [data] = selectedCities.splice(deleteIndex, 1);
        delete data.isFavorite;
        unSelectedCities.push(data);
        toast.success(data.name + " city removed");
        return {
          unSelectedCities: unSelectedCities,
          selectedCities: selectedCities,
        };
      }

      default:
        alert("Error in selecting.", action);
    }
    // return currentCitiesData;
  }

  return (
    <>
      <CitiesDataContext.Provider value={citiesData}>
        <CitiesDataDispatchContext.Provider value={dispatchCitiesData}>
          {children}
        </CitiesDataDispatchContext.Provider>
      </CitiesDataContext.Provider>
    </>
  );
};

export const useCitiesData = () => useContext(CitiesDataContext);
export const useCitiesDataDispatch = () =>
  useContext(CitiesDataDispatchContext);
