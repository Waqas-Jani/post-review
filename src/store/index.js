import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

export const history = createBrowserHistory({
  basename: "/",
});

const persistedReducer = persistReducer(persistConfig, reducers(history));

export default () => {
  let store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
