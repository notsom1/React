import { Input } from "./Input";

let inputValues = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};
export function EntryFields({ calculate }) {
  function handleOnChange(fieldName, value) {
    inputValues = {
      ...inputValues,
      [fieldName]: value,
    };

    calculate(inputValues);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          onChange={(value) =>
            handleOnChange("initialInvestment", Number(value))
          }
        ></Input>
        <Input
          label="Annual Investment"
          onChange={(value) =>
            handleOnChange("annualInvestment", Number(value))
          }
        ></Input>
      </div>
      <br></br>
      <div className="input-group">
        <Input
          label="Expected Return"
          onChange={(value) => handleOnChange("expectedReturn", Number(value))}
        ></Input>
        <Input
          label="Duration"
          onChange={(value) => handleOnChange("duration", Number(value))}
        ></Input>
      </div>
    </div>
  );
}
