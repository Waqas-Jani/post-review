import * as actionTypes from "../actions/types";

const initial = {
  tasks: [],
  problem: ["Software problem", "Computer hardware problem", "Printer problem"],
  cabinet: ["1", "2", "3"],
};
export default function (state = initial, action) {
  switch (action.type) {
    case actionTypes.SAVE_PROBLEM:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case actionTypes.CHANGE_STATUS:
      let update = state.tasks.map((el) =>
        el._id === action.payload
          ? Object.assign({}, { ...el, status: "solve" })
          : el
      );
      return { ...state, tasks: update };
    default:
      return state;
  }
}
