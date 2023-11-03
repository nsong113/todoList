//action value
const onClickAddBtn = "doneData/onClickAddBtn";
const deleteHandler = "doneData/deleteHandler";
const changeIdDone = "doneData/changeIdDone";

//action creater
export const onClickAddBtnAC = (payload) => {
  return {
    type: onClickAddBtn,
    payload,
  };
};

export const deleteHandlerAC = (payload) => {
  return {
    type: deleteHandler,
    payload,
  };
};

export const changeIdDoneAC = (payload) => {
  return {
    type: changeIdDone,
    payload,
  };
};

//초기 상태값
//initial state
const initialState = {
  toDoArr: [
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트강의 4강듣기",
      isDone: false,
    },
    {
      id: 2,
      title: "TIL작성",
      content: "깔끔하게 작성하기",
      isDone: true,
    },
    {
      id: 3,
      title: "WIL작성",
      content: "다음 주 계획 짜기",
      isDone: true,
    },
  ],
};

//reducer:
const doneData = (state = initialState, action) => {
  switch (action.type) {
    //onClickAddBtn : working에 추가
    case onClickAddBtn:
      return { toDoArr: [...state.toDoArr, action.payload] };

    //deleteHandler : 삭제 버튼
    case deleteHandler:
      const deleteItem = state.toDoArr.filter((a) => {
        return a.id !== action.payload;
      });
      return { toDoArr: deleteItem };

    //changeIdDone : 완료& 취소 버튼
    case changeIdDone:
      const updateData = state.toDoArr.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
        return item;
      });
      return { toDoArr: updateData };

    //default
    default:
      return state;
  }
};

export default doneData;
