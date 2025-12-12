export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      // Site config strings from app.config.ts
      'SAIDC': 'SAIDC',
      'Beautifully designed Nuxt Content template built with SAIDC. Customizable. Compatible. Open Source.': 'Beautifully designed Nuxt Content template built with SAIDC. Customizable. Compatible. Open Source.',
      'Copyright © 2024': 'Copyright © 2024',
      'Star on GitHub': 'Star on GitHub',
      'Create Issues': 'Create Issues',
    },
    'zh-CN': {
      // Site config strings from app.config.ts
      'SAIDC': 'SAIDC',
      'Beautifully designed Nuxt Content template built with SAIDC. Customizable. Compatible. Open Source.': '基于 SAIDC 构建的精美 Nuxt Content 模板。可定制。兼容。开源。',
      'Copyright © 2024': '版权所有 © 2024',
      'Star on GitHub': '在 GitHub 上标星',
      'Create Issues': '创建问题',
    },
  },
}));
