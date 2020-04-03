import React from "react";

const Input = props => {
  const { name, label, value, onChange } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        className="form-control"
        {...props}
      />
    </div>
  );
};

export default Input;
