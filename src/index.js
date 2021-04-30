import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./App";
import { FirebaseContext } from "./context/firebase";
// import "normalize.css";

const config = {
  apiKey: "AIzaSyDH7hj5RDWgwlDmZI7adi77PgD9VnyezoM",
  authDomain: "netflix-clone-29c32.firebaseapp.com",
  projectId: "netflix-clone-29c32",
  storageBucket: "netflix-clone-29c32.appspot.com",
  messagingSenderId: "107946305205",
  appId: "1:107946305205:web:2a87b70e2e9dde6eeac0fc",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
