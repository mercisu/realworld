import ReactDOM from 'react-dom';
import React from "react";
import { createStore } from  'redux';

const defaultState = { checked: false };
const reducer = function (state = defaultState, action) {
    switch (action.type) {
        case 'TOGGLE':
            return {...state, checked: !state.checked};
    }
    return state;
}

const store = createStore(reducer);

class App extends React.Component {
    /*
   생성자 메소드로서 컴포넌트가 처음 만들어 질때 실행
   컴포넌트를 새로 만들때마다 호출 되는 메서드
   이 메소드에서 기본 state를 정할 수 있음.
    */
    constructor() {
        super();
        this.state = {};
    }

    /*
    컴포넌트가 DOM위에 만들어지기 전에 실행됨
     */
    componentWillMount() {
        store.subscribe(() => this.setState(store.getState()));
        this.setState(store.getState());
    }

    /*
   컴포넌트 렌더링
    */
    render() {
        const onClick = () => store.dispatch({ type: 'TOGGLE'});

        return (
            <div>
                <h1>To-dos</h1>
                <div>
                    Learn Redux&nbsp;
                    <input type="checkbox"
                    checked={!!this.state.checked}
                    onClick={onClick}/>
                </div>
                {
                    this.state.checked ? (<h2>Done!</h2>) : null
                }
            </div>
        );
    }
}

ReactDOM.render((
    <App />
), document.getElementById('root'));