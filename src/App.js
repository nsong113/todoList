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
  // let [working,setWorking]=useState([])
  // let [done,setDone]=useState([])

  let onChangeTitle = (e) => {
    setTitleContent(e.target.value);
  };

  let onChangeContent = (e) => {
    setDetailContent(e.target.value);
  };

  ////////////////////////////////
  let workingFilter = doneData.filter(
    (value, i) => doneData[i].isDone === false
  );
  let doneFilter = doneData.filter((value, i) => doneData[i].isDone === true);
  ////////////////////////////////

  const deleteHandler = (id) => {
    const deleteItem = doneData.filter((a) => {
      return a.id !== id;
    });
    setDonedata(deleteItem);
  };

  const onClickAddBtn = () => {
    if (titleContent && detailContent) {
      let newContent = {
        id: doneData.length + 1,
        title: titleContent,
        content: detailContent,
        isDone: false,
      };
      setDonedata([...doneData, newContent]);
      setTitleContent("");
      setDetailContent("");
    }
  };
  ////////////////////////////////
  var changeIdDone = (id) => {
    const updateData = doneData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    setDonedata(updateData);
  };
  ////////////////////////////////
  // var changeIdDone = (id) => {
  //   let fineIndex = doneData.findIndex((item) => {
  //     return item.id === id;
  //   });
  //   if (doneData[fineIndex].isDone === true) {
  //     doneData[fineIndex].isDone = false;
  //   } else {
  //     doneData[fineIndex].isDone = true;
  //   }
  //   setDonedata([...doneData]);
  // };
  ////////////////////////////////

  return (
    <div className="todoPageContainer ">
      <Header></Header>
      <form className="formFlex">
        <div className="inputTodoBoxStyle">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              value={titleContent}
              placeholder="계획의 제목을 입력하세요"
              onChange={onChangeTitle}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={detailContent}
              placeholder="계획의 내용을 입력하세요"
              onChange={onChangeContent}
            />
          </Form.Group>
        </div>

        {/* input Button */}
        <div className="buttonContainer" onClick={onClickAddBtn}>
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
              {workingFilter.map((item, i) => (
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
              {doneFilter.map((item, i) => (
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
    </div>
  );
}

export default App;
