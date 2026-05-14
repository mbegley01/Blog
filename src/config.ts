import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'Maeve',
  title: 'Maeve Thoughts',
  description: 'Welcome to my blog. Here are my thoughts',
  lang: 'en',
  themes: {
    dark: 'github-dark',
    light: 'github-light',
  },
} satisfies Config
