import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row } from "react-bootstrap";

import Header from "./component/Header";
import CardComponent from "./component/CardComponent";
import {
  STTodoPageContainer,
  STFormFlex,
  STInputTodoBoxStyle,
  STButtonContainer,
  STButtonTextDiv,
  STCatButtonDiv,
} from "./component/style";
import { useDispatch, useSelector } from "react-redux";
import {
  onClickAddBtnAC,
  deleteHandlerAC,
  changeIdDoneAC,
} from "./redux/modules/doneData";

import { addTitleContentAC } from "./redux/modules/titleContent";
import { addDetailContentAC } from "./redux/modules/detailContent";

function App() {
  //store에 접근해서 redux 받아오기
  let doneDataRedux = useSelector((state) => {
    return state.doneData;
  });

  let titleContentRedux = useSelector((state) => {
    return state.titleContent;
  });

  let detailContentRedux = useSelector((state) => {
    return state.detailContent;
  });

  //dispatch 선언
  let dispatch = useDispatch();

  //클릭하면 working에 추가 + 유효성검사
  const onClickAddBtn = () => {
    if (titleContentRedux && detailContentRedux) {
      let newContent = {
        id: doneDataRedux.toDoArr.length + 1,
        title: titleContentRedux.title,
        content: detailContentRedux.content,
        isDone: false,
      };
      dispatch(onClickAddBtnAC(newContent));

      titleContentRedux.title = "";
      detailContentRedux.content = "";
    }
  };

  //onChange Handler
  let onChange = (e) => {
    if (e.target.name === "title") {
      dispatch(addTitleContentAC(e.target.value));
    } else if (e.target.name === "content") {
      dispatch(addDetailContentAC(e.target.value));
    }
  };

  //isDone - true, false filter
  let isDoneFilter = function (isDone) {
    return doneDataRedux.toDoArr.filter((value, i) => value.isDone === isDone);
  };

  //삭제 버튼
  const deleteHandler = (id) => {
    dispatch(deleteHandlerAC(id));
  };

  //완료 & 취소 버튼
  var changeIdDone = (id) => {
    dispatch(changeIdDoneAC(id));
  };

  return (
    <STTodoPageContainer>
      <Header></Header>
      <STFormFlex>
        <STInputTodoBoxStyle>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              value={titleContentRedux.title}
              placeholder="계획의 제목을 입력하세요"
              onChange={onChange}
              name="title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={detailContentRedux.content}
              placeholder="계획의 내용을 입력하세요"
              onChange={onChange}
              name="content"
            />
          </Form.Group>
        </STInputTodoBoxStyle>

        {/* input Button */}
        <STButtonContainer
          onClick={() => {
            onClickAddBtn();
          }}
        >
          <STButtonTextDiv>계획 추가하기</STButtonTextDiv>
          <STCatButtonDiv></STCatButtonDiv>
        </STButtonContainer>
      </STFormFlex>

      {/* working & Done*/}
      {/* card: component */}
      <div>
        <div>
          <Container>
            <Row>
              <h4>Working..🔥</h4>

              {/* done이 false인 것만 필터 */}
              {isDoneFilter(false).map((item, i) => (
                <CardComponent
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isDone={item.isDone}
                  deleteHandler={deleteHandler}
                  changeIdDone={changeIdDone}
                ></CardComponent>
              ))}
            </Row>
            <br />
            <br />
            <Row>
              <h4>Done..!🌟</h4>
              {/* done은 done이 true인 것만 필터 */}
              {isDoneFilter(true).map((item, i) => (
                <CardComponent
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isDone={item.isDone}
                  deleteHandler={deleteHandler}
                  changeIdDone={changeIdDone}
                ></CardComponent>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </STTodoPageContainer>
  );
}

export default App;
