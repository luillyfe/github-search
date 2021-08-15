const searchURL = "https://api.github.com/search/users";
const userURL = "https://api.github.com/user";

export async function fetchUserPage(query, page = 1) {
  const limit = 10;
  const response = await fetch(
    `${searchURL}?q=${query}&per_page=${limit}&page=${page}`
  ).then((res) => res.json());

  const usersResponse = await Promise.all(
    response.items.map(({ id }) => {
      return fetch(`${userURL}/${id}`).then((res) => res.json());
    })
  );

  return {
    users: usersResponse.map(
      ({
        name,
        login,
        id,
        avatar_url: picture,
        bio,
        followers,
        following,
        location,
        html_url: profileLink,
      }) => ({
        name,
        login,
        id,
        picture,
        bio,
        followers,
        following,
        location,
        profileLink,
      })
    ),
    totalCount: response.total_count,
  };
}
