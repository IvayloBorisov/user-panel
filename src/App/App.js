import HomePage from "../pages/Home/HomePage";
import { MembersProvider } from "../context/membersContext";
import {TeamsLocationsProvider} from '../context/teamsLocationsContext';
// import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MembersProvider>
        <TeamsLocationsProvider>
          <HomePage />
        </TeamsLocationsProvider>
      </MembersProvider>
    </div>
  );
};

export default App;
