import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastComponent = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1000}
      bodyStyle={{ background: "green", color: "white" }}
      toastStyle={{ background: "green", color: "white" }}
    />
  );
};
