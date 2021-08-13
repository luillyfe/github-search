import React, {Fragment, useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function UserList() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers("fermin", setUsers)
  }, [])

  return (
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
                      {'some text'}
                    </Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          );
        })}
    </List>
  );
}

async function getUsers(query, setState) {
  const url = 'https://api.github.com/search/users';
  const response = await fetch(`${url}?q=${query}`).then(res => res.json());
  console.log(response.items);
  setState(response.items)
}
