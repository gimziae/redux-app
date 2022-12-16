import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo"; // action 생성함수

export default function TodoList() {
	// 할 일 리스트 받아오기
	const list = useSelector((state) => state.todo.list).filter(
		(el) => el.done === false
	);

	const nextID = useSelector((state) => state.todo.nextID); // 리덕스에 저장된 nextID값 불러오기
	const inputRef = useRef();
	const dispatch = useDispatch();

	return (
		<section>
			<h1>📆 TODO List</h1>
			<div>
				<input type="text" ref={inputRef} />
				<button
					onClick={() => {
						dispatch(
							create({
								id: nextID,
								text: inputRef.current.value,
							})
						);
						inputRef.current.value = "";
					}}>
					추가
				</button>
			</div>
			<ul>
				{/* 키값을 전달 해줘야지 에러가 안뜬다 */}
				{list.map((el) => {
					return (
						<li key={el.id}>
							{el.text}
							<button
								onClick={() => {
									dispatch(done(el.id));
								}}>
								완료
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
