import React, { useState } from "react";
import SignInContent from "./SignInContent";
import { handleSignInAttempt } from "../controllers/handleSignInAttempt";

export default function SignInModal(props) {
  const onSignIn = props.onSignIn;
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Sign In
      </button>

      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <SignInContent errorMessage={errorMessage} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
  function handleSubmit(event) {
    console.log("handleSignIn started");
    handleSignInAttempt(event, setErrorMessage, onSignIn);
  }

}