const url = "https://api.github.com/search/users";

export async function fetchUserPage(query, page = 1) {
  const limit = 10;
  const response = await fetch(
    `${url}?q=${query}&per_page=${limit}&page=${page}`
  ).then((res) => res.json());

  return response.items;
}
