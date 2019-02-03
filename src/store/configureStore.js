import { createStore, applyMiddleware } from "redux";
import { rootReducer} from "../reducers/index";
import logger from "redux-logger";
import thunk from 'redux-thunk'


const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};


const oldState = loadState();

export const store = createStore(rootReducer,oldState,  applyMiddleware(thunk, logger));

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};


store.subscribe(() => {
    saveState(store.getState());
});
