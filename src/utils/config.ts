import fs from 'fs'
import path from 'path'

interface BlogConfig {
  blogName: string
}

export function getBlogConfig(): BlogConfig {
  const configPath = path.join(process.cwd(), 'blog.config.json')
  const configFile = fs.readFileSync(configPath, 'utf8')
  return JSON.parse(configFile) as BlogConfig
}