import { useState } from "react";

const UserInput = (defaultValue, validationFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const validation = validationFn(enteredValue);

  const handleChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(true);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleChange,
    handleInputBlur,
    hasError: didEdit && !validation,
  };
};

export default UserInput;
