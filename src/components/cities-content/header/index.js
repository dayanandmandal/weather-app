import { PlusCircleOutlined } from "@ant-design/icons";
import { StyledHeader } from "./style";
import { useState } from "react";
import { AddCityModal } from "../../add-city-modal";
import { useTheme } from "../../../context/theme-context";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setIsModalOpenHandler = () => setIsModalOpen((prev) => !prev);
  const { theme } = useTheme();
  const themeColor = theme === "light" ? "black" : "white";

  return (
    <>
      <StyledHeader theme={theme}>
        <div className="header-inside">
          <p>Cities</p>
          <PlusCircleOutlined
            className="open-city-modal"
            onClick={setIsModalOpenHandler}
            style={{ color: themeColor }}
          ></PlusCircleOutlined>
        </div>
      </StyledHeader>
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
