import { HeaderStyledWrapper } from "./style";
import { Button } from "../common/button";
import { AddCityModal } from "../add-city-modal";
import { useState } from "react";
import { useTheme } from "../../context/theme-context";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setIsModalOpenHandler = () => setIsModalOpen((prev) => !prev);
  const { theme } = useTheme();

  return (
    <>
      <HeaderStyledWrapper theme={theme}>
        <div>My Favorite City</div>
        <Button text={"Add New City"} handleClick={setIsModalOpenHandler} />
      </HeaderStyledWrapper>
      {isModalOpen ? (
        <AddCityModal
          isModalOpen={isModalOpen}
          setIsModalOpenHandler={setIsModalOpenHandler}
        />
      ) : (
        ""
      )}
    </>
  );
};
