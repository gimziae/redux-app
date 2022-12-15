// 초기 상태 설정
const initState = {
	list: [
		{
			id: 0,
			text: "리액트 공부하기",
			done: false,
		},
		{
			id: 1,
			text: "척추 펴기!",
			done: false,
		},
		{
			id: 2,
			text: "취업 하기",
			done: false,
		},
	],
};

// 액션 타입 정의
const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

// 액션 생성 함수
// 할 일 추가하는 함수 : 모든 정보를 전달해야 하므로 payload를 매개변수로 전달해 준다.
export function create(payload) {
	return {
		type: CREATE,
		payload,
	};
}

// 완료 항목 함수 : 완료한 항목만 체크하면 되므로 id(인덱스)값만 받아준다.
export function done(id) {
	return {
		type: DONE,
		id,
	};
}

// reducer 설정
export default function todo(state = initState, action) {
	switch (action.type) {
		case CREATE:
			return console.log("create 호출");
		case DONE:
			return console.log("done 호출");
		default:
			return state;
	}
}
