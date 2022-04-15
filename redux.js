//CREATE A REDUX STORE

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

var store = Redux.createStore(reducer)

//GET STATE FROM REDUX STORE

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

var currentState = store.getState()

//DEFINE REDUX ACTION

// Define an action here:
var action = {type: 'LOGIN'}

//DEFINE ACTION CREATOR

const action = {
  type: 'LOGIN'
}
// Define an action creator here:

var actionCreator = () => {
  return action
}

//DISPATCH AN ACTION EVENT

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());

//HANDLE ACTION IN STORE

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type == 'LOGIN') {
    return {login: true}
  } else {
    return state
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

//SWITCH STATEMENT FOR MULTIPLE ACTIONS

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {authenticated: true};
    case 'LOGOUT':
      return {authenticated: false};
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

//CONST FOR ACTION TYPES
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

//REGISTER STORE LISTENER

const ADD = 'ADD';

const reducer = (state = 0, action) => {

  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const callback = () => {
  count++
}
store.subscribe(callback)
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

//COMBINE MULTIPLE REDUCERS

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
  });// Define the root reducer here

const store = Redux.createStore(rootReducer);
