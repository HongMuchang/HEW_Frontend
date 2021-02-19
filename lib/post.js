import fetch from 'node-fetch'

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

//全権取得
export async function getAllPostsData() {
  const res = await fetch(apiUrl)
  const posts = await res.json()
  return posts
}

export async function getAllPostIds() {
  const res = await fetch(apiUrl)
  const posts = await res.json()

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export async function getPostData(id) {
  const res = await fetch(`${apiUrl}/${id}/`)
  const post = await res.json()

  return {
    post,
  }
}