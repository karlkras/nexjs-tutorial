import Link from "next/link";
import TaskDeleteForm from "@/components/Tasks/TaskDeleteForm";

const Task = ( {task} ) => {
  const {completed, content, id } = task;
  return (
    <>
      <h2 className={`text-lg ${completed ? 'line-through' : ""}`}>
        {content}
      </h2>
      <div className="flex gap-6 items-center">
        <Link href={`/tasks/${id}`} className="btn btn-accent btn-xs">
          Edit
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <TaskDeleteForm taskId={id}/>
      </div>
    </>
  )
}

export default Task;