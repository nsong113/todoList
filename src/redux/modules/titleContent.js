//action value
const addTitleContent = "titleContent/titleContent";

//action creator
export const addTitleContentAC = (payload) => {
  return {
    type: addTitleContent,
    payload,
  };
};

//initial statae
const initialState = {
  title: "",
};

//reducer 생성
const titleContent = (state = initialState, action) => {
  switch (action.type) {
    //addTitleContent : title 입력값 받기
    case addTitleContent:
      return { title: action.payload };

    default:
      return state;
  }
};

export default titleContent;
