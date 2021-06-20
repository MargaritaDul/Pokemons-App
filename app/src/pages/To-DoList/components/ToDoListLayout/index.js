import ToDoListItem from "../ToDoListItem";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const ToDoListLayout = ({
  handleTaskCreate,
  tasksList,
  handleInputChange,
  inputValue,
  handleDeleteTask,
}) => {
  return (
    <div>
      <form>
        <Input
          value={inputValue}
          name="taskText"
          type="text"
          placeholder="WRITE TASK"
          onChange={handleInputChange}
        />

        <Button
          onClick={handleTaskCreate}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
      <div>
        {tasksList.map((task, index) => {
          return (
            <div key={index}>
              <ToDoListItem
                textValue={task.taskText}
                handleDeleteTask={() => handleDeleteTask(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoListLayout;
