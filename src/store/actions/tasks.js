import * as actionTypes from "./types";

export function saveProblem(data) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SAVE_PROBLEM,
      payload: data,
    });
  };
}

export function changeStatus(id) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CHANGE_STATUS,
      payload: id,
    });
  };
}
