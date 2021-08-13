import React, { Fragment, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UserList from "./presentational/UserList";
import QueryBar from "./presentational/QueryBar";

function App() {
  const [users, setUsers] = useState([]);

  function getUsers(query) {
    fetchUsers(query)
      .then((users) => {
        setUsers(users)
      })
      .catch((err) => console.error(err));
  }

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/*TODO: change background color*/}
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <QueryBar submitQuery={getUsers} />
          <UserList users={users} />
        </Typography>
      </Container>
    </Fragment>
  );
}

async function fetchUsers(query) {
  const url = "https://api.github.com/search/users";
  const response = await fetch(`${url}?q=${query}`).then((res) => res.json());

  return response.items;
}

export default App;
