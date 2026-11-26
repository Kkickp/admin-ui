import React from "react";
import Input from "./Input";

function LabeledInput(props) {
  const { label, id, ...rest } = props;

  return (
    <div className="mb-6">
      <label htmlFor={id || rest.name} className="block text-sm mb-2">
        {label}
      </label>
      <Input id={id || rest.name} {...rest} />
    </div>
  );
}

export default LabeledInput;
