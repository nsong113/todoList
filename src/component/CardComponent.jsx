import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function CardComponent({
  id,
  title,
  content,
  isDone,
  deleteHandler,
  toWork,
  toDone,
}) {
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
