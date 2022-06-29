import {
  START_FETCHING_SPEAKERS,
  SUCCESS_FETCHING_SPEAKERS,
  ERROR_FETCHING_SPEAKERS,
  SET_KEYWORD,
} from "./constants";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  keyword: "",
  status: statusList.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_SPEAKERS:
      return { ...state, status: statusList.process };

    case ERROR_FETCHING_SPEAKERS:
      return { ...state, status: statusList.error };

    case SUCCESS_FETCHING_SPEAKERS:
      return {
        ...state,
        status: statusList.success,
        data: action.speakers,
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };

    default:
      return state;
  }
}
