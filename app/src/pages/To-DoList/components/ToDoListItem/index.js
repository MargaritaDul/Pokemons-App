import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "./styles.module.scss";

const ToDoListItem = ({ textValue, handleDeleteTask }) => {
  return (
    <div className={styles.itemWrapper}>
      <IconButton aria-label="delete" onClick={handleDeleteTask}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <CreateIcon />
      </IconButton>
      <p>{textValue}</p>
      <Checkbox
        color="primary"
        name="isCompleted"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};
export default ToDoListItem;
