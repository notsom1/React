import Button from "../components/Button";
import FormField from "../components/FormField";
import TextButton from "../components/TextButton";
import { useRef } from "react";

export default function CreateProjectView({ className, addProject, setView }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const now = new Date();
  const formattedDate = now.toISOString().substring(0, 10);

  function onSave() {
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
      tasks: [],
    };

    addProject(newProject);
    setView("Home");
  }

  return (
    <div className={`${className} ml-6 xl:mr-60 mr-20`}>
      <div className="flex justify-end gap-1">
        <TextButton onClick={() => setView("Home")}>Cancel</TextButton>
        <Button onClick={onSave}>Save</Button>
      </div>
      <form className="flex flex-col">
        <FormField required={true} ref={title} inputType="text">
          TITLE
        </FormField>
        <FormField required={true} ref={description} inputType="text">
          DESCRIPTION
        </FormField>
        <FormField
          required={true}
          ref={date}
          defaultValue={formattedDate}
          inputType="date"
        >
          DUE DATE
        </FormField>
      </form>
    </div>
  );
}
