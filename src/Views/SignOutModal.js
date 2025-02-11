import React from "react";


export default function SignOutModal(props) {
  const onSignOut = props.onSignOut;
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#SignOutModal">
        Sign Out Modal
      </button>


      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="SignOutModal"
        tabIndex="-1"
        aria-labelledby="SignOutModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1>This is a Sign Out Modal</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close">

              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to sign out?
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
                className="btn btn-warning">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </form >
    </>
  )
  function handleSubmit(event) {
    event.preventDefault();
    const inputs = event.target;
    const closeButton = inputs[1];
    closeButton.click();
    onSignOut();
  }
}


