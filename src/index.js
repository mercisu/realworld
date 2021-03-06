import App from './components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from "react";
import { applyMiddleware, createStore } from  'redux';
import { promiseMiddleware } from './middleware';
const defaultState = {
    appName: 'conduit',
    articles: null
};

const reducer = function (state = defaultState, action) {
    switch (action.type) {
        case 'HOME_PAGE_LOADED':
            return { ...state, articles: action.payload.articles }
    }
    return state;
}

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

/*
react로 작성된 컴포넌트들을 Provider안에 넣으면
하위 컴포넌트들이 Provider를 통해 redux store에 접근이 가능해진다.
 */

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));