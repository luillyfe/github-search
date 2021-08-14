import React, { Fragment, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UserList from "./presentational/UserList";
import QueryBar from "./presentational/QueryBar";
import { fetchUserPage } from "./utils";

const initialState = {
  users: [],
  currentPage: 1,
  query: "",
};

function App() {
  const [state, setState] = useState(initialState);

  function getUsers(query, pageNumber) {
    fetchUserPage(query, pageNumber)
      .then((currenUsers) => {
        setState({ query, users: currenUsers, currentPage: pageNumber });
      })
      .catch((err) => console.error(err));
  }

  function fetchPage(pageNumber) {
    getUsers(state.query, pageNumber);
  }

  const { users, currentPage } = state;
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
          <UserList
            users={users}
            currentPage={currentPage}
            fetchPage={fetchPage}
          />
        </Typography>
      </Container>
    </Fragment>
  );
}

export default App;
