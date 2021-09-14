import { createContext, useState, useEffect } from "react";
import http from "../services/axios-common";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [apiContext, setApiContext] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const [locations, teams, members] = await Promise.allSettled([
          http.get("/offices"),
          http.get("/teams"),
          http.get("/members"),
        ]);

        if (
          locations.status !== "fulfilled" ||
          teams.status !== "fulfilled" ||
          members.status !== "fulfilled"
        ) {
          throw new Error("Something gone wrong!");
        }
        setApiContext({
          locations: locations.value.data,
          teams: teams.value.data,
          members: members.value.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <AppContext.Provider value={apiContext}>
      {props.children}
    </AppContext.Provider>
  );
};
