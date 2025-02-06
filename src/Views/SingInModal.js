import React, { useState } from "react";
import SignInContent from "./SignInContent";

export default function SignInModal() {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Sign In
      </button>

      <form onSubmit={handleSubmit}>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <SignInContent errorMessage={errorMessage} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" id="signInCloseButton" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form[1];
    const passwordInput = form[2];

    const email = emailInput.value;
    const password = passwordInput.value;

    const isAuthenticated = true;
    if (isAuthenticated) {
      const closeButton = document.getElementById("signInCloseButton");
      closeButton.click();
      inputs.reset();
    } else setErrorMessage("The email and password don't match");
  }

}