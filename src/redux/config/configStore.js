import { createStore } from "redux";
import { combineReducers } from "redux";
import doneData from "../modules/doneData";
import titleContent from "../modules/titleContent";
import detailContent from "../modules/detailContent";

//reducer
const rootReducer = combineReducers({
  doneData,
  titleContent,
  detailContent,
});

//스토어 생성
const store = createStore(rootReducer);

//export
export default store;
