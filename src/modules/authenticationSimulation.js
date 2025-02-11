import { logins } from "./logins";

export function authenticationSimulation(email = "", password = "") {
  for (const login of logins) {
    const currentEmail = login.email;
    const currentPassword = login.password;
    if (email === currentEmail && password === currentPassword)
      return true;
  }
  return false;

}