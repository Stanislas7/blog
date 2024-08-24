import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Extract title from content if not in frontmatter
    const title = data.title || content.split('\n')[0].replace('# ', '')

    return {
      slug: fileName.replace(/\.mdx$/, ''),
      title: title,
      date: data.date || 'No date',
    }
  }).filter(post => post.title)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest posts</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mb-4">
              <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
              <br />
              <small className="text-gray-500">{post.date}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  )
}