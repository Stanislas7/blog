import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }))
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const fullPath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)

  return (
    <article className="prose lg:prose-xl pb-4">
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </article>
  )
}