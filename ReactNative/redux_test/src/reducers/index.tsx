import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";

// Reducer: State를 업데이트 하는 함수 
// Stat 와 Action을 전달 받는다.
// reducer가 여러개 있을 경우 'combineReducer'를 사용한다.
const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;

//상태 타입을 정의 한다.
export type RootState = ReturnType<typeof rootReducer>;