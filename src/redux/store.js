import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import categoriesReducer from "./categories/reducer";
import notifReducer from "./notif/reducer";
import speakersReducer from "./speakers/reducer";
import eventsReducer from "./events/reducer";
import listsReducer from "./lists/reducer";
import transactionsReducer from "./transactions/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  notif: notifReducer,
  speakers: speakersReducer,
  events: eventsReducer,
  lists: listsReducer,
  transactions: transactionsReducer,
});
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
