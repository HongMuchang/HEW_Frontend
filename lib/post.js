import fetch from 'node-fetch'

const apiUrl = 'http://localhost:60002/recruits'
const CompassUrl = 'http://localhost:60003/connpass'

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

//IDを元に内容を取得
export async function getPostData(id) {
  const res = await fetch(`${apiUrl}/${id}`)
  const post = await res.json()
  return {
    post,
  }
}

export async function getAllCompassData() {
  const res = await fetch(CompassUrl)
  const posts = await res.json()
  return posts
}
