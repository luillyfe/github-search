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
    position: "sticky",
  },
  totalCount: {
    textAlign: "right",
  },
  textOp: {
    opacity: 0.5,
  },
  peopleIcon: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      marginRight: "0.3em",
    },
  },
}));

export default function UserList({
  users,
  currentPage = 1,
  fetchPage,
  totalCount,
}) {
  const classes = useStyles();
  // "Only the first 1000 search results are available"
  const limitCountGithubAPI = 1000;
  const showPagination = users && users.length;

  function handleChange(_, page) {
    fetchPage(page);
  }

  return (
    <Fragment>
      <List className={classes.root}>
        {showPagination ? (
          <div className={classes.totalCount}>
            Showing {currentPage * 10 - 9}-{currentPage * 10} of {totalCount}{" "}
            results
          </div>
        ) : (
          <br />
        )}
        {users &&
          users.map(
            ({
              name,
              login,
              id,
              picture,
              bio,
              followers,
              following,
              location,
               profileLink
            }) => {
              
              return (
                <Fragment key={id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={name} src={picture} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Fragment>
                          {name}
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.textOp}
                            color="textPrimary"
                          >
                            {` (${login})`}
                          </Typography>
                        </Fragment>
                      }
                      secondary={
                        <SecondaryLabel
                          classes={{
                            inline: classes.inline,
                            peopleIcon: classes.peopleIcon,
                          }}
                          bio={bio}
                          following={following}
                          followers={followers}
                          location={location}
                        />
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </Fragment>
              );
            }
          )}
      </List>
      {showPagination ? (
        <Pagination
          count={limitCountGithubAPI / 10}
          classes={{ ul: classes.pagination }}
          page={currentPage}
          onChange={handleChange}
        />
      ) : (
        <br />
      )}
    </Fragment>
  );
}

function SecondaryLabel({ classes, location, bio, followers, following }) {
  return (
    <Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        {location ? `${location}. ` : "Earth. "}
      </Typography>
      {bio || "I am working on a description"} <br />
      <Typography
        component="span"
        variant="body2"
        className={classes.peopleIcon}
        color="textPrimary"
      >
        <svg
          aria-hidden="true"
          height="20"
          viewBox="0 0 16 16"
          width="16"
          data-view-component="true"
        >
          <path
            fillRule="evenodd"
            d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
          ></path>
        </svg>
        {`${followers} Followers / ${following} Following`}
      </Typography>
    </Fragment>
  );
}
