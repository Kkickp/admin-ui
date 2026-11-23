import React from "react";

function CheckBox(props) {
  const { label, name } = props;

  return (
    <div className="mb-3">
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name={name}
        id={name}
      />
      <label htmlFor={name} className="text-sm text-gray-01 ml-6">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
