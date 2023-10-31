import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counter from "./reducers";
import rootReducer from "./reducers";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// store: app당 하나 존재
// 전역 상태 관리 저장소
const store = createStore(rootReducer);
const render = () => root.render(
    <React.StrictMode>
        {/*Provider: 리액트 컴포넌트에서 redux store에 접근 가능 하도록 하는 컴포넌트*/}
        <Provider store={store}>
            <App
                value={store.getState()}
                onIncrement={() => store.dispatch({type: 0})}
                onDecrement={() => store.dispatch({type: 1})}
            />
        </Provider>

    </React.StrictMode>
);
render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
