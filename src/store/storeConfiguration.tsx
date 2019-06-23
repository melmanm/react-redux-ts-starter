import { IAppState } from "./appState";
import { createStore, Store, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { unregister } from '../serviceWorker';

export function configureStore(): Store<IAppState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    store.subscribe(()=>console.log(store.getState()));
    return store;
}

