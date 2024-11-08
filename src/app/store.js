// const configureStore = require("@reduxjs/toolkit").configureStore;
// const cakeReducer = require("./features/cake/cakeSlice");
// const iceCreamReducer = require("./features/icecream/iceCreamSlice");
// const usersReducers = require("./features/users/userSlice");

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice";
import iceCreamReducer from "./features/icecream/iceCreamSlice";
import usersReducers from "./features/users/userSlice";

// const reduxLogger = require("redux-logger");

// const logger= reduxLogger.createLogger()

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer,
        users : usersReducers
    },
    // middleware : (getdefaultMiddleware) => getdefaultMiddleware().concat(logger)
});

export default store;