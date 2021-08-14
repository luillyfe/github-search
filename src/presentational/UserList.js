import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  pagination: {
    justifyContent: "space-between",
    position: "relative",
    top: '38em'
  },
}));

// TODO: promote to presentational component
export default function UserList({ users }) {
  const classes = useStyles();

  return (
    <Fragment>
      <List className={classes.root}>
        {users &&
          users.map(({ login: name, id, avatar_url: picture }) => {
            return (
              <Fragment key={id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={name} src={picture} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={name}
                    secondary={
                      <Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Ali Connors
                        </Typography>
                        {"some text"}
                      </Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </Fragment>
            );
          })}
      </List>
      <Pagination count={10} classes={{ ul: classes.pagination }} />
    </Fragment>
  );
}
