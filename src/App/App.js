import HomePage from "../pages/Home/HomePage";
import { AppProvider } from "../context/apiContext";
// import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <HomePage />
      </AppProvider>
    </div>
  );
};

export default App;
