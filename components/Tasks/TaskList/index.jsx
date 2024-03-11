import {getAllTasks} from "@/utils/actions";
import Task from "@/components/Tasks/Task";

const TaskList = async () => {
  const theTasks = await getAllTasks();

  if(!theTasks.length) {
    return (
      <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
    )
  }

  return (
    <div>
      <ul className="mt-8">
        {theTasks.map(aTask => (
          <li
            key={aTask.id}
            className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
          >
            <Task task={aTask}/>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default TaskList;