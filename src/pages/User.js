import React from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

function User() {
  // With useLocation I get user's data and then represent it on the page
  const { state } = useLocation();
  const user = state;
  return (
    <div>
      <Header />
      <Container className="text-center">
        <h2>User Info</h2>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className="rounded-circle"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{user.first_name}</td>
                </tr>
                <tr>
                  <th>Surname</th>
                  <td>{user.last_name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default User;
