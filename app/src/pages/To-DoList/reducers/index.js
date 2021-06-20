import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  tasks: [],
};

const toDoListManagerReducer = handleActions(
  {
    [actions.ADD_TASK]: (state, { payload }) => {
      const newTask = {
        taskText: payload,
        isEditMode: false,
        isComplited: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    },
    [actions.DELETE_TASK]: (state, { payload }) => {
      const tasksCopy = [...state.tasks];
      tasksCopy.splice(payload, 1);
      return {
        ...state,
        tasks: tasksCopy,
      };
    },
  },
  defaultState
);

export default toDoListManagerReducer;
