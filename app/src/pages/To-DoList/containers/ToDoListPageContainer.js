import { useDispatch, useSelector } from "react-redux";

import { useCallback, useState } from "react";
import { ADD_TASK, DELETE_TASK } from "../actions";
import ToDoListLayoutLayout from "../../To-DoList/components/ToDoListLayout";

const ToDoListPageContainer = () => {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.toDoListManager);

  const [inputValue, setInputValue] = useState("");

  const handleTaskCreate = useCallback(() => {
    dispatch(ADD_TASK(inputValue));
  }, [dispatch, inputValue]);

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleDeleteTask = useCallback((index) => {
    dispatch(DELETE_TASK(index));
  }, []);

  return (
    <ToDoListLayoutLayout
      handleTaskCreate={handleTaskCreate}
      tasksList={tasks}
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      handleDeleteTask={handleDeleteTask}
    />
  );
};

export default ToDoListPageContainer;
