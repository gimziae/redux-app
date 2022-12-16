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

const counts = initState.list.length;
initState["nextID"] = counts;

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
			return {
				// 객체를 리턴해줘야한다!
				...state,
				// 새롭게 생성되는 요소들!
				list: state.list.concat({
					id: action.payload.id,
					text: action.payload.text,
					done: false,
				}),
				nextID: action.payload.id + 1,
			};
		case DONE:
			return {
				...state,
				list: state.list.map((el) => {
					if (el.id === action.id) {
						return {
							...el,
							done: true,
						};
					} else {
						return el;
					}
				}),
			};
		default:
			return state;
	}
}
