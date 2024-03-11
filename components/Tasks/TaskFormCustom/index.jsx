'use client';
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import {useEffect} from "react";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const {pending} = useFormStatus()
  return (
    <button className="btn btn-primary join-item uppercase" disabled={pending}>
      { pending ? "please wait..." : "create task" }
    </button>
  )
}

const initialState = {
  message: null
}

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if(state.message) {
      if(state.message === "error!") {
        toast.error("there was an error.");
      } else {
        toast.success("Task created successfully.");
      }
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          name="content"
          required
          className="input input-bordered join-item w-full"
          placeholder="Task Description"
        />
        <SubmitBtn />
      </div>

    </form>
  )
}

export default TaskForm;