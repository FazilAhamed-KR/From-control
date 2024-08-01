import { useRef, useState } from "react";

export default function Login() {
  const [invaild, setInvaild] = useState(false);
  const email = useRef();
  const password = useRef();
  const handleSubmit = (evet) => {
    evet.preventDefault();
    const enterEmail = email.current.value;
    const enterPassword = password.current.value;
    console.log(enterEmail, enterPassword);
    const invaildEmail = enterEmail.includes("@");

    if (!invaildEmail) {
      setInvaild(true);
      return;
    }
    setInvaild(false);
  };

  const handleReset = (evt) => {
    evt.preventDefault();
    email.current.value = "";
    password.current.value = "";
  };

  // const handleChange = (identifier, value) => {
  //   setEnteredValue((prev) => ({
  //     ...prev,
  //     [identifier]: value,
  //   }));
  // };
  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {invaild && <p>Please enter the vaild email address</p>}
          </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
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
