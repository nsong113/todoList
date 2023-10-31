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

  const toWork = () => {
    let changeDone = [...doneData];
    changeDone[i].isDone = false;
    setDonedata(changeDone);
  };

  const toDone = () => {
    let changeDone = [...doneData];
    changeDone[i].isDone = true;
    setDonedata(changeDone);
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

            {isDone === true ? (
              <Button variant="info" size="sm" onClick={toWork}>
                취소
              </Button>
            ) : (
              <Button variant="info" size="sm" onClick={toDone}>
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
