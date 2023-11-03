import React from "react";
import { STmodalBox, STmodalFlexBox, STmodalContent } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Modal() {
  const param = useParams();
  const navigate = useNavigate();

  //redux 가져오기
  const doneDataRedux = useSelector((state) => {
    return state.doneData;
  });

  //Modal 렌더링 할 데이터 찾기
  const showModalData = doneDataRedux.toDoArr.find((data) => {
    return data.id === parseInt(param.id);
  });

  return (
    <STmodalBox>
      <STmodalFlexBox>
        <p>id : {param.id}</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          이전으로
        </button>
      </STmodalFlexBox>
      <STmodalContent>
        <h1>{showModalData.title}</h1>
        <p>{showModalData.content}</p>
      </STmodalContent>
    </STmodalBox>
  );
}

export default Modal;
