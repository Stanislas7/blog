# Blog
This is an opensource blog tool designed as a starting point for you to make your own.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- pnpm

### Clone the Repository

```bash
git clone https://github.com/stanislas7/blog.git
cd blog
```

### Install Dependencies

```bash
pnpm install
```

### Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `src/`: Contains the source code
  - `app/`: Next.js app router pages
  - `components/`: React components
  - `posts/`: MDX blog posts
- `public/`: Static assets

## Adding New Articles
Create a new `.mdx` file in the `src/posts/` directory. Add frontmatter to your MDX file:

Create a new .mdx file in the src/posts/ directory.

Write your article content using Markdown and MDX syntax. The new article will automatically appear on the homepage.

## Configuration

You can customize basic blog settings in the `blog.config.json` file in the root directory.

Current configuration options:
- `blogName`: The name of your blog (displayed in the header and title)

Example `blog.config.json`:
```json
{
  "blogName": "Your own blog name"
}
```

## Customizing the Blog
- Edit `src/app/layout.tsx` to change the global layout.
- Modify `src/components/layout.tsx` to adjust the blog's main layout.
- Update styles in `src/app/globals.css` or use Tailwind classes directly in components.

## Deployment
This blog can be easily deployed on platforms like Vercel or Netlify. Follow their respective documentation for deploying Next.js applications.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is open source and available under the MIT License.