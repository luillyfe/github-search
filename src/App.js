import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UserList from "./containers/UserList";
import QueryBar from "./containers/QueryBar";

function App() {
  return (
      <Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
            {/*TODO: change background color*/}
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
              <QueryBar />
              <UserList />
          </Typography>
        </Container>
      </Fragment>
  );
}

export default App;
