import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    fontSize: '1em'
  },
  title: {
    flexGrow: 1,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '10em',
    },
  },
}));

export default function QueryBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/*TODO: change background color*/}
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Github User List
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="query"
              label="Input query"
              variant="outlined"
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}
