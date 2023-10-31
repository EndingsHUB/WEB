import React, {useState} from 'react';
import './App.css';

interface Props {
    readonly value: any;
    readonly onIncrement: () => void;
    readonly onDecrement: () => void;
}

function App({value, onIncrement, onDecrement}: Props) {
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
