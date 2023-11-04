import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponent({
  id,
  title,
  content,
  isDone,
  deleteHandler,
  changeIdDone,
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
          <Link to={`/modal/${id}`}>상세보기</Link>
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
              <Button variant="info" size="sm" onClick={() => changeIdDone(id)}>
                취소
              </Button>
            ) : (
              <Button variant="info" size="sm" onClick={() => changeIdDone(id)}>
                완료
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default React.memo(CardComponent);
