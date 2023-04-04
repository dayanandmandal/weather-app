import "./App.css";
import AppRoutes from "./routes/app-routes";
import { BrowserRouter } from "react-router-dom";
import { CitiesDataContextProvider } from "./context/city-data-context";
import { ThemeContextProvider } from "./context/theme-context";
import { ToastComponent } from "./components/toast";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <CitiesDataContextProvider>
            <ThemeContextProvider>
              <AppRoutes />
            </ThemeContextProvider>
          </CitiesDataContextProvider>
        </BrowserRouter>
      </div>
      <ToastComponent />
    </>
  );
}

export default App;
