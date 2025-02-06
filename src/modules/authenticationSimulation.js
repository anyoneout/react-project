import { logins } from "./logins";

export function authenticationSimulation(email = "", password = "") {
  for (let i = 0; i < logins.length; i++) {
    const login = logins[i];
    const userEmail = login.email;
    const userPassword = login.password;
    if (email === userEmail && password === userPassword) return true
  } return false;
}