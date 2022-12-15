import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const weight = 100;
// ** 중요 action : 컴포넌트에서 어떤 작업을 할지 정해주는 것 **
function reducer(state = weight, action) {
	if (action.type === "증가") {
		state++;
		return state;
	} else if (action.type === "감소") {
		state--;
		return state;
	} else {
		return state;
	}
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// 1) redux 첫 스텝!! <App />을 <Provider> 로 감싸주기
	<Provider store={store}>
		<App />
	</Provider>
);

reportWebVitals();
