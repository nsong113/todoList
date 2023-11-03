//action value
const addDetailContent = "detailContent";

//action creator
export const addDetailContentAC = (payload) => {
  return {
    type: addDetailContent,
    payload,
  };
};

//initial state
const initialState = {
  content: "",
};

//reducer
const detailContent = (state = initialState, action) => {
  switch (action.type) {
    //addDetailContent : content 입력값 받기
    case addDetailContent:
      return { content: action.payload };
    default:
      return state;
  }
};

export default detailContent;
