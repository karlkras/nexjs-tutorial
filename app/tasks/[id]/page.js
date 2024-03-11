import EditTask from "@/components/Tasks/TaskEdit";
import Link from "next/link";

const EditTaskPage = ({ params }) => {
  return (
    <>
      <EditTask id={params.id} />
    </>

  )

}

export default EditTaskPage;