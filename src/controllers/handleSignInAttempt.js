import { authenticationSimulation } from "../modules/authenticationSimulation";

export function handleSignInAttempt(event, setErrorMessage, onSignIn) {

  event.preventDefault();
  const form = event.target;
  const emailInput = form[1];
  const passwordInput = form[2];
  const closeButton = form[3];

  const email = emailInput.value;
  const password = passwordInput.value;

  const isAuthenticated = authenticationSimulation(email, password, onSignIn);

  if (isAuthenticated) {
    closeButton.click();
    form.reset();
    onSignIn();
  } else setErrorMessage("The email and password don't match");

}