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

// reducer 설정
export default function todo(state = initState, action) {
	return state;
}
