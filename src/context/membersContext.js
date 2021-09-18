import { createContext, useEffect, useReducer } from "react";
import {fetchMembers, fetchSuccess} from './actions';
import { useState } from "react";
import {memberReducers, initState} from './membersReducer';

import http from "../services/axios-common";

export const MembersContext = createContext();

export const MembersProvider = (props) => {
  const [membersState, membersDispatch] = useReducer(memberReducers, initState);
  const [isUpdateMembers, setUpdateMembers] = useState(false);

  useEffect(() => {
    membersDispatch(fetchMembers());
    const getData = async () => {
      try {
        const response = await http.get("/members")
        if (response.status !== 200) {
          throw new Error("Something gone wrong!");
        }

        membersDispatch(fetchSuccess(response.data));
        setUpdateMembers(!setUpdateMembers);
        
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [isUpdateMembers]);

  return (
    <MembersContext.Provider value={{membersState, membersDispatch, isUpdateMembers, setUpdateMembers}}>
      {props.children}
    </MembersContext.Provider>
  );
};
