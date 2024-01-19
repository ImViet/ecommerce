import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../containers/Product/reducer"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";


const reducer = combineReducers({
    productReducer
})
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
  });

rootSaga.map((saga) => sagaMiddleware.run(saga)); //Register all saga
export default store;

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch