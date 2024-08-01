import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import UserInput from "../hooks/UserInput";

export default function Login() {
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: emailInvalid,
  } = UserInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    handleInputBlur: handlePasswordInputBlur,
    hasError: passwordInvalid,
  } = UserInput("", (value) => hasMinLength(value, 6));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailInvalid || passwordInvalid) {
      return;
    }
    console.log(emailValue, passwordValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailInputBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailInvalid && "Please enter a valid email"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordInputBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordInvalid && "Please enter a valid password"}
        />
      </div>
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
