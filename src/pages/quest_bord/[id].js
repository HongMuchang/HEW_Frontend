import { Layout } from '../../components/layouts/Layout/Layout'

import { useRouter } from 'next/router'
export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>
  }
  return <p>dd</p>
}
