import TaskList from "@/components/Tasks/TaskList";
import TaskFormCustom from "@/components/Tasks/TaskFormCustom";

const TaskRoot = () => {
  return (
    <div>
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}

export default TaskRoot;