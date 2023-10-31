import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row } from "react-bootstrap";
import importedDoneData from "./component/data";
import Header from "./component/Header";
import CardComponent from "./component/CardComponent";

function App() {
  let [doneData, setDonedata] = useState(importedDoneData);
  let [titleContent, setTitleContent] = useState("");
  let [detailContent, setDetailContent] = useState("");

  let workingFilter = doneData.filter((value, i) => {
    return doneData[i].isDone === false;
  });
  let doneFilter = doneData.filter((value, i) => {
    return doneData[i].isDone === true;
  });

  let newContent = {
    id: doneData.length + 1,
    title: titleContent,
    content: detailContent,
    isDone: false,
  };
  let removeButtonHandler = () => {
    setTitleContent("");
    setDetailContent("");
  };

  return (
    <div className="todoPageContainer ">
      {/* header */}
      <Header></Header>
      {/* input text */}
      <form className="formFlex">
        <div className="inputTodoBoxStyle">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              value={titleContent}
              placeholder="계획의 제목을 입력하세요"
              onChange={(e) => {
                setTitleContent(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={detailContent}
              placeholder="계획의 내용을 입력하세요"
              onChange={(e) => {
                setDetailContent(e.target.value);
              }}
            />
          </Form.Group>
        </div>

        {/* input Button */}
        <div
          className="buttonContainer"
          onClick={() => {
            let a = true;
            doneData.forEach((element) => {
              if (element.title === titleContent) {
                a = false;
                alert("이미 같은 제목이 있습니다. 다른 제목을 입력해주세요");
                removeButtonHandler();
              }
            });
            if (a === true) {
              setDonedata([...doneData, newContent]);
              removeButtonHandler();
            }
          }}
        >
          <div className="buttonTextDiv">계획 추가하기</div>
          <div className="catButtonDiv"></div>
        </div>
      </form>

      {/* working & Done*/}
      {/* card: component */}
      <div className="cardContainer">
        <div>
          <Container>
            <Row>
              <h4>Working..🔥</h4>
              {/* done이 false인 것만 필터 */}
              {workingFilter.map((item, i) => {
                return (
                  <CardComponent
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    isDone={item.isDone}
                    i={i}
                    setDonedata={setDonedata}
                    doneData={doneData}
                  ></CardComponent>
                );
              })}
            </Row>
            <br />
            <br />
            <Row>
              <h4>Done..!🌟</h4>
              {/* done은 done이 true인 것만 필터 */}
              {doneFilter.map((item, i) => {
                console.log(item);
                return (
                  <CardComponent
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    isDone={item.isDone}
                    i={i}
                    setDonedata={setDonedata}
                    doneData={doneData}
                  ></CardComponent>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
