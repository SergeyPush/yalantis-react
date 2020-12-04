import { FETCH_USERS, SELECT_USER, RESTORE_SELECTED } from "./actionTypes";

const initState = {
  fetchedUsers: [],
  selectedUsers: [],
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, fetchedUsers: payload };

    case SELECT_USER:
      const candidate = state.selectedUsers.find(
        (user) => user.id === payload.id
      );
      if (!candidate) {
        return { ...state, selectedUsers: [...state.selectedUsers, payload] };
      }
      const updatedList = state.selectedUsers.filter(
        (user) => user.id !== payload.id
      );
      return { ...state, selectedUsers: updatedList };

    case RESTORE_SELECTED:
      return { ...state, selectedUsers: payload };

    default:
      return state;
  }
};
