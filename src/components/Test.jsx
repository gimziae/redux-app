import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Test() {
	// state 값을 받아오는 코드
	const weight = useSelector((state) => state);
	const dispatch = useDispatch();
	return (
		<>
			<h1>
				당신의 몸무게는 <em style={{ color: "red" }}>{weight} </em>
				kg 입니다.
			</h1>
			<button
				onClick={() => {
					dispatch({ type: "증가" });
				}}>
				살 찌기
			</button>
			<button
				onClick={() => {
					dispatch({ type: "감소" });
				}}>
				살 빼기
			</button>
		</>
	);
}
