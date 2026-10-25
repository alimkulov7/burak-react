import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from "./reportWebVitals";


// @ts-ignore CSS is loaded by the bundler and has no TypeScript module declaration.
import "./css/index.css";
import theme from "./app/material/MaterialTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    <Provider store={store}>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
