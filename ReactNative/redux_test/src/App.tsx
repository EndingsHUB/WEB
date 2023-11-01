import React, {useState} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {RootState} from "./reducers";

interface Props {
    readonly value: any;
    readonly onIncrement: () => void;
    readonly onDecrement: () => void;
}

function App({value, onIncrement, onDecrement}: Props) {
    const counter = useSelector((state: RootState)=>state.counter);
    const [todoValue, setTodoValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTodoValue(e.target.value);
    }
    const addTodo = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setTodoValue("");
    }
    return (
        <div className="App">
            <h2>Clicked: {value} times</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        
            <form onSubmit={addTodo}>
                <input type='text' value={todoValue} onChange={handleChange}/>
                <input type='submit'/>
            </form>
        </div>
    );
}

export default App;
