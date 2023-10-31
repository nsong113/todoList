import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function CardComponent({
  id,
  title,
  content,
  isDone,
  i,
  setDonedata,
  doneData,
}) {
  const deleteHandler = (id) => {
    const deleteItem = doneData.filter((a) => {
      return a.id !== id;
    });
    setDonedata(deleteItem);
  };

  //아이디 값이 클릭한 아이디랑 동일한 거를 찾으면 되는거네
  const toWork = (id) => {
    let fineIndex = doneData.findIndex((item) => {
      return item.id === id;
    });
    doneData[fineIndex].isDone = false;
    setDonedata([...doneData]);
  };

  const toDone = (id) => {
    let findIndex = doneData.findIndex((item) => {
      return item.id === id;
    });

    doneData[findIndex].isDone = true;
    setDonedata([...doneData]);
  };
  return (
    <Col>
      <Card
        className="d-inline-block"
        border="info"
        style={{ width: "18rem", display: "inline-block !important" }}
      >
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>{content}</Card.Title>
          <div className="buttonStyle}">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                deleteHandler(id);
              }}
            >
              삭제하기
            </Button>
            {id}
            {isDone === true ? (
              <Button variant="info" size="sm" onClick={() => toWork(id)}>
                취소
              </Button>
            ) : (
              <Button variant="info" size="sm" onClick={() => toDone(id)}>
                완료
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardComponent;
