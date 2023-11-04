import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./reducers";
import {TddoActionType} from "./reducers/todos";

interface Props {
    readonly value: any;
    readonly onIncrement: () => void;
    readonly onDecrement: () => void;
}

function App({value, onIncrement, onDecrement}: Props) {
    // Selector : Provider를  통해 Store에 접근해서 store 데이터를 가져오거나 가공 한다.
    const counter = useSelector((state: RootState)=>state.counter);
    const todos = useSelector((state: RootState)=>state.todos);

    // Dispatch : Action을 Store에 보내는 함수
    const dispatch = useDispatch()
    
    const [todoValue, setTodoValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTodoValue(e.target.value);
    }
    const addTodo = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        dispatch({type: TddoActionType.ADD_TODO, text: todoValue});
        setTodoValue("");
    }
    return (
        <div className="App">
            <h2>Clicked: {counter} times</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            
            <ul>
                {todos?.map((todo, index)=><li key={index}>{todo}</li>)}
            </ul>
        
            <form onSubmit={addTodo}>
                <input type='text' value={todoValue} onChange={handleChange}/>
                <input type='submit'/>
            </form>
        </div>
    );
}

export default App;
