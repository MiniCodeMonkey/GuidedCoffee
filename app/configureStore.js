import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import testReducer from './reducers/testReducer';

export default function configureStore(initialState) {
    const middlewares = [
        thunkMiddleware
    ];

    const middleware = compose(applyMiddleware(...middlewares));
    
    const reducer = combineReducers({
        test: testReducer
    });

    const store = middleware(createStore)(reducer, initialState);

    return store;
}
