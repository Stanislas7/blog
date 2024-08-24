import blogConfigJson from '../../blog.config.json'

export interface BlogConfig {
  blogName: string;
  defaultTheme: 'light' | 'dark' | 'system';
}

export const blogConfig: BlogConfig = blogConfigJson as BlogConfig;