import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
  

export default defineConfig({
  site: 'https://ChocopieKewpie.github.io',
  base: '/',
  integrations: [
    starlight({
      title: 'NZLUM',
      description: 'New Zealand Land Use & Management classification',
      logo: { src: './src/assets/MWLR_BSI.png', alt: 'NZLUM' },
      favicon: '/favicon.svg',
	  customCss: ['./src/custom.css'],
      social: [
        { label: 'GitHub', href: 'https://github.com/ChocopieKewpie/ChocopieKewpie.github.io', icon: 'github' },
        { label: 'Email',  href: 'mailto:you@example.org', icon: 'email' }
      ],
      sidebar: [
        { label: 'Overview', link: '/' },
        {
          label: 'Classification',
          items: [
            { label: 'Classification system', link: '/classification/structure' },
            { label: 'Classes', link: '/classification/primary' },
          ],
        },
        {
          label: 'Use',
          items: [
            { label: 'FAQs', link: '/use/faq' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Terms', link: '/reference/terms' },
            { label: 'Citations', link: '/reference/citations' },
          ],
        },
      ],
    }),
  ],
});