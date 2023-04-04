import { Routes, Route } from "react-router-dom";
import { PathName } from "../components/constant";
import Cities from "../pages/cities";
import Home from "../pages/home";
import PageNotFound from "../pages/page-not-found";
import { SidebarTabs } from "../components/constant";
import { Sidebar } from "../components/sidebar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={PathName.home}
        element={<Sidebar sidebarTabs={SidebarTabs} />}
      >
        <Route index element={<Home />} />
        <Route path={PathName.cities} element={<Cities />} />
        <Route path={PathName.noMatch} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
