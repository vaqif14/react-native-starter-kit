import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducers = persistReducer(persistConfig, reducers);

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk, __DEV__ && logger].filter(Boolean);
const store = createStore(persistedReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);

export default store;
