import axios from "axios";
import { FETCH_USERS, RESTORE_SELECTED } from "./actionTypes";

const BASE_URL =
  "https://yalantis-react-school-api.yalantis.com/api/task0/users";

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(BASE_URL);

  dispatch({
    type: FETCH_USERS,
    payload: response.data,
  });
};

export const restoreSelected = () => (dispatch) => {
  try {
    const data = localStorage.getItem("selectedUsers");
    if (data) {
      dispatch({
        type: RESTORE_SELECTED,
        payload: JSON.parse(data),
      });
    }
  } catch (error) {
    console.log(error);
  }
};
