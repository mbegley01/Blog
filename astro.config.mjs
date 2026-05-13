import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import expressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
  // 1. Math plugins for standard .md files
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    react(),
    expressiveCode({
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black',
        },
        uiFontFamily: 'inherit',
        borderColor: 'black',
      },
    }),
    // 2. Math plugins passed directly into your MDX integration
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  site: 'https://mbegley01.github.io',
  base: '/Blog/',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
})
