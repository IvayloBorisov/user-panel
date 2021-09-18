import { createContext, useState, useEffect } from "react";
import http from "../services/axios-common";

export const TeamsLocationsContext = createContext();

export const TeamsLocationsProvider = (props) => {
  const [teamsLocationsCtx, setTeamsLocationsCtx] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const [teams, locations] = await Promise.allSettled([
          http.get("/teams"),
          http.get("/offices"),
        ]);
        if (locations.status !== "fulfilled" || teams.status !== "fulfilled") {
          throw new Error("Something gone wrong!");
        }
        setTeamsLocationsCtx({
          teams: teams.value.data,
          locations: locations.value.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <TeamsLocationsContext.Provider value={{ teamsLocationsCtx }}>
      {props.children}
    </TeamsLocationsContext.Provider>
  );
};
