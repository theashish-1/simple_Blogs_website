import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContexProvider from "./contex/AppContex"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // note
  /*Here the children of  AppContexProvider is App*/
  <AppContexProvider>
    <App />
  </AppContexProvider>
    
 
);
