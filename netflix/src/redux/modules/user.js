import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// import { auth } from "../../shared/firebase";
// import firebase from "firebase/app";

// actions type
const UPDATE_USER = "UPDATE_USER";
const LOG_OUT = "LOG_OUT";

// const LOG_IN = "LOG_IN";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creator 액션 생성 함수
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initial state (default props 같은것)
const initialState = {

};

const user_initial = {

};


// 아래는 리듀서 대신 handleactions를 사용 첫줄을 const reducer = handleActions({ 해도 ok })
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {

      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [UPDATE_USER]: (state, action) =>
      produce(state, (draft) => {

      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {

      }),

  },
  initialState
);


const actionCreators = {
  setUser,
  getUser,
};

export { actionCreators };
