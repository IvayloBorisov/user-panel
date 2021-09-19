import {
  FETCH_SUCCESS,
  REMOVE_MEMBER_BY_ID,
  SELECT_MEMBER,
  UNSELECT_MEMBER,
  SORT_MEMBERS
} from "./actions";
import sortAlphabet from "../services/sortAlphabet";

export const initState = {
  members: [],
  selectedMembers: [],
};

export const memberReducers = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        members: action.payload,
        selectedMembers: []
      };
    case REMOVE_MEMBER_BY_ID:
      return {
        ...state,
        members: state.members.filter(
          (member) => member._id !== action.payload
        ),
        selectedMembers: []
      };
    case SELECT_MEMBER:
      return {
        ...state,
        selectedMembers: [...state.selectedMembers, action.payload],
      };
    case UNSELECT_MEMBER:
      return {
        ...state,
        selectedMembers: state.selectedMembers.filter(
          (id) => id !== action.payload
        ),
      };
      case SORT_MEMBERS:
        return {
          ...state,
          members: sortAlphabet(state.members, action.payload)
        }
    default:
      return state;
  }
};
