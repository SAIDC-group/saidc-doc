// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    respectPathCase: true,
    experimental: {
      clientDB: false,
    },
  },
  extends: ['shadcn-docs-nuxt'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        language: 'zh-CN',
      },
    ],
  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
  },
  hooks: {
    'prerender:routes'(ctx) {
      // Ensure default locale routes are included by deriving them from zh-CN routes
      const routesToAdd: string[] = []
      
      // Find all zh-CN routes and create corresponding default locale routes
      ctx.routes.forEach((route: string) => {
        if (route.startsWith('/zh-CN/')) {
          const defaultRoute = route.replace('/zh-CN', '')
          if (defaultRoute && defaultRoute !== '/' && !ctx.routes.has(defaultRoute)) {
            routesToAdd.push(defaultRoute)
          }
        }
      })
      
      // Also ensure root and getting-started routes exist
      if (!ctx.routes.has('/')) {
        routesToAdd.push('/')
      }
      if (!ctx.routes.has('/getting-started/introduction')) {
        routesToAdd.push('/getting-started/introduction')
      }
      
      // Add all missing routes
      routesToAdd.forEach(route => {
        ctx.routes.add(route)
      })
    },
  },
  mdc: {
    highlight: {
      langs: ['python', 'py'],
    },
  },
  compatibilityDate: '2024-07-06',
});
