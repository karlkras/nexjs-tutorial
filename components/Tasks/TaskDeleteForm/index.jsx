'use client';
import {createTaskCustom, deleteTask} from "@/utils/actions";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useFormState, useFormStatus} from "react-dom";

const initialState = {
  message: null
}

const SubmitBtn = () => {
  const {pending} = useFormStatus()
  return (
    <button className="btn btn-xs btn-error uppercase"  disabled={pending}>
      { pending ? "please wait..." : "delete" }
    </button>
  )
}

const TaskDeleteForm = ( {taskId} ) => {
  const [state, formAction] = useFormState(deleteTask, initialState);
  useEffect(() => {
    if(state.message) {
      if(state.message === "error!") {
        toast.error("there was an error.");
      } else {
        toast.success("Task Successfully Deleted.");
      }
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" value={taskId} name="id"/>
      <SubmitBtn />
    </form>
  )
}

export default TaskDeleteForm;