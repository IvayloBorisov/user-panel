import { PageHeader } from "../components";
import { AppProvider } from "../context/apiContext";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <PageHeader />
      </AppProvider>
    </div>
  );
};

export default App;
