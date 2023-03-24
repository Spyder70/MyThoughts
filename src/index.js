import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
  domain="dev-lx7k03xx3k0y46ga.us.auth0.com"
  clientId="DLs9JuqCvKoMLsO0mkaVEw3CuWRHP1oY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>,
  document.getElementById("root")
);