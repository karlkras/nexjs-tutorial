
import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          name="content"
          required
          className="input input-bordered join-item w-full"
          placeholder="Task Description"
        />
        <button className="btn btn-primary join-item uppercase">add</button>
      </div>

    </form>
  )
}

export default TaskForm;