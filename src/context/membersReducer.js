import {
  FETCH_MEMBERS,
  FETCH_SUCCESS,
  ADD_MEMBER,
  REMOVE_MEMBER_BY_ID,
  SELECT_MEMBER,
  UNSELECT_MEMBER,
} from "./actions";

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
    default:
      return state;
  }
};
