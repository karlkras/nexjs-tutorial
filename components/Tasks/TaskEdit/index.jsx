import {getTask, updateTask} from "@/utils/actions";
import Link from "next/link";

const EditTask = async ({id}) => {
  const theTask = await getTask(id);
  const {content, completed} = theTask;
  return (
    <>
      <dialog open>
        <form
          action={updateTask}
          className="max-w-sm p-12 border border-base-300 rounded"
        >
          <input
            name="content"
            defaultValue={content}
            className="input input-bordered w-full"
            required
          />
          <input
            name="id"
            type="hidden"
            defaultValue={theTask.id}
          />
          <div className="form-control">
            <label htmlFor="completed" className="label cursor-pointer">
              <span className="label-text">completed</span>
              <input
                type="checkbox"
                id="completed"
                name="completed"
                defaultChecked={completed}
                className="checkbox checkbox-primary checkbox-sm"
              />
            </label>
          </div>
          <button className="btn btn-primary btn-block btn-sm uppercase">Update</button>
          <Link href="/tasks" className="mt-2 btn btn-accent btn-block btn-sm uppercase">
            cancel
          </Link>
        </form>
      </dialog>
    </>
  )
}
export default EditTask
