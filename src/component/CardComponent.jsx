import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function CardComponent({
  id,
  title,
  content,
  isDone,
  deleteHandler,
  changeIdDone,
}) {
  const doneDataRedux = useSelector((state) => {
    return state.doneData;
  });
  console.log(doneDataRedux);
  const dispatch = useDispatch();
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
                // dispatch(deleteHandlerAC);
                deleteHandler(id);
              }}
            >
              삭제하기
            </Button>
            {isDone === true ? (
              <Button
                variant="info"
                size="sm"
                onClick={() =>
                  // dispatch(changeIdDoneAC)
                  changeIdDone(id)
                }
              >
                취소
              </Button>
            ) : (
              <Button
                variant="info"
                size="sm"
                onClick={() =>
                  // dispatch(changeIdDoneAC)
                  changeIdDone(id)
                }
              >
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
