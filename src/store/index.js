import { combineReducers } from "redux"; // 모듈들 모으기
import todo from "./modules/todo";

export default combineReducers({
	todo,
});
