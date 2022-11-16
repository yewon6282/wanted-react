import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookmarking from './bookmarking';
import logging from './logging';
import showModal from './showModal';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["logging","bookmarking"]
};

const rootReducer = combineReducers({logging, bookmarking, showModal});

export default persistReducer(persistConfig, rootReducer);