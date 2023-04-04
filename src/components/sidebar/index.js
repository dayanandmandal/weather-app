import { SidebarWrapper } from "./style";
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../../context/theme-context";

export const Sidebar = ({ sidebarTabs }) => {
  const { theme, setTheme } = useTheme();

  const onClickThemeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <SidebarWrapper theme={theme}>
        <div className="sidebar-option">
          {sidebarTabs &&
            sidebarTabs.map((tab) => {
              return (
                <NavLink
                  to={tab.link}
                  key={tab.name}
                  className="sidebar-tab-container"
                >
                  {tab.name}
                </NavLink>
              );
            })}
        </div>
        <div className="theme-container" onClick={onClickThemeHandler}>
          Theme
        </div>
      </SidebarWrapper>
      <Outlet />
    </>
  );
};
