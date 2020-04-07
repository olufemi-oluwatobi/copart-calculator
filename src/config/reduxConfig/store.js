import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./rootReducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const Middleware = [thunk];

let composeEnhancers = compose;
if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...Middleware))
);

export default store;
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["bosat"] // only navigation will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, reducers);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
// const persistor = persistStore(store);
// export { store, persistor };
