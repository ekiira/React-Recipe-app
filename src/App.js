import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Recipes from "./Recipes/Recipes";
import Recipe from "./Recipe/Recipe";

import "./App.css";

import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducer/reducer";

// Configure state persist so that the state is not reset when the component reloads
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["recipe"],
};

// Pass the root reducer and persist config into the persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

// Console.log the redux logger in development mode but remove it in production
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

let store = createStore(persistedReducer, applyMiddleware(...middlewares));

let persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Router>
            <Switch>
              <Route exact path="/" component={Recipes} />
              <Route exact path="/recipe" component={Recipe} />
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
