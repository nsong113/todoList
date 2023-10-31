<Card 컴포넌트 분리>
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
return (

<Col>
<Card
className="d-inline-block"
border="info"
style={{ width: "18rem", display: "inline-block !important" }} >
<Card.Header>{title}</Card.Header>
<Card.Body>
<Card.Title>{content}</Card.Title>
<div className="buttonStyle}">
<Button
variant="secondary"
size="sm"
onClick={() => {
deleteHandler(id);
}} >
삭제하기
</Button>

            {isDone === true ? (
              <Button
                variant="info"
                size="sm"
                onClick={() => {
                  let changeDone = [...doneData];
                  changeDone[i].isDone = false;
                  setDonedata(changeDone);
                }}
              >
                취소
              </Button>
            ) : (
              <Button
                variant="info"
                size="sm"
                onClick={() => {
                  let changeDone = [...doneData];
                  changeDone[i].isDone = true;
                  setDonedata(changeDone);
                }}
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

[헤더 컴포넌트 분리]
import { Navbar, Container } from "react-bootstrap";

function Header() {
return (

<div>
<Navbar className="bg-body-tertiary">
<Container>
<Navbar.Brand href="#home">My Todo List</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
<Navbar.Text>
Used Tool: <a href="https://reactjs-kr.firebaseapp.com">React</a>
</Navbar.Text>
</Navbar.Collapse>
</Container>
</Navbar>
</div>
);
}

export default Header;
