import { Layout } from '../../components/layouts/Layout/Layout'
import { getAllPostIds, getPostData } from '../../../lib/post'
export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>
  }
  return (
    <>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>

    </>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id)
  return {
    props: {
      post,
    },
  }
}
