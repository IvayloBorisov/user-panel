export const FETCH_MEMBERS = "FETCH_MEMBERS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_MEMBER = "ADD_MEMBER";
export const REMOVE_MEMBER_BY_ID = "REMOVE_MEMBER_BY_ID";
export const SELECT_MEMBER = "SELECT_MEMBER";
export const UNSELECT_MEMBER = "UNSELECT_MEMBER";

export const fetchMembers = () => ({
  type: FETCH_MEMBERS,
});

export const fetchSuccess = (response) => ({
  type: FETCH_SUCCESS,
  payload: response,
});

export const addMember = (member) => ({
  type: ADD_MEMBER,
  payload: member,
});

export const deleteById = (id) => ({
  type: REMOVE_MEMBER_BY_ID,
  payload: id,
});

export const selectMember = (id) => ({
  type: SELECT_MEMBER,
  payload: id
});

export const unSelectMember = (id) => ({
  type: UNSELECT_MEMBER,
  payload: id
});
