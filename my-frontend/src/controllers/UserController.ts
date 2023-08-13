const API_URL = "https://rnd-ns2-tech-challenge-next-be.vercel.app/api/graphql"

// QUERY //
const getUsersQuery = `
  query ($page: Int, $pageSize: Int, $username: String) {
    Users(pagination: {page: $page, pageSize: $pageSize}, filter: {username: $username}) {
      data {
        id
        username
        companies {
        id
        name
        rooms {
          id
          name
        }
      }
      }
      meta {
        pagination {
          page
          pageSize
          totalOfPage
          totalOfRecord
        }
      }
    }
  }
`

const addUserQuery = `
  mutation ($username: String!) {
    createUser(username: $username) {
      id
      username
    }
  }
`

const getUsers = async (page: number = 1, pageSize: number = 20) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: getUsersQuery,
      variables: {
        page,
        pageSize,
      },
    })
  }
  const response = await fetch(API_URL, options)
  const data = await response.json()
  return data.data
}

const addUser = async(username: string) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: addUserQuery,
      variables: {
        username
      },
    })
  }
  const response = await fetch(API_URL, options)
  const data = await response.json()
  return data.data
}

export { getUsers, addUser }