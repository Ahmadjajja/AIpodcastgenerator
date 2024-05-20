import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import CustomRoutes from "./Pages/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <CustomRoutes />
    </div>
  );
}

export default App;
