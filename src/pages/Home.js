import { React, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  const usersURL = "https://reqres.in/api/users/";
  // With this useState we save users data and then represent them on the page
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  fetch(usersURL)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      setUsers(res.data);
    });

  // I pass user's data along with navigate destination, so it can be used in User's page
  const handleUserClick = (user) => {
    navigate("/User", { state: user });
  };

  return (
    <div>
      <Header />
      <Container>
        <h2 className="text-center">List of users</h2>

        <div className="d-flex flex-wrap justify-content-md-center ">
          {users.length &&
            users.map((user) => {
              return (
                <div key={user.id}>
                  <img
                    className="rounded-circle m-3"
                    key={user.avatar}
                    src={user.avatar}
                    onClick={() => handleUserClick(user)}
                    alt="avatar"
                  />
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
