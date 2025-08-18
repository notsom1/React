import Button from "./Button";
import FormField from "./FormField";
import TextButton from "./TextButton";

export default function CreateProjectView({ className }) {
  return (
    <div className={`${className} ml-6  xl:mr-60 mr-20`}>
      <div className="flex justify-end gap-1">
        <TextButton>Cancel</TextButton>
        <Button>Save</Button>
      </div>

      <form className="flex flex-col">
        <FormField inputType="text">TITLE</FormField>
        <FormField inputType="text">DESCRIPTION</FormField>
        <FormField inputType="date">DUE DATE</FormField>
      </form>
    </div>
  );
}
