import React from 'react';
import '../styles/globals.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import theQuestions from '../reducers/theQuestions';
import scoring from '../reducers/scoring';
import checkQuiz from '../reducers/checkQuiz';


import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';


const reducers = combineReducers({ scoring, theQuestions, checkQuiz });

const persistConfig = { key: 'kidikuiz', storage, blacklist: ['theQuestions'] };

const store = configureStore({
  reducer:persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 

 const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
           <Component {...pageProps} />
        </PersistGate>
    </Provider>
  );
}

export default App;
