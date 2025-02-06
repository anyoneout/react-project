import React from "react";

export default function SignInContent(props) {
  const errorMessage = props.errorMessage;
  const userEmail = props.email;
  const userPassword = props.password;

  return (
    <>
      Email: <input
        type="email"
        value={userEmail}
        required />
      <br />
      Password: <input
        type="password"
        value={userPassword}

        required />
      <div style={{ color: "red" }} > {errorMessage}</div >
    </>
  )
}