import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./favicon.ico";
import "./styles/main.scss";


// Use BrowserRouter if your are going to use URL without hash
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app") as HTMLElement
);
