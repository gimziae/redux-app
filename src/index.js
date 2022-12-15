import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store";
const reduxDevTool =
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__();
let store = createStore(rootReducer, reduxDevTool);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// 1) redux 첫 스텝!! <App />을 <Provider> 로 감싸주기
	<Provider store={store}>
		<App />
	</Provider>
);

reportWebVitals();
