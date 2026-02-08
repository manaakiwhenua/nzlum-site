import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
  

export default defineConfig({
  site: 'https://nzlum.landcareresearch.co.nz',
  base: '/',
  redirects: {
    'classification/system/': '/classification/v0-3/system/' // Redirect URL without a version spec to the latest available version
  },
  integrations: [
    starlight({
      title: 'NZLUM',
      description: 'New Zealand Land Use & Management classification',
      logo: { src: './src/assets/BSI.png', alt: 'NZLUM' },
      favicon: '/favicon.png',
	  customCss: ['./src/custom.css'],
      social: [
        { label: 'GitHub', href: 'https://github.com/manaakiwhenua/nzlum-site', icon: 'github' },
      ],
      sidebar: [
        { label: 'NZLUM classification system', link: '/' },
        {
          label: 'Classification (v0.3)',
          collapsed: true,
          items: [
            'classification/v0-3/system',
            'classification/v0-3/structure',
            'classification/v0-3/scale',
            'classification/v0-3/format',
            'classification/v0-3/tenure',
            {
              label: 'Classes',
              autogenerate: {directory: 'classification/v0-3/classes', collapsed: true},
              collapsed: false,
            }
          ],
        },
        {
          label: 'About us',
          items: [
            {
              label: 'Governance',
              autogenerate: {directory: 'governance/NZLUSG'}
            },
            { label: 'Contact us', link: '/governance/contact' },
          ],
        },
        {
          label: 'References',
          items: [
            { label: 'Terms', link: '/reference/terms' },
            { label: 'Documents', link: '/reference/documents' },
          ],
        }
        ,
      ],
    }),
  ],
});