import { Navbar, Container } from "react-bootstrap";
import React from "react";

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

export default React.memo(Header);
